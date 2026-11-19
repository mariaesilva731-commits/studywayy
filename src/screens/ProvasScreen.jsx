import React, { useMemo, useState } from "react";
import { ScrollView, Text, TextInput, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { pdfMaterials } from "../data/pdfCatalog.generated";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import {
  getExamDisplayName,
  getExamDisplaySubject,
  getExamDisplaySubtitle,
} from "../utils/examDisplayNames";

const institutions = [
  { id: "ENEM", label: "ENEM" },
  { id: "USP", label: "USP • FUVEST" },
  { id: "UNESP", label: "UNESP" },
];

function isExamMaterial(material) {
  const sourcePath = material.sourcePath.toLocaleLowerCase("pt-BR");
  return sourcePath.includes("/provas/") || sourcePath.includes("/fuvest/");
}

export default function ProvasScreen({ onNavigate, onBack }) {
  const [institution, setInstitution] = useState("ENEM");
  const [selectedSubject, setSelectedSubject] = useState("Todas");
  const [search, setSearch] = useState("");

  const institutionMaterials = useMemo(
    () =>
      pdfMaterials
        .filter(
          (material) =>
            material.institution === institution && isExamMaterial(material),
        )
        .sort((first, second) =>
          getExamDisplayName(first).localeCompare(
            getExamDisplayName(second),
            "pt-BR",
          ),
        ),
    [institution],
  );
  const availableSubjects = [
    "Todas",
    ...new Set(
      institutionMaterials
        .map(getExamDisplaySubject)
        .sort((first, second) => first.localeCompare(second, "pt-BR")),
    ),
  ];
  const visibleMaterials = institutionMaterials.filter((material) => {
    const matchesSubject =
      selectedSubject === "Todas" ||
      getExamDisplaySubject(material) === selectedSubject;
    const matchesSearch =
      `${getExamDisplayName(material)} ${getExamDisplaySubtitle(material)}`
        .toLocaleLowerCase("pt-BR")
        .includes(search.trim().toLocaleLowerCase("pt-BR"));
    return matchesSubject && matchesSearch;
  });

  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header
          title="Provas anteriores"
          subtitle="Provas e gabaritos por instituição e matéria."
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.muted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar prova, ano ou matéria..."
            placeholderTextColor={COLORS.muted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.institutionTabs}
        >
          {institutions.map((item) => (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityState={{ selected: institution === item.id }}
              onPress={() => {
                setInstitution(item.id);
                setSelectedSubject("Todas");
              }}
              style={[
                styles.institutionTab,
                institution === item.id && styles.institutionTabActive,
              ]}
            >
              <Text
                style={[
                  styles.institutionText,
                  institution === item.id && styles.institutionTextActive,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.institutionTabs}
        >
          {availableSubjects.map((subject) => (
            <Pressable
              key={subject}
              accessibilityRole="button"
              accessibilityState={{ selected: selectedSubject === subject }}
              onPress={() => setSelectedSubject(subject)}
              style={[
                styles.institutionTab,
                selectedSubject === subject && styles.institutionTabActive,
              ]}
            >
              <Text
                style={[
                  styles.institutionText,
                  selectedSubject === subject && styles.institutionTextActive,
                ]}
              >
                {subject}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={styles.sectionTitle}>
          Provas e gabaritos ({visibleMaterials.length})
        </Text>
        {visibleMaterials.map((material) => (
          <Pressable
            key={material.id}
            accessibilityRole="button"
            accessibilityLabel={`Abrir prova: ${getExamDisplayName(material)}`}
            onPress={() =>
              onNavigate("pdfViewer", { materialId: material.id })
            }
            style={styles.subjectCard}
          >
            <View style={styles.subjectIcon}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={COLORS.blue2}
              />
            </View>
            <View style={styles.flexFill}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.cardTitle}
              >
                {getExamDisplayName(material)}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.cardMuted}
              >
                {getExamDisplaySubtitle(material)}
              </Text>
            </View>
            <Ionicons name="open-outline" size={20} color={COLORS.muted} />
          </Pressable>
        ))}
        {visibleMaterials.length === 0 && (
          <Text style={styles.emptyActivities}>
            Nenhuma prova encontrada para esses filtros.
          </Text>
        )}
      </ScrollView>
    </MainLayout>
  );
}
