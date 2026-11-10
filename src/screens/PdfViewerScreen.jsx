import React, { useEffect, useState } from "react";
import { ActivityIndicator, Linking, Platform, Pressable, ScrollView, Text, View } from "react-native";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { getMaterialDetails } from "../services/materialService";
import { getPdfDisplayName } from "../utils/pdfDisplayNames";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

const buttonStyle = {
  alignSelf: "flex-start",
  backgroundColor: COLORS.blue2,
  borderRadius: 7,
  marginTop: 16,
  paddingHorizontal: 15,
  paddingVertical: 11,
};

const buttonTextStyle = { color: COLORS.white, fontWeight: "700" };

export default function PdfViewerScreen({ materialId, onBack }) {
  const [material, setMaterial] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setMaterial(null);
    setLoadError("");

    getMaterialDetails(materialId).then(({ data }) => {
      if (!active) return;
      setMaterial(data);
      if (!data) {
        setLoadError("Material não encontrado no catálogo local.");
      } else if (!data.originalPdfUrl) {
        setLoadError("Não foi possível localizar o servidor de PDFs locais. Inicie o app com npm run web ou npm start.");
      }
      setIsLoading(false);
    }).catch((error) => {
      if (!active) return;
      setLoadError(error.message || "Não foi possível abrir este PDF local.");
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [materialId]);

  async function openOriginalPdf() {
    if (!material?.originalPdfUrl) return;
    await Linking.openURL(material.originalPdfUrl);
  }

  const headerTitle = material ? getPdfDisplayName(material) : "PDF";
  const headerSubtitle = material
    ? `${material.institution} • ${material.subject}`
    : undefined;

  return (
    <MainLayout
      header={<Header title={headerTitle} subtitle={headerSubtitle} onBack={onBack} />}
    >
      <View style={{ flex: 1, minHeight: 0, backgroundColor: COLORS.white }}>
        {isLoading ? (
          <ActivityIndicator
            accessibilityLabel="Carregando PDF local"
            color={COLORS.blue2}
            style={{ flex: 1 }}
          />
        ) : !material?.originalPdfUrl ? (
          <ScrollView contentContainerStyle={{ padding: 24 }}>
            <Text style={[styles.emptyActivities, { textAlign: "left" }]}>
              {loadError || "O PDF local não está disponível."}
            </Text>
          </ScrollView>
        ) : Platform.OS === "web" ? (
          <iframe
            title={headerTitle}
            src={material.originalPdfUrl}
            style={{ width: "100%", height: "100%", minHeight: 400, border: 0, flex: 1 }}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
            <Text style={[styles.emptyActivities, { textAlign: "center" }]}>
              Abra o PDF local para visualizar o documento completo.
            </Text>
            <Pressable accessibilityRole="link" onPress={openOriginalPdf} style={buttonStyle}>
              <Text style={buttonTextStyle}>Abrir PDF</Text>
            </Pressable>
          </View>
        )}
      </View>
    </MainLayout>
  );
}
