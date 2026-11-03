import React, { useEffect, useState } from "react";
import { ActivityIndicator, Linking, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { getMaterialDetails, loadMaterialMarkdown } from "../services/materialService";
import { markdownDocumentHtml } from "../utils/markdownToHtml";
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
  const [markdown, setMarkdown] = useState("");
  const [loadError, setLoadError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setMaterial(null);
    setLoadError("");
    setMarkdown("");

    getMaterialDetails(materialId).then(async ({ data }) => {
      if (!active) return;
      if (!data) {
        setLoadError("Material não encontrado.");
        setIsLoading(false);
        return;
      }
      setMaterial(data);
      const result = await loadMaterialMarkdown(data);
      if (!active) return;
      if (result.error) setLoadError(result.error.message || "Não foi possível abrir este material.");
      else setMarkdown(result.data || "");
      setIsLoading(false);
    }).catch((error) => {
      if (!active) return;
      setLoadError(error.message || "Não foi possível abrir este material.");
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [materialId]);

  async function openOriginalPdf() {
    if (!material?.originalPdfUrl) return;
    if (Platform.OS === "web") {
      window.open(material.originalPdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    await Linking.openURL(material.originalPdfUrl);
  }

  const headerTitle = material?.title || "Material";
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
            accessibilityLabel="Carregando material"
            color={COLORS.blue2}
            style={{ flex: 1 }}
          />
        ) : loadError ? (
          <ScrollView contentContainerStyle={{ padding: 24 }}>
            <Text style={[styles.emptyActivities, { textAlign: "left" }]}>
              {loadError}
            </Text>
            {material?.originalPdfUrl ? (
              <Pressable accessibilityRole="link" onPress={openOriginalPdf} style={buttonStyle}>
                <Text style={buttonTextStyle}>Abrir PDF original</Text>
              </Pressable>
            ) : material?.conversionStatus === "review_required" ? (
              <Text style={[styles.cardMuted, { marginTop: 12 }]}>
                O PDF original continua preservado na pasta de materiais do projeto, mas ainda não foi enviado ao armazenamento do aplicativo.
              </Text>
            ) : null}
          </ScrollView>
        ) : (
          <>
            {material?.conversionStatus === "review_required" && (
              <View style={{ backgroundColor: "#FFF6DB", paddingHorizontal: 16, paddingVertical: 10 }}>
                <Text style={{ color: "#795A0B", fontSize: 12 }}>
                  {material.reviewNotes || "A extração precisa de revisão visual. Compare tabelas, fórmulas e imagens com o PDF original."}
                </Text>
              </View>
            )}
            {material?.originalPdfUrl && (
              <Pressable accessibilityRole="link" onPress={openOriginalPdf} style={{ ...buttonStyle, margin: 12, marginBottom: 0 }}>
                <Text style={buttonTextStyle}>Abrir PDF original</Text>
              </Pressable>
            )}
            {Platform.OS === "web" ? (
              React.createElement("iframe", {
                title: headerTitle,
                srcDoc: markdownDocumentHtml(markdown),
                sandbox: "allow-same-origin allow-popups",
                style: { width: "100%", height: "100%", minHeight: 400, border: 0, flex: 1 },
              })
            ) : (
              <WebView
                source={{ html: markdownDocumentHtml(markdown) }}
                style={{ flex: 1, backgroundColor: COLORS.white }}
                originWhitelist={["*"]}
                accessibilityLabel={`Leitor Markdown: ${headerTitle}`}
              />
            )}
          </>
        )}
      </View>
    </MainLayout>
  );
}
