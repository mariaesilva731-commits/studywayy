import { calculateProgress } from "../utils/calculations";

const subjectProgress = [
  { name: "Matemática", completed: 8, total: 24, icon: "calculator-outline" },
  { name: "Português", completed: 11, total: 28, icon: "book-outline" },
  { name: "História", completed: 6, total: 20, icon: "time-outline" },
  { name: "Geografia", completed: 7, total: 20, icon: "earth-outline" },
  { name: "Biologia", completed: 9, total: 24, icon: "leaf-outline" },
  { name: "Química", completed: 5, total: 20, icon: "flask-outline" },
];

export const subjects = subjectProgress.map((subject) => ({
  ...subject,
  progress: calculateProgress(subject.completed, subject.total),
}));

const legacyTaskSubjects = [
  "Matemática",
  "Português",
  "Português",
  "História",
];

export function getSubjectsWithProgress(activityStats) {
  const completedBySubject = (activityStats.taskCompletions || []).reduce(
    (counts, completion) => {
      const taskIndex = Number(
        String(completion.id).match(/task-(\d+)$/)?.[1] ?? -1,
      );
      const taskSubject = completion.subject || legacyTaskSubjects[taskIndex];
      const subjectName = taskSubject === "Redação" ? "Português" : taskSubject;

      if (subjectName) {
        counts[subjectName] = (counts[subjectName] || 0) + 1;
      }
      return counts;
    },
    {},
  );

  return subjectProgress.map((subject) => {
    const completed =
      subject.completed + (completedBySubject[subject.name] || 0);
    return {
      ...subject,
      completed,
      progress: calculateProgress(completed, subject.total),
    };
  });
}

export const institutions = ["ENEM", "USP", "UNESP"];
