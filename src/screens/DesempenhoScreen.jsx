import React from "react";
import { ScrollView, View, Text } from "react-native";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import ProgressRow from "../components/ProgressRow";
import { calculateAverageProgress } from "../utils/calculations";
import { getWeeklyActivityCounts } from "../utils/activityStats";
import { styles } from "../styles/globalStyles";
export default function DesempenhoScreen({ onNavigate, onBack, subjects, activityStats }) {
  const overallProgress = calculateAverageProgress(subjects);
  const weeklyActivity = getWeeklyActivityCounts(activityStats);
  const maxDailyActivity = Math.max(1, ...weeklyActivity.map(({ count }) => count));
  return (
    <MainLayout
      tab="performance"
      onNavigate={onNavigate}
      header={
        <Header
          title="Desempenho"
          subtitle="Acompanhe sua evolução."
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View style={styles.performanceHero}>
          <Text style={styles.cardEyebrow}>DESEMPENHO GERAL</Text>
          <Text style={styles.performanceNumber}>{overallProgress}%</Text>
          <Text style={styles.cardMuted}>Média de progresso das matérias</Text>
        </View>
        <Text style={styles.sectionTitle}>Por matéria</Text>
        {subjects.map((subject) => (
          <ProgressRow
            key={subject.name}
            subject={subject}
            onPress={() => onNavigate("subject", { subjectName: subject.name })}
          />
        ))}
        <Text style={styles.sectionTitle}>Seu ritmo</Text>
        <View style={styles.chartCard}>
          {weeklyActivity.map(({ day, label, count }) => (
            <View key={day} style={styles.chartColumn}>
              <Text style={styles.chartValue}>{count}</Text>
              <View
                style={[
                  styles.chartBar,
                  { height: count ? Math.max(8, (count / maxDailyActivity) * 82) : 4 },
                ]}
              />
              <Text style={styles.chartLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
}
