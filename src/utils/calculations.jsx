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

export function getDaysUntilNextEnemExam(today = new Date()) {
  const examDates = [new Date(2026, 10, 8), new Date(2026, 10, 15)];
  const todayUtc = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const remainingDays = examDates
    .map((examDate) =>
      Math.ceil(
        (Date.UTC(
          examDate.getFullYear(),
          examDate.getMonth(),
          examDate.getDate(),
        ) - todayUtc) / 86400000,
      ),
    )
    .filter((days) => days >= 0);

  return remainingDays.length ? Math.min(...remainingDays) : 0;
}
