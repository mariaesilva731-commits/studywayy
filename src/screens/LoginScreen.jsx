import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function LoginScreen({
  onLogin,
  onRegister,
  onForgot,
  onSocialLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitLogin() {
    setErrorMessage("");
    setIsSubmitting(true);
    const result = await onLogin(email.trim(), password);
    setIsSubmitting(false);
    if (result?.error) {
      setErrorMessage(result.error.message || "Não foi possível entrar.");
    }
  }

  return (
    <AuthLayout
      title="Bem-vindo de volta!"
      subtitle="Continue sua jornada de estudos"
      footer={
        <View style={styles.authFooter}>
          <Text style={styles.authMuted}>Ainda não possui uma conta? </Text>
          <Pressable onPress={onRegister}>
            <Text style={styles.linkLight}>Criar conta</Text>
          </Pressable>
        </View>
      }
    >
      <View style={styles.authTabs}>
        <View style={[styles.authTab, styles.authTabSelected]}>
          <Text style={styles.authTabSelectedText}>Entrar</Text>
        </View>
        <Pressable style={styles.authTab} onPress={onRegister}>
          <Text style={styles.authTabText}>Cadastrar</Text>
        </Pressable>
      </View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={onForgot} style={styles.forgot}>
        <Text style={styles.linkLight}>Esqueci minha senha</Text>
      </Pressable>
      {!!errorMessage && <Text style={styles.logoutText}>{errorMessage}</Text>}
      <Button
        title={isSubmitting ? "Entrando..." : "Entrar"}
        onPress={submitLogin}
        disabled={isSubmitting || !email.trim() || !password}
        style={styles.authSubmit}
      />
      <View style={styles.orRow}>
        <View style={styles.orLine} />
        <Text style={styles.authMuted}>ou</Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.socialOptions}>
        <Button
          title="Google"
          secondary
          style={styles.socialButton}
          onPress={() => onSocialLogin("Google")}
          icon="logo-google"
        />
        <Button
          title="Apple"
          secondary
          style={styles.socialButton}
          onPress={() => onSocialLogin("Apple")}
          icon="logo-apple"
        />
      </View>
    </AuthLayout>
  );
}
