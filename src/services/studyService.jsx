import { supabase } from "./supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CALENDAR_STORAGE_KEY = "studyway:calendar-activities";

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function getUserId() {
  const { data, error } = await supabase.auth.getUser();
  return { userId: data?.user?.id, error };
}

export async function getStudyPlan(date = new Date()) {
  const { userId, error } = await getUserId();
  const taskDate = dateKey(date);
  const calendarResult = await getCalendarActivities(taskDate, taskDate);
  const calendarTasks = (calendarResult.data || []).map((activity) => ({
    task_key: `calendar-${activity.id}`,
    source: "calendar",
    id: activity.id,
    subject: "Agenda",
    title: activity.title,
    duration_minutes: activity.duration_minutes || 30,
    is_completed: Boolean(activity.is_completed),
  }));

  if (error || !userId) {
    return { data: calendarTasks, error: null };
  }

  const table = supabase.from("studyway_daily_tasks");
  const current = await table
    .select("task_index, subject, title, duration_minutes, is_completed")
    .eq("user_id", userId)
    .eq("task_date", taskDate)
    .order("task_index");


  if (current.error) return { data: calendarTasks, error: current.error };
  const dailyTasks = current.data.map((task) => ({
    ...task,
    task_key: `task-${task.task_index}`,
    source: "daily",
    id: null,
  }));
  return { data: [...dailyTasks, ...calendarTasks], error: null };
}

export async function updateStudyTask(taskIndex, task, completed, date = new Date()) {
  const { userId, error } = await getUserId();
  if (error || !userId) return { data: null, error };

  return supabase
    .from("studyway_daily_tasks")
    .upsert(
      {
        user_id: userId,
        task_date: dateKey(date),
        task_index: taskIndex,
        subject: task.subject,
        title: task.title,
        duration_minutes: task.duration_minutes,
        is_completed: completed,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,task_date,task_index" },
    )
    .select()
    .single();
}

export async function recordStudyActivity(activityType, date = new Date()) {
  const { userId, error } = await getUserId();
  if (error || !userId) return { data: null, error };

  return supabase
    .from("studyway_activities")
    .upsert(
      {
        user_id: userId,
        activity_type: activityType,
        activity_day: dateKey(date),
      },
      { onConflict: "user_id,activity_type,activity_day", ignoreDuplicates: true },
    );
}

export async function getStudyActivityStats(userId) {
  const [activitiesResult, tasksResult] = await Promise.all([
    supabase
      .from("studyway_activities")
      .select("activity_type, activity_day")
      .eq("user_id", userId),
    supabase
      .from("studyway_daily_tasks")
      .select("task_index, task_date, subject, is_completed")
      .eq("user_id", userId)
      .eq("is_completed", true),
  ]);

  if (activitiesResult.error) {
    return { data: null, error: activitiesResult.error };
  }
  if (tasksResult.error) return { data: null, error: tasksResult.error };

  return {
    data: {
      activities: activitiesResult.data.map((activity) => ({
        id: `${activity.activity_day}:${activity.activity_type}`,
        day: activity.activity_day,
      })),
      taskCompletions: tasksResult.data.map((task) => ({
        id: `${task.task_date}:task-${task.task_index}`,
        day: task.task_date,
        subject: task.subject,
      })),
    },
    error: null,
  };
}

export async function getCalendarActivities(startDate, endDate) {
  const { userId, error } = await getUserId();
  let remoteActivities = [];
  if (!error && userId) {
    const result = await supabase
      .from("studyway_calendar_activities")
      .select("id, activity_date, title, start_time, duration_minutes, is_completed")
      .eq("user_id", userId)
      .gte("activity_date", startDate)
      .lte("activity_date", endDate)
      .order("start_time");
    if (!result.error) remoteActivities = result.data;
  }

  let localActivities = [];
  try {
    const saved = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    localActivities = Array.isArray(parsed)
      ? parsed.filter(
          (activity) =>
            activity.activity_date >= startDate &&
            activity.activity_date <= endDate,
        )
      : [];
  } catch {
    localActivities = [];
  }

  const activitiesById = new Map(
    localActivities.map((activity) => [activity.id, activity]),
  );
  remoteActivities.forEach((activity) => activitiesById.set(activity.id, activity));
  return {
    data: [...activitiesById.values()].sort((first, second) =>
      first.start_time.localeCompare(second.start_time),
    ),
    error: null,
  };
}

export async function createCalendarActivity(activity) {
  const { userId, error } = await getUserId();
  if (!error && userId) {
    const result = await supabase
      .from("studyway_calendar_activities")
      .insert({ user_id: userId, ...activity })
      .select()
      .single();
    if (!result.error) return result;
  }

  const localActivity = {
    ...activity,
    id: `local-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    is_completed: false,
  };
  try {
    const saved = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    const activities = saved ? JSON.parse(saved) : [];
    await AsyncStorage.setItem(
      CALENDAR_STORAGE_KEY,
      JSON.stringify([...activities, localActivity]),
    );
  } catch {
    return { data: null, error: new Error("Não foi possível salvar a atividade.") };
  }
  return { data: localActivity, error: null };
}

export async function updateCalendarActivityCompletion(id, isCompleted) {
  const { userId, error } = await getUserId();
  if (!error && userId && !String(id).startsWith("local-")) {
    const result = await supabase
      .from("studyway_calendar_activities")
      .update({ is_completed: isCompleted })
      .eq("user_id", userId)
      .eq("id", id)
      .select()
      .single();
    if (!result.error) return result;
  }

  try {
    const saved = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    const activities = saved ? JSON.parse(saved) : [];
    const updated = activities.map((activity) =>
      activity.id === id ? { ...activity, is_completed: isCompleted } : activity,
    );
    await AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(updated));
    return { data: updated.find((activity) => activity.id === id) || null, error: null };
  } catch (storageError) {
    return { data: null, error: storageError };
  }
}

export async function deleteCalendarActivity(id) {
  const activityId = String(id);
  const { userId, error } = await getUserId();

  if (!error && userId && !activityId.startsWith("local-")) {
    const result = await supabase
      .from("studyway_calendar_activities")
      .delete()
      .eq("user_id", userId)
      .eq("id", activityId);
    if (result.error) return { data: null, error: result.error };
  }

  try {
    const saved = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    const activities = saved ? JSON.parse(saved) : [];
    const updated = activities.filter((activity) => String(activity.id) !== activityId);
    await AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(updated));
    return { data: { id }, error: null };
  } catch (storageError) {
    return { data: null, error: storageError };
  }
}
