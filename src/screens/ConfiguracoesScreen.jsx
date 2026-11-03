import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import { getUserPreferences, updateUserPreferences } from "../services/userService";

export default function ConfiguracoesScreen({
  onNavigate,
  onBack,
  onSignOut,
  authenticated,
}) {
  const [activeTab, setActiveTab] = useState("notifications");
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    if (typeof localStorage === "undefined") return true;
    try {
      return localStorage.getItem("studyway:notifications-enabled") !== "false";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!authenticated) return;
    getUserPreferences().then(({ data, error }) => {
      if (!error && data) setNotificationsEnabled(data.notifications_enabled);
    });
  }, [authenticated]);

  function toggleNotifications() {
    const nextValue = !notificationsEnabled;
    setNotificationsEnabled(nextValue);
    try {
      localStorage?.setItem(
        "studyway:notifications-enabled",
        String(nextValue),
      );
    } catch {
      // Keep the preference in memory when browser storage is unavailable.
    }
    if (authenticated) {
      updateUserPreferences({ notifications_enabled: nextValue });
    }
  }

  return (
    <MainLayout
      onNavigate={onNavigate}
      header={<Header title="Configurações" subtitle="Personalize o StudyWay." onBack={onBack} />}
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View
          accessibilityRole="tablist"
          style={styles.institutionTabs}
        >
          {[
            ["notifications", "Notificações"],
            ["privacy", "Privacidade e segurança"],
          ].map(([key, label]) => (
            <Pressable
              key={key}
              accessibilityRole="tab"
              accessibilityState={{ selected: activeTab === key }}
              onPress={() => setActiveTab(key)}
              style={[
                styles.institutionTab,
                activeTab === key && styles.institutionTabActive,
              ]}
            >
              <Text
                style={[
                  styles.institutionText,
                  activeTab === key && styles.institutionTextActive,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
        {activeTab === "notifications" ? (
          <Pressable
            accessibilityRole="switch"
            accessibilityLabel="Receber lembretes de estudo"
            accessibilityState={{ checked: notificationsEnabled }}
            onPress={toggleNotifications}
            style={styles.settingRow}
          >
            <View style={styles.settingIcon}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={COLORS.blue2}
              />
            </View>
            <View style={styles.flexFill}>
              <Text style={styles.progressName}>Notificações</Text>
              <Text style={styles.cardMuted}>Receber lembretes de estudo</Text>
            </View>
            <View
              style={[
                styles.toggle,
                !notificationsEnabled && { backgroundColor: COLORS.muted },
              ]}
            >
              <View
                style={[
                  styles.toggleKnob,
                  { alignSelf: notificationsEnabled ? "flex-end" : "flex-start" },
                ]}
              />
            </View>
          </Pressable>
        ) : (
          <View style={{ marginTop: 18, gap: 8 }}>
            <Text style={styles.progressName}>Dados e armazenamento</Text>
            <Text style={styles.paragraph}>
              Suas tarefas, seu progresso e suas preferências são usados para
              apresentar sua rotina de estudos. Quando você entra na conta,
              esses dados são salvos no Supabase e associados ao seu usuário;
              sem conexão, o aplicativo mantém o progresso local disponível.
            </Text>
            <Text style={styles.progressName}>Proteção da conta</Text>
            <Text style={styles.paragraph}>
              A autenticação é demonstrativa nesta versão. Não use senhas reais
              ou reutilizadas, nem informe dados financeiros sensíveis. O acesso
              aos dados da conta é limitado ao usuário autenticado. Em
              dispositivos compartilhados, saia da conta ao terminar e mantenha
              o aparelho protegido.
            </Text>
          </View>
        )}
        <Pressable
          onPress={onSignOut}
          style={styles.logout}
        >
          <Ionicons name="log-out-outline" size={20} color={COLORS.red} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </Pressable>
      </ScrollView>
    </MainLayout>
  );
}
