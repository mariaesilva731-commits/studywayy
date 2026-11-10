import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { FONTS } from "../styles/fonts";
import { styles } from "../styles/globalStyles";
import { pdfMaterials } from "../data/pdfCatalog.generated";
import { getMaterials } from "../services/materialService";
import { getPdfDisplayName, getPdfDisplaySubtitle } from "../utils/pdfDisplayNames";

const contentTitleStyles = StyleSheet.create({
  title: { fontFamily: FONTS.bold, fontSize: 14, fontWeight: "700" },
  section: { fontFamily: FONTS.bold, fontWeight: "700" },
  text: { fontFamily: FONTS.regular },
});

export default function ConteudosScreen({ onNavigate, onBack, subjects }) {
  const [search, setSearch] = useState("");
  const [institution, setInstitution] = useState("ENEM");
  const [selectedSubject, setSelectedSubject] = useState("Todas");
  const [materials, setMaterials] = useState(() =>
    pdfMaterials.filter((material) => material.institution === "ENEM"),
  );
  const [isLoadingMaterials, setIsLoadingMaterials] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoadingMaterials(true);
    getMaterials(institution).then(({ data }) => {
      if (active) setMaterials(data || []);
    }).finally(() => {
      if (active) setIsLoadingMaterials(false);
    });
    return () => {
      active = false;
    };
  }, [institution]);

  const availableSubjects = [
    "Todas",
    ...new Set(
      materials
        .map((material) => material.subject)
        .sort((first, second) => first.localeCompare(second, "pt-BR")),
    ),
  ];
  const visibleMaterials = materials.filter((material) =>
    (selectedSubject === "Todas" || material.subject === selectedSubject) &&
    `${getPdfDisplayName(material)} ${material.subject}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  return (
    <MainLayout
      tab="materials"
      onNavigate={onNavigate}
      header={
        <Header
          title="Conteúdos"
          subtitle="Tudo para sua preparação."
          onBack={onBack}
          titleStyle={contentTitleStyles.title}
          textStyle={contentTitleStyles.text}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.muted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar matéria, aula ou tema..."
            placeholderTextColor={COLORS.muted}
            style={[styles.searchInput, contentTitleStyles.text]}
          />
        </View>
        <View style={styles.institutionTabs}>
          {["ENEM", "UNESP", "USP"].map((item) => (
            <Pressable
              key={item}
              onPress={() => {
                setInstitution(item);
                setMaterials([]);
                setSelectedSubject("Todas");
              }}
              style={[
                styles.institutionTab,
                institution === item && styles.institutionTabActive,
              ]}
            >
              <Text
                style={[
                  styles.institutionText,
                  institution === item && styles.institutionTextActive,
                  contentTitleStyles.text,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
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
                  contentTitleStyles.text,
                ]}
              >
                {subject}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={[styles.sectionTitle, contentTitleStyles.section, contentTitleStyles.text]}>
          Materiais ({visibleMaterials.length})
        </Text>
        {isLoadingMaterials && (
          <Text style={[styles.cardMuted, contentTitleStyles.text]}>Carregando materiais...</Text>
        )}
        {visibleMaterials.map((material) => (
          <Pressable
            key={`${material.institution}/${material.subject}/${material.filename}`}
            accessibilityRole="button"
            accessibilityLabel={`Abrir material: ${getPdfDisplayName(material)}`}
            onPress={() =>
              onNavigate("pdfViewer", { materialId: material.id })
            }
            style={styles.subjectCard}
          >
            <View style={styles.subjectIcon}>
              <Ionicons name="document-text-outline" size={24} color={COLORS.blue2} />
            </View>
            <View style={styles.flexFill}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.cardTitle, contentTitleStyles.title]}>
                {getPdfDisplayName(material)}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.cardMuted, contentTitleStyles.text]}>
                {getPdfDisplaySubtitle(material)}
              </Text>
            </View>
            <Ionicons name="open-outline" size={20} color={COLORS.muted} />
          </Pressable>
        ))}
        {!isLoadingMaterials && visibleMaterials.length === 0 && (
          <Text style={[styles.emptyActivities, contentTitleStyles.text]}>Nenhum material encontrado.</Text>
        )}
        <Text style={[styles.sectionTitle, contentTitleStyles.section, contentTitleStyles.text]}>Simulados</Text>
        <Pressable
          onPress={() => onNavigate("simulados")}
          style={styles.simuladoCard}
        >
          <GradientSurface style={styles.gradientFill} />
          <Ionicons
            name="document-text-outline"
            size={28}
            color={COLORS.white}
          />
          <View style={styles.flexFill}>
            <Text style={[styles.whiteCardTitle, contentTitleStyles.title]}>Simulados personalizados</Text>
            <Text style={[styles.whiteCardText, contentTitleStyles.text]}>
              Treine de acordo com sua prova.
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={21} color={COLORS.white} />
        </Pressable>
      </ScrollView>
    </MainLayout>
  );
}
