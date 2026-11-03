import React from "react";
import { View } from "react-native";
import GradientSurface from "./GradientSurface";
import { styles } from "../styles/globalStyles";
export default function ProgressBar({ progress }) {
  return (
    <View style={styles.progressTrack}>
      <GradientSurface
        style={[styles.progressFill, { width: `${progress}%` }]}
      />
    </View>
  );
}
