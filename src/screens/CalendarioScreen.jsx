import React, { useState } from "react";
import { ScrollView, View, Text, Pressable, TextInput, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import {
  createCalendarActivity,
  deleteCalendarActivity,
  getCalendarActivities,
} from "../services/studyService";

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getCurrentTime() {
  const currentDate = new Date();
  return `${String(currentDate.getHours()).padStart(2, "0")}:${String(currentDate.getMinutes()).padStart(2, "0")}`;
}

export default function CalendarioScreen({ onNavigate, onBack }) {
  const [today, setToday] = useState(() => new Date());
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    return dateKey(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
  });
  const [activities, setActivities] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleteActivityError, setDeleteActivityError] = useState("");
  const [addingActivity, setAddingActivity] = useState(false);
  const [activityDraft, setActivityDraft] = useState("");
  const [activityTime, setActivityTime] = useState(() => getCurrentTime());
  const [activityError, setActivityError] = useState("");
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const selectedActivities = activities[selectedDate] || [];
  const selectedDay = Number(selectedDate.slice(-2));
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

  React.useEffect(() => {
    const interval = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    let active = true;
    const firstDate = dateKey(year, month, 1);
    const lastDate = dateKey(year, month, daysInMonth);
    getCalendarActivities(firstDate, lastDate).then(({ data, error }) => {
      if (!active || error || !data?.length) return;
      setActivities((current) => {
        const next = { ...current };
        data.forEach((activity) => {
          const day = activity.activity_date;
          const time = activity.start_time.slice(0, 5);
          const mapped = {
            id: activity.id,
            title: activity.title,
            time,
            duration: activity.duration_minutes,
          };
          const dayActivities = next[day] || [];
          if (!dayActivities.some((item) => item.id === mapped.id)) {
            next[day] = [...dayActivities, mapped];
          }
        });
        return next;
      });
    });
    return () => {
      active = false;
    };
  }, [year, month, daysInMonth]);

  function changeMonth(amount) {
    changeVisibleMonth(amount);
  }

  function changeVisibleMonth(amount) {
    const next = new Date(year, month + amount, 1);
    const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
    const nextDay = Math.min(Number(selectedDate.slice(-2)), lastDay);
    setVisibleMonth(next);
    setSelectedDate(dateKey(next.getFullYear(), next.getMonth(), nextDay));
  }

  async function addActivity() {
    const title = activityDraft.trim();
    if (!title) {
      setActivityError("Informe o nome da atividade.");
      return;
    }
    if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(activityTime)) {
      setActivityError("Informe um horário válido entre 00:00 e 23:59.");
      return;
    }
    if (selectedDate < todayKey) {
      setActivityError("Escolha hoje ou uma data futura para a atividade.");
      return;
    }
    setActivityError("");
    const result = await createCalendarActivity({
      activity_date: selectedDate,
      title,
      start_time: activityTime,
      duration_minutes: 30,
    });
    if (result.error || !result.data) {
      setActivityError("Não foi possível salvar essa atividade.");
      return;
    }
    const savedActivity = {
      id: result.data.id,
      title: result.data.title,
      time: (result.data.start_time || activityTime).slice(0, 5),
      duration: result.data.duration_minutes || 30,
      is_completed: Boolean(result.data.is_completed),
    };
    setActivities((current) => ({
      ...current,
      [selectedDate]: [...(current[selectedDate] || []), savedActivity],
    }));
    setActivityDraft("");
    setActivityTime(getCurrentTime());
    setAddingActivity(false);
  }

  async function removeSelectedActivity() {
    if (!selectedActivity?.id) return;
    const result = await deleteCalendarActivity(selectedActivity.id);
    if (result.error) {
      setDeleteActivityError("Não foi possível excluir a atividade. Tente novamente.");
      return;
    }

    setActivities((current) => ({
      ...current,
      [selectedDate]: (current[selectedDate] || []).filter(
        (activity) => activity.id !== selectedActivity.id,
      ),
    }));
    setDeleteActivityError("");
    setConfirmingDelete(false);
    setSelectedActivity(null);
  }

  function openActivityForm() {
    setActivityDraft("");
    setActivityTime(getCurrentTime());
    setActivityError("");
    setAddingActivity(true);
  }

  function updateActivityTime(value) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    const formatted = digits.length > 2
      ? `${digits.slice(0, 2)}:${digits.slice(2)}`
      : digits;
    setActivityTime(formatted);
    setActivityError("");
  }

  const calendarCells = [
    ...Array.from({ length: firstWeekday }, (_, index) => ({ key: `blank-${index}` })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({ day: index + 1 })),
    ...Array.from(
      { length: (7 - ((firstWeekday + daysInMonth) % 7)) % 7 },
      (_, index) => ({ key: `trailing-${index}` }),
    ),
  ];

  return (
    <MainLayout
      tab="calendar"
      onNavigate={onNavigate}
      header={
        <Header
          title="Calendário"
          subtitle="Organize sua semana de estudos."
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View style={styles.monthRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Mês anterior"
            style={styles.roundButton}
            onPress={() => changeMonth(-1)}
          >
            <Ionicons name="chevron-back" size={18} color={COLORS.text} />
          </Pressable>
          <Text style={styles.monthTitle}>{monthNames[month]} {year}</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Próximo mês"
            style={styles.roundButton}
            onPress={() => changeMonth(1)}
          >
            <Ionicons name="chevron-forward" size={18} color={COLORS.text} />
          </Pressable>
        </View>
        <View style={styles.weekHeader}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        <View style={styles.calendarGrid}>
          {calendarCells.map((cell) => {
            if (!cell.day) return <View key={cell.key} style={styles.calendarEmptyDay} />;
            const key = dateKey(year, month, cell.day);
            const isSelected = key === selectedDate;
            const isToday = key === todayKey;
            const hasActivities = (activities[key] || []).length > 0;
            return (
              <Pressable
                key={key}
                accessibilityRole="button"
                accessibilityLabel={`${cell.day} de ${monthNames[month]}${isToday ? ", hoje" : ""}`}
                accessibilityState={{ selected: isSelected }}
                onPress={() => setSelectedDate(key)}
                style={[
                  styles.day,
                  isToday && styles.dayToday,
                  isSelected && styles.dayActive,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    isToday && styles.dayTodayText,
                    isSelected && styles.dayTextActive,
                  ]}
                >
                  {cell.day}
                </Text>
                {hasActivities && <View style={styles.dayDot} />}
              </Pressable>
            );
          })}
        </View>
        <View style={styles.calendarActivitiesHeader}>
          <Text style={styles.sectionTitle}>
            Atividades de {String(selectedDay).padStart(2, "0")}/{String(month + 1).padStart(2, "0")}/{year}{selectedDate === todayKey ? " (hoje)" : ""}
          </Text>
          <Pressable
            accessibilityRole="button"
            disabled={selectedDate < todayKey}
            onPress={openActivityForm}
            style={[
              styles.addActivityButton,
              selectedDate < todayKey && { opacity: 0.45 },
            ]}
          >
            <Ionicons name="add" size={17} color={COLORS.white} />
            <Text style={styles.addActivityText}>Adicionar</Text>
          </Pressable>
        </View>
        {selectedActivities.length === 0 ? (
          <Text style={styles.emptyActivities}>Nenhuma atividade neste dia.</Text>
        ) : selectedActivities.map((activity, index) => (
          <Pressable
            key={`${selectedDate}-${index}`}
            accessibilityRole="button"
            accessibilityLabel={`Detalhes da atividade: ${activity.title}`}
            onPress={() => {
              setDeleteActivityError("");
              setSelectedActivity(activity);
            }}
            style={styles.taskRow}
          >
            <View style={styles.taskTime}>
              <Text style={styles.taskHour}>{activity.time}</Text>
            </View>
            <View style={styles.flexFill}>
              <Text style={styles.progressName}>{activity.title}</Text>
              {activity.duration ? (
                <Text style={styles.cardMuted}>{activity.duration} min</Text>
              ) : null}
            </View>
            <Ionicons name="calendar-outline" size={21} color={COLORS.blue2} />
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        visible={addingActivity}
        transparent
        animationType="fade"
        onRequestClose={() => setAddingActivity(false)}
      >
        <View style={styles.activityModalBackdrop}>
          <View style={styles.activityModalCard}>
            <Text style={styles.activityModalTitle}>Nova atividade</Text>
            <Text style={styles.activityModalHint}>
              {String(selectedDay).padStart(2, "0")}/{String(month + 1).padStart(2, "0")}/{year}
            </Text>
            <TextInput
              autoFocus
              value={activityDraft}
              onChangeText={setActivityDraft}
              placeholder="Ex.: Revisar funções"
              placeholderTextColor={COLORS.muted}
              style={styles.activityModalInput}
              returnKeyType="done"
              onSubmitEditing={addActivity}
            />
            <TextInput
              value={activityTime}
              onChangeText={updateActivityTime}
              placeholder="Horário (HH:mm)"
              placeholderTextColor={COLORS.muted}
              style={styles.activityModalInput}
              keyboardType="numbers-and-punctuation"
              maxLength={5}
              returnKeyType="done"
              accessibilityLabel="Horário da atividade, formato horas e minutos"
            />
            {!!activityError && (
              <Text style={styles.logoutText}>{activityError}</Text>
            )}
            <View style={styles.activityModalActions}>
              <Pressable onPress={() => setAddingActivity(false)}>
                <Text style={styles.activityCancelText}>Cancelar</Text>
              </Pressable>
              <Pressable onPress={addActivity} style={styles.addActivityButton}>
                <Text style={styles.addActivityText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={selectedActivity !== null}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setSelectedActivity(null);
          setDeleteActivityError("");
        }}
      >
        <View style={styles.activityModalBackdrop}>
          <View style={styles.activityModalCard}>
            <Text style={styles.activityModalTitle}>
              {selectedActivity?.title}
            </Text>
            <Text style={styles.activityModalHint}>
              {String(selectedDay).padStart(2, "0")}/{String(month + 1).padStart(2, "0")}/{year}
            </Text>
            <Text style={styles.activityModalHint}>
              Horário: {selectedActivity?.time}
            </Text>
            {selectedActivity?.duration ? (
              <Text style={styles.activityModalHint}>
                Duração: {selectedActivity.duration} min
              </Text>
            ) : null}
            {!!deleteActivityError && (
              <Text style={styles.logoutText}>{deleteActivityError}</Text>
            )}
            <View style={styles.activityModalActions}>
              <Pressable onPress={() => setSelectedActivity(null)}>
                <Text style={styles.activityCancelText}>Fechar</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => setConfirmingDelete(true)}
                style={styles.deleteActivityButton}
              >
                <Text style={styles.addActivityText}>Excluir atividade</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={confirmingDelete}
        transparent
        animationType="fade"
        onRequestClose={() => setConfirmingDelete(false)}
      >
        <View style={styles.activityModalBackdrop}>
          <View style={styles.activityModalCard}>
            <Text style={styles.activityModalTitle}>Excluir atividade?</Text>
            <Text style={styles.activityModalHint}>
              {"Esta a\u00e7\u00e3o remover\u00e1 a atividade do calend\u00e1rio."}
            </Text>
            {!!deleteActivityError && (
              <Text style={styles.logoutText}>{deleteActivityError}</Text>
            )}
            <View style={styles.activityModalActions}>
              <Pressable onPress={() => setConfirmingDelete(false)}>
                <Text style={styles.activityCancelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={removeSelectedActivity}
                style={styles.deleteActivityButton}
              >
                <Text style={styles.addActivityText}>Excluir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </MainLayout>
  );
}
