import React from "react";
import { View, Text, Image } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import Button from "../components/Button";
import { styles } from "../styles/globalStyles";
import GradientSurface from "../components/GradientSurface";
export default function SplashScreen({ onStart }) {
  return (
    <ScreenLayout>
      <View style={styles.splash}>
        <GradientSurface variant="welcome" style={styles.splashGradientSurface} />
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.splashImage}
          resizeMode="contain"
        />
        <Text style={styles.splashTag}>Seu caminho ate a aprovacao.</Text>
        <Button title="Comecar" onPress={onStart} gradientVariant="intro" />
      </View>
    </ScreenLayout>
  );
}
