import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { getMaterialDetails } from "../services/materialService";
import { getPdfDisplayName } from "../utils/pdfDisplayNames";
import { getExamDisplayName, getExamDisplaySubtitle } from "../utils/examDisplayNames";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

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
      } else if (!data.viewerUrl) {
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

  const headerTitle = material
    ? getExamDisplayName(material) || getPdfDisplayName(material)
    : "PDF";
  const headerSubtitle = material
    ? getExamDisplaySubtitle(material)
    : undefined;

  return (
    <MainLayout
      header={<Header title={headerTitle} subtitle={headerSubtitle} onBack={onBack} />}
    >
      <View
        style={{
          flex: 1,
          minHeight: 0,
          position: "relative",
          backgroundColor: COLORS.white,
        }}
      >
        {isLoading ? (
          <ActivityIndicator
            accessibilityLabel="Carregando PDF local"
            color={COLORS.blue2}
            style={{ flex: 1 }}
          />
        ) : !material?.viewerUrl ? (
          <ScrollView contentContainerStyle={{ padding: 24 }}>
            <Text style={[styles.emptyActivities, { textAlign: "left" }]}>
              {loadError || "O PDF local não está disponível."}
            </Text>
          </ScrollView>
        ) : Platform.OS === "web" ? (
          <iframe
            title={headerTitle}
            src={material.viewerUrl}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "block",
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        ) : (
          <WebView
            source={{ uri: material.viewerUrl }}
            javaScriptEnabled
            originWhitelist={["*"]}
            style={{ flex: 1, backgroundColor: COLORS.white }}
            onError={(event) => {
              setLoadError(
                event.nativeEvent.description ||
                  "Não foi possível carregar o visualizador do PDF.",
              );
            }}
            onHttpError={(event) => {
              setLoadError(
                `O visualizador do PDF respondeu com erro ${event.nativeEvent.statusCode}.`,
              );
            }}
          />
        )}
      </View>
    </MainLayout>
  );
}
