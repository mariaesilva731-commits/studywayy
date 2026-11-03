import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import ProgressRow from "../components/ProgressRow";
import GradientSurface from "../components/GradientSurface";
import { getDailyActivityIds } from "../utils/activityStats";
import { getDaysUntilNextEnemExam } from "../utils/calculations";
import { createCalendarActivity, getStudyPlan } from "../services/studyService";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

const subjectIcons = [
  "calculator-outline",
  "text-outline",
  "create-outline",
  "hourglass-outline",
  "hourglass-outline",
  "flash-outline",
];

export default function InicioScreen({
  onNavigate,
  onTaskCompletion,
  activityStats,
  subjects,
  authenticated,
}) {
  const [selectedTasks, setSelectedTasks] = useState(() =>
    getDailyActivityIds(activityStats),
  );
  const [dailyTasks, setDailyTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [taskDraft, setTaskDraft] = useState("");
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDuration, setNewTaskDuration] = useState("30");
  const [newTaskError, setNewTaskError] = useState("");
  const [daysUntilExam, setDaysUntilExam] = useState(() =>
    getDaysUntilNextEnemExam(),
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilExam(getDaysUntilNextEnemExam());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let active = true;
    getStudyPlan().then(({ data, error }) => {
      if (!active || error || !data) return;
      setDailyTasks(data);
      setSelectedTasks(
        data.filter((task) => task.is_completed).map((task) => task.task_key),
      );
    });
    return () => {
      active = false;
    };
  }, [authenticated]);

  function toggleTask(task) {
    const completed = !selectedTasks.includes(task.task_key);
    onTaskCompletion?.(task.task_key, completed, task);
    setSelectedTasks((current) =>
      current.includes(task.task_key)
        ? current.filter((taskKey) => taskKey !== task.task_key)
        : [...current, task.task_key],
    );
  }

  function openTaskEditor(index) {
    setEditingTask(index);
    setTaskDraft(dailyTasks[index].title);
  }

  function saveTaskText() {
    const text = taskDraft.trim();
    if (!text || editingTask === null) return;
    setDailyTasks((current) =>
      current.map((task, index) =>
        index === editingTask ? { ...task, title: text } : task,
      ),
    );
    setEditingTask(null);
  }

  async function addTask() {
    const title = newTaskTitle.trim();
    const duration = Number(newTaskDuration);
    if (!title) {
      setNewTaskError("Informe o nome da tarefa.");
      return;
    }
    if (!Number.isInteger(duration) || duration < 1 || duration > 1440) {
      setNewTaskError("Informe uma duração entre 1 e 1440 minutos.");
      return;
    }

    const now = new Date();
    const activityDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const startTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const result = await createCalendarActivity({
      activity_date: activityDate,
      title,
      start_time: startTime,
      duration_minutes: duration,
    });

    if (result.error || !result.data) {
      setNewTaskError("Não foi possível salvar a tarefa. Tente novamente.");
      return;
    }

    const activity = result.data;
    setDailyTasks((current) => [
      ...current,
      {
        task_key: `calendar-${activity.id}`,
        source: "calendar",
        id: activity.id,
        subject: "Agenda",
        title: activity.title,
        duration_minutes: activity.duration_minutes || duration,
        is_completed: Boolean(activity.is_completed),
      },
    ]);
    setNewTaskTitle("");
    setNewTaskDuration("30");
    setNewTaskError("");
    setAddingTask(false);
  }

  return (
    <MainLayout tab="home" onNavigate={onNavigate}>
      <GradientSurface variant="auth" style={styles.homeTopBar}>
        <View style={styles.homeBrandMark}>
          <Ionicons name="school-outline" size={23} color={COLORS.white} />
        </View>
        <Text style={styles.homeBrandText}>
          Study<Text style={styles.homeBrandAccent}>Way</Text>
        </Text>
        <Pressable
          style={styles.homeProfileButton}
          onPress={() => onNavigate("profile")}
        >
          <Ionicons name="person-outline" size={20} color={COLORS.white} />
        </Pressable>
      </GradientSurface>
      <ScrollView contentContainerStyle={styles.homeScroll}>
        <View style={styles.homeSectionHeader}>
          <Text style={styles.homeSectionTitle}>Tarefas de hoje</Text>
          <View style={styles.homeTaskActions}>
            <Text style={styles.homeTaskCount}>
              {dailyTasks.filter((task) => selectedTasks.includes(task.task_key)).length}/{dailyTasks.length} feitas
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                setNewTaskTitle("");
                setNewTaskDuration("30");
                setNewTaskError("");
                setAddingTask(true);
              }}
              style={styles.addTaskButton}
            >
              <Ionicons name="add" size={17} color={COLORS.white} />
              <Text style={styles.addTaskButtonText}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
        {dailyTasks.map((task, index) => {
          const isCompleted = selectedTasks.includes(task.task_key);
          return (
          <View
            key={task.task_key}
            style={[
              styles.taskCard,
              isCompleted && styles.taskCardActive,
            ]}
          >
            <Pressable
              accessibilityRole="checkbox"
              accessibilityState={{ checked: isCompleted }}
              onPress={() => toggleTask(task)}
              style={[
                styles.taskCheck,
                isCompleted && styles.taskCheckActive,
              ]}
            >
              {isCompleted && (
                <Ionicons name="checkmark" size={13} color={COLORS.white} />
              )}
            </Pressable>
            <View style={styles.taskCopy}>
              <Text
                style={[
                  styles.taskSubject,
                  isCompleted && styles.taskSubjectActive,
                ]}
              >
                {task.subject}
              </Text>
              <Text
                style={[
                  styles.taskTitle,
                  isCompleted && styles.taskTitleActive,
                ]}
              >
                {task.title}
              </Text>
            </View>
            <Text style={styles.taskDuration}>{task.duration_minutes} min</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Editar tarefa: ${task.title}`}
              onPress={() => openTaskEditor(index)}
              style={styles.taskEditButton}
            >
              <Ionicons name="create-outline" size={18} color={COLORS.blue2} />
            </Pressable>
          </View>
          );
        })}

        {dailyTasks.length === 0 && (
          <Text style={styles.emptyActivities}>Nenhuma tarefa para hoje.</Text>
        )}

        <Modal
          visible={editingTask !== null}
          transparent
          animationType="fade"
          onRequestClose={() => setEditingTask(null)}
        >
          <View style={styles.taskEditorBackdrop}>
            <View style={styles.taskEditorCard}>
              <Text style={styles.taskEditorTitle}>Editar tarefa de hoje</Text>
              <TextInput
                value={taskDraft}
                onChangeText={setTaskDraft}
                placeholder="Descreva a tarefa"
                placeholderTextColor={COLORS.muted}
                style={styles.taskEditorInput}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={saveTaskText}
              />
              <View style={styles.taskEditorActions}>
                <Pressable onPress={() => setEditingTask(null)}>
                  <Text style={styles.taskEditorCancel}>Cancelar</Text>
                </Pressable>
                <Pressable
                  onPress={saveTaskText}
                  style={styles.taskEditorSaveButton}
                >
                  <Text style={styles.taskEditorSave}>Salvar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          visible={addingTask}
          transparent
          animationType="fade"
          onRequestClose={() => setAddingTask(false)}
        >
          <View style={styles.taskEditorBackdrop}>
            <View style={styles.taskEditorCard}>
              <Text style={styles.taskEditorTitle}>Adicionar tarefa de hoje</Text>
              <TextInput
                value={newTaskTitle}
                onChangeText={(value) => {
                  setNewTaskTitle(value);
                  setNewTaskError("");
                }}
                placeholder="Nome da tarefa"
                placeholderTextColor={COLORS.muted}
                style={styles.taskEditorInput}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={addTask}
              />
              <TextInput
                value={newTaskDuration}
                onChangeText={(value) => {
                  setNewTaskDuration(value.replace(/\D/g, ""));
                  setNewTaskError("");
                }}
                placeholder="Duração em minutos"
                placeholderTextColor={COLORS.muted}
                keyboardType="number-pad"
                style={[styles.taskEditorInput, styles.addTaskDurationInput]}
              />
              {newTaskError ? (
                <Text style={styles.taskEditorError}>{newTaskError}</Text>
              ) : null}
              <View style={styles.taskEditorActions}>
                <Pressable onPress={() => setAddingTask(false)}>
                  <Text style={styles.taskEditorCancel}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={addTask} style={styles.taskEditorSaveButton}>
                  <Text style={styles.taskEditorSave}>Adicionar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.homeSectionHeaderWithAction}>
          <Text style={styles.homeSectionTitle}>Matérias</Text>
          <Text style={styles.homeSmallAction}>Principais matérias</Text>
        </View>
        <View style={styles.subjectGrid}>
          {subjects.map((subject, index) => (
            <Pressable
              key={subject.name}
              style={styles.homeSubjectCard}
              onPress={() =>
                onNavigate("subject", { subjectName: subject.name })
              }
            >
              <View style={styles.homeSubjectTop}>
                <View style={styles.homeSubjectIcon}>
                  <Ionicons
                    name={subjectIcons[index] || subject.icon}
                    size={31}
                    color={COLORS.blue2}
                  />
                </View>
                <View style={styles.homeSubjectPercent}>
                  <Text style={styles.homeSubjectPercentText}>
                    {subject.progress}%
                  </Text>
                </View>
              </View>
              <Text style={styles.homeSubjectName}>{subject.name}</Text>
              <Text style={styles.homeSubjectSessions}>
                {12 + index * 2} sessões
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.homeSectionTitle}>Recomendados para você</Text>
        {subjects.slice(0, 3).map((subject) => (
          <ProgressRow
            key={subject.name}
            subject={subject}
            onPress={() => onNavigate("materials")}
            large
          />
        ))}

        <GradientSurface variant="dark" style={styles.nextExamCard}>
          <View style={styles.flexFill}>
            <Text style={styles.nextExamLabel}>PRÓXIMA PROVA</Text>
            <Text style={styles.nextExamTitle}>ENEM 2026</Text>
            <Text style={styles.nextExamDate}>8 e 15 de novembro de 2026</Text>
            <Text style={styles.nextExamProgress}>
              0% do cronograma concluído
            </Text>
          </View>
          <View style={styles.nextExamDays}>
            <Text style={styles.nextExamNumber}>{daysUntilExam}</Text>
            <Text style={styles.nextExamDaysLabel}>dias restantes</Text>
          </View>
        </GradientSurface>
      </ScrollView>
    </MainLayout>
  );
}
