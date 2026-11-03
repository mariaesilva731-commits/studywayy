import { supabase } from "./supabase";
import { calculateProgress } from "../utils/calculations";

export async function getSubjects(userId) {
  const { data: subjectRows, error } = await supabase
    .from("studyway_subjects")
    .select("id, name, total, icon, sort_order")
    .order("sort_order");
  if (error) return { data: null, error };
  if (!userId) {
    return {
      data: subjectRows.map((subject) => ({
        ...subject,
        completed: 0,
        progress: calculateProgress(0, subject.total),
      })),
      error: null,
    };
  }

  const { data: completedTasks, error: tasksError } = await supabase
    .from("studyway_daily_tasks")
    .select("subject")
    .eq("user_id", userId)
    .eq("is_completed", true);
  if (tasksError) return { data: null, error: tasksError };

  const completedBySubject = completedTasks.reduce((counts, task) => {
    const subjectName = task.subject === "Redação" ? "Português" : task.subject;
    counts[subjectName] = (counts[subjectName] || 0) + 1;
    return counts;
  }, {});

  return {
    data: subjectRows.map((subject) => {
      const completed = completedBySubject[subject.name] || 0;
      return {
        ...subject,
        completed,
        progress: calculateProgress(completed, subject.total),
      };
    }),
    error: null,
  };
}
