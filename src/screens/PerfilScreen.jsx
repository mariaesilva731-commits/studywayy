import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable, TextInput, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import StatCard from "../components/StatCard";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import { getActivitySummary } from "../utils/activityStats";

const PROFILE_NAME_KEY = "studyway:profile-name";

function getSavedProfileName() {
  if (typeof localStorage === "undefined") return "Dyo";
  try {
    return localStorage.getItem(PROFILE_NAME_KEY) || "Dyo";
  } catch {
    return "Dyo";
  }
}

export default function PerfilScreen({
  institution,
  onNavigate,
  activityStats,
  profile,
  onProfileUpdate,
}) {
  const { streak, achievements } = getActivitySummary(activityStats);
  const [profileName, setProfileName] = useState(
    () => profile?.full_name || getSavedProfileName(),
  );
  const [nameDraft, setNameDraft] = useState(profileName);
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileError, setProfileError] = useState("");

  useEffect(() => {
    if (!profile?.full_name) return;
    setProfileName(profile.full_name);
    setNameDraft(profile.full_name);
  }, [profile]);

  async function saveProfileName() {
    const nextName = nameDraft.trim();
    if (!nextName) return;
    const result = await onProfileUpdate?.(nextName);
    if (result?.error) {
      setProfileError(result.error.message || "Não foi possível salvar o perfil.");
      return;
    }
    setProfileError("");
    setProfileName(nextName);
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(PROFILE_NAME_KEY, nextName);
      }
    } catch {
      // Keep the name for this session when browser storage is unavailable.
    }
    setEditingProfile(false);
  }

  return (
    <MainLayout tab="profile" onNavigate={onNavigate}>
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <GradientSurface variant="dark" style={styles.profileHero}>
          <View style={styles.profileAvatar}>
            <Ionicons name="person-outline" size={48} color={COLORS.white} />
          </View>
          <Text style={styles.profileName}>{profileName}</Text>
          <Text style={styles.profileSubtitle}>Preparação • {institution}</Text>
        </GradientSurface>
        <View style={styles.profileStats}>
          <StatCard icon="flame-outline" value={String(streak)} label="dias de sequência" cardStyle={styles.profileStatCard} />
          <StatCard icon="trophy-outline" value={String(achievements)} label="conquistas" cardStyle={styles.profileStatCard} />
        </View>
        {[
          ["person-circle-outline", "Editar perfil"],
          ["settings-outline", "Configurações"],
          ["help-circle-outline", "Ajuda"],
        ].map(([icon, title]) => (
          <Pressable
            key={title}
            accessibilityRole="button"
            style={styles.menuRow}
            onPress={() => {
              if (title === "Editar perfil") {
                setNameDraft(profileName);
                setEditingProfile(true);
              } else if (title === "Configurações") {
                onNavigate("settings");
              } else if (title === "Ajuda") {
                onNavigate("help");
              }
            }}
          >
            <Ionicons name={icon} size={23} color={COLORS.blue2} />
            <Text style={styles.menuText}>{title}</Text>
            <Ionicons name="chevron-forward" size={19} color={COLORS.muted} />
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        visible={editingProfile}
        transparent
        animationType="fade"
        onRequestClose={() => setEditingProfile(false)}
      >
        <View style={styles.taskEditorBackdrop}>
          <View style={styles.taskEditorCard}>
            <Text style={styles.taskEditorTitle}>Editar perfil</Text>
            <TextInput
              accessibilityLabel="Nome"
              value={nameDraft}
              onChangeText={setNameDraft}
              placeholder="Seu nome"
              placeholderTextColor={COLORS.muted}
              style={styles.taskEditorInput}
              autoFocus
              returnKeyType="done"
              onSubmitEditing={saveProfileName}
            />
            {!!profileError && (
              <Text style={styles.logoutText}>{profileError}</Text>
            )}
            <View style={styles.taskEditorActions}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setEditingProfile(false)}
              >
                <Text style={styles.taskEditorCancel}>Cancelar</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Salvar nome"
                onPress={saveProfileName}
                disabled={!nameDraft.trim()}
                style={[
                  styles.taskEditorSaveButton,
                  !nameDraft.trim() && { opacity: 0.5 },
                ]}
              >
                <Text style={styles.taskEditorSave}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </MainLayout>
  );
}
