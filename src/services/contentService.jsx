import { supabase } from "./supabase";
import { calculateProgress } from "../utils/calculations";
import { subjects as demoSubjects } from "../data/subjects";

const demoSubjectByName = new Map(
  demoSubjects.map((subject) => [subject.name, subject]),
);

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
        completed: demoSubjectByName.get(subject.name)?.completed || 0,
        total: demoSubjectByName.get(subject.name)?.total || subject.total,
        progress: demoSubjectByName.get(subject.name)?.progress || 0,
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
      const demoSubject = demoSubjectByName.get(subject.name);
      const completed =
        (demoSubject?.completed || 0) + (completedBySubject[subject.name] || 0);
      const total = demoSubject?.total || subject.total;
      return {
        ...subject,
        completed,
        total,
        progress: calculateProgress(completed, total),
      };
    }),
    error: null,
  };
}
