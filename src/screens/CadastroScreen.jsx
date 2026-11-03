import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function CadastroScreen({ onCreate, onLogin, onSocialLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitRegistration() {
    setErrorMessage("");
    setSuccessMessage("");
    if (password !== passwordConfirmation) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    setIsSubmitting(true);
    const result = await onCreate(fullName.trim(), email.trim(), password);
    setIsSubmitting(false);
    if (result?.error) {
      setErrorMessage(result.error.message || "Não foi possível criar a conta.");
    } else if (result?.message) {
      setSuccessMessage(result.message);
    }
  }

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Comece sua jornada rumo à aprovação"
      footer={
        <View style={styles.authFooter}>
          <Text style={styles.authMuted}>Já possui uma conta? </Text>
          <Pressable onPress={onLogin}>
            <Text style={styles.linkLight}>Entrar</Text>
          </Pressable>
        </View>
      }
    >
      <View style={styles.authTabs}>
        <Pressable style={styles.authTab} onPress={onLogin}>
          <Text style={styles.authTabText}>Entrar</Text>
        </Pressable>
        <View style={[styles.authTab, styles.authTabSelected]}>
          <Text style={styles.authTabSelectedText}>Cadastrar</Text>
        </View>
      </View>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Nome completo"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirme sua senha"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        secureTextEntry
      />
      <Button
        title={isSubmitting ? "Criando conta..." : "Criar conta grátis"}
        onPress={submitRegistration}
        disabled={
          isSubmitting ||
          !fullName.trim() ||
          !email.trim() ||
          !password ||
          !passwordConfirmation
        }
        style={styles.authSubmit}
      />
      {!!errorMessage && <Text style={styles.logoutText}>{errorMessage}</Text>}
      {!!successMessage && <Text style={styles.cardMuted}>{successMessage}</Text>}
      <View style={styles.orRow}>
        <View style={styles.orLine} />
        <Text style={styles.authMuted}>ou continue com</Text>
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
