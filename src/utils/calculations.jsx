export function calculateProgress(completed, total) {
  const completedCount = Number(completed);
  const totalCount = Number(total);

  if (!Number.isFinite(completedCount) || !Number.isFinite(totalCount) || totalCount <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round((completedCount / totalCount) * 100)));
}

export function calculateAverageProgress(items) {
  if (!items.length) return 0;

  const totalProgress = items.reduce(
    (sum, item) => sum + calculateProgress(item.completed, item.total),
    0,
  );

  return Math.round(totalProgress / items.length);
}

export function getNextEnemExamDate(today = new Date()) {
  let year = today.getFullYear();
  let examDate = new Date(year, 10, 1);
  examDate.setDate(examDate.getDate() + ((7 - examDate.getDay()) % 7));

  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  if (Date.UTC(year, examDate.getMonth(), examDate.getDate()) < todayUtc) {
    year += 1;
    examDate = new Date(year, 10, 1);
    examDate.setDate(examDate.getDate() + ((7 - examDate.getDay()) % 7));
  }

  return examDate;
}

export function getMonthsUntilNextEnemExam(today = new Date()) {
  const examDate = getNextEnemExamDate(today);
  let months =
    (examDate.getFullYear() - today.getFullYear()) * 12 +
    examDate.getMonth() -
    today.getMonth();

  if (examDate.getDate() < today.getDate()) months -= 1;
  return Math.max(0, months);
}
