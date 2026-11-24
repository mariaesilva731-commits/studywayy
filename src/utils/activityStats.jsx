const STORAGE_KEY = "studyway:activity-stats";

function createDemoActivityStats(today = new Date()) {
  const activities = [];
  const taskCompletions = [];
  const subjects = [
    "Matemática",
    "Português",
    "História",
    "Geografia",
    "Biologia",
    "Química",
  ];

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - offset);
    const day = localDateKey(date);
    const dailyCount = [1, 2, 1, 3, 2, 1, 2][6 - offset];

    for (let index = 0; index < dailyCount; index += 1) {
      activities.push({
        id: `${day}:demo-study-${index}`,
        day,
      });
    }

    const subject = subjects[(6 - offset) % subjects.length];
    taskCompletions.push({
      id: `${day}:demo-task-${6 - offset}`,
      day,
      subject,
    });
  }

  return { activities, taskCompletions, demo: true };
}

export function getInitialActivityStats() {
  if (typeof localStorage === "undefined") return createDemoActivityStats();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed &&
      Array.isArray(parsed.activities) &&
      (parsed.activities.length ||
        (Array.isArray(parsed.taskCompletions) && parsed.taskCompletions.length))
      ? parsed
      : createDemoActivityStats();
  } catch {
    return createDemoActivityStats();
  }
}

export function saveActivityStats(stats) {
  if (typeof localStorage === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Storage can be unavailable in private browsing; in-memory stats still work.
  }
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getWeeklyActivityCounts(stats, today = new Date()) {
  const startOfWeek = new Date(today);
  startOfWeek.setHours(0, 0, 0, 0);
  const mondayOffset = (startOfWeek.getDay() + 6) % 7;
  startOfWeek.setDate(startOfWeek.getDate() - mondayOffset);

  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);
    return {
      day: localDateKey(date),
      label: date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
      count: 0,
    };
  });
  const countsByDay = new Map(week.map(({ day }) => [day, new Set()]));

  [...(stats?.activities || []), ...(stats?.taskCompletions || [])].forEach(
    (activity, index) => {
      const dayActivities = countsByDay.get(activity.day);
      if (!dayActivities) return;

      const activityId = activity.id?.startsWith(`${activity.day}:`)
        ? activity.id.slice(activity.day.length + 1)
        : activity.id || `activity-${index}`;
      dayActivities.add(activityId);
    },
  );

  return week.map(({ day, label }) => ({
    day,
    label,
    count: countsByDay.get(day).size,
  }));
}

export function recordActivity(stats, activityId, date = new Date()) {
  const currentStats = stats.demo
    ? { activities: [], taskCompletions: [], demo: false }
    : stats;
  const day = localDateKey(date);
  const uniqueId = `${day}:${activityId}`;
  if (currentStats.activities.some((activity) => activity.id === uniqueId)) {
    return currentStats;
  }

  return {
    ...currentStats,
    activities: [...currentStats.activities, { id: uniqueId, day }],
  };
}

export function setTaskCompletion(
  stats,
  taskKey,
  completed,
  subject,
  date = new Date(),
) {
  const currentStats = stats.demo
    ? { activities: [], taskCompletions: [], demo: false }
    : stats;
  const day = localDateKey(date);
  const taskId = String(taskKey).startsWith("task-") ||
    String(taskKey).startsWith("calendar-")
    ? String(taskKey)
    : `task-${taskKey}`;
  const uniqueId = `${day}:${taskId}`;
  const taskCompletions = (currentStats.taskCompletions || currentStats.activities)
    .filter((activity) => activity.id !== uniqueId);
  const nextStats = completed
    ? recordActivity(currentStats, taskId, date)
    : currentStats;

  return {
    ...nextStats,
    taskCompletions: completed
      ? [...taskCompletions, { id: uniqueId, day, subject }]
      : taskCompletions,
  };
}

export function getDailyActivityIds(stats, date = new Date()) {
  const day = localDateKey(date);
  const prefix = `${day}:`;

  return (stats.taskCompletions || stats.activities)
    .filter((activity) => activity.day === day && activity.id.startsWith(prefix))
    .map((activity) => activity.id.slice(prefix.length));
}

export function getActivitySummary(stats, today = new Date()) {
  const studyDays = [...new Set(stats.activities.map((activity) => activity.day))]
    .sort();
  const longestStreak = getLongestStreak(studyDays);
  const daySet = new Set(studyDays);
  const todayKey = localDateKey(today);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = localDateKey(yesterday);
  let streak = 0;
  const cursor = new Date(today);

  if (!daySet.has(todayKey)) {
    if (daySet.has(yesterdayKey)) cursor.setDate(cursor.getDate() - 1);
    else {
      return {
        streak: 0,
        achievements: countAchievements(studyDays.length, longestStreak, stats.activities.length),
      };
    }
  }

  while (daySet.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    streak,
    achievements: countAchievements(
      studyDays.length,
      longestStreak,
      stats.activities.length,
    ),
  };
}

function getLongestStreak(studyDays) {
  let longest = 0;
  let current = 0;
  let previousDate = null;

  for (const day of studyDays) {
    const [year, month, date] = day.split("-").map(Number);
    const currentDate = Date.UTC(year, month - 1, date);
    const daysBetween = previousDate
      ? (currentDate - previousDate) / 86400000
      : null;

    current = daysBetween === 1 ? current + 1 : 1;
    longest = Math.max(longest, current);
    previousDate = currentDate;
  }

  return longest;
}

function countAchievements(studyDays, streak, activities) {
  return [
    studyDays >= 1,
    studyDays >= 3,
    studyDays >= 5,
    streak >= 7,
    activities >= 10,
    activities >= 50,
  ].filter(Boolean).length;
}
