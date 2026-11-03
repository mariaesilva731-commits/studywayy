import React, { useEffect, useState } from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import {
  getInitialActivityStats,
  recordActivity,
  saveActivityStats,
  setTaskCompletion,
} from "./src/utils/activityStats";
import { getSubjectsWithProgress } from "./src/data/subjects";
import { supabase } from "./src/services/supabase";
import { getSubjects } from "./src/services/contentService";
import { getUserProfile, updateUserProfile } from "./src/services/userService";
import {
  getStudyActivityStats,
  recordStudyActivity,
  updateStudyTask,
  updateCalendarActivityCompletion,
} from "./src/services/studyService";

export default function App() {
  const [routeStack, setRouteStack] = useState([
    { screen: "splash", params: {} },
  ]);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [institution, setInstitution] = useState("ENEM");
  const [activityStats, setActivityStats] = useState(getInitialActivityStats);
  const [user, setUser] = useState(null);
  const [remoteSubjects, setRemoteSubjects] = useState(null);
  const [profile, setProfile] = useState(null);
  const subjects = remoteSubjects || getSubjectsWithProgress(activityStats);
  const currentRoute = routeStack[routeStack.length - 1];

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const sessionUser = data.session?.user || null;
      setUser(sessionUser);
      if (sessionUser) setRouteStack([{ screen: "home", params: {} }]);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setRemoteSubjects(null);
      setProfile(null);
      return undefined;
    }

    let active = true;
    getSubjects(user.id).then(({ data, error }) => {
      if (active && !error && data) setRemoteSubjects(data);
    });
    getUserProfile().then(({ data, error }) => {
      if (active && !error && data) setProfile(data);
    });
    getStudyActivityStats(user.id).then(({ data, error }) => {
      if (active && !error && data) setActivityStats(data);
    });
    return () => {
      active = false;
    };
  }, [user]);

  function navigate(screen, params = {}, options = {}) {
    const route = { screen, params };
    setRouteStack((current) => {
      const previous = current[current.length - 1];
      if (
        previous.screen === screen &&
        JSON.stringify(previous.params) === JSON.stringify(params)
      ) {
        return current;
      }
      if (options.reset) return [route];
      if (options.replace) {
        const existingIndex = current
          .map((item) => item.screen)
          .lastIndexOf(screen);
        return existingIndex >= 0
          ? current.slice(0, existingIndex + 1)
          : [...current.slice(0, -1), route];
      }
      return [...current, route];
    });
  }

  function goBack(fallback = "home") {
    setRouteStack((current) =>
      current.length > 1
        ? current.slice(0, -1)
        : [{ screen: fallback, params: {} }],
    );
  }

  useEffect(() => {
    saveActivityStats(activityStats);
  }, [activityStats]);

  function onStudyActivity(activityId) {
    setActivityStats((current) => recordActivity(current, activityId));
    if (user) recordStudyActivity(activityId);
  }

  async function onTaskCompletion(taskKey, completed, task) {
    setActivityStats((current) =>
      setTaskCompletion(current, taskKey, completed, task.subject),
    );
    if (!user && task.source !== "calendar") return;

    const result =
      task.source === "calendar"
        ? await updateCalendarActivityCompletion(task.id, completed)
        : await updateStudyTask(task.task_index, task, completed);
    if (!result.error) {
      if (completed) recordStudyActivity(taskKey);
      if (user) {
        const subjectsResult = await getSubjects(user.id);
        if (!subjectsResult.error) setRemoteSubjects(subjectsResult.data);
      }
    }
  }

  async function onProfileUpdate(fullName) {
    if (!user) return { data: null, error: null };
    const result = await updateUserProfile({ full_name: fullName });
    if (!result.error) setProfile(result.data);
    return result;
  }

  return (
    <AppNavigation
      screen={currentRoute.screen}
      routeParams={currentRoute.params}
      goBack={goBack}
      onboardingStep={onboardingStep}
      institution={institution}
      navigate={navigate}
      setOnboardingStep={setOnboardingStep}
      setInstitution={setInstitution}
      activityStats={activityStats}
      subjects={subjects}
      profile={profile}
      authenticated={Boolean(user)}
      onProfileUpdate={onProfileUpdate}
      onSignOut={async () => {
        await supabase.auth.signOut();
        setRemoteSubjects(null);
        navigate("login", {}, { reset: true });
      }}
      onStudyActivity={onStudyActivity}
      onTaskCompletion={onTaskCompletion}
    />
  );
}
