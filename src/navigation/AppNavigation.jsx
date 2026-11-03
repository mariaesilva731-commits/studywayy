import React from "react";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroSocialScreen from "../screens/CadastroSocialScreen";
import RecuperarSenhaScreen from "../screens/RecuperarSenhaScreen";
import TesteInicialScreen from "../screens/TesteInicialScreen";
import InicioScreen from "../screens/InicioScreen";
import CalendarioScreen from "../screens/CalendarioScreen";
import ConteudosScreen from "../screens/ConteudosScreen";
import MateriaScreen from "../screens/MateriaScreen";
import AulaScreen from "../screens/AulaScreen";
import ExerciciosScreen from "../screens/ExerciciosScreen";
import SimuladosScreen from "../screens/SimuladosScreen";
import SimuladoDetalhesScreen from "../screens/SimuladoDetalhesScreen";
import DesempenhoScreen from "../screens/DesempenhoScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ConfiguracoesScreen from "../screens/ConfiguracoesScreen";
import AjudaScreen from "../screens/AjudaScreen";
import PdfViewerScreen from "../screens/PdfViewerScreen";
import {
  resetPasswordForEmail,
  signIn,
  signUp,
} from "../services/authService";

export default function AppNavigation({
  screen,
  routeParams,
  onboardingStep,
  institution,
  navigate,
  goBack,
  setOnboardingStep,
  setInstitution,
  activityStats,
  subjects,
  profile,
  authenticated,
  onProfileUpdate,
  onStudyActivity,
  onTaskCompletion,
  onSignOut,
}) {
  function back() {
    goBack();
  }

  if (screen === "splash")
    return <SplashScreen onStart={() => navigate("onboarding")} />;
  if (screen === "onboarding")
    return (
      <OnboardingScreen
        step={onboardingStep}
        onBack={() =>
          onboardingStep > 0
            ? setOnboardingStep(onboardingStep - 1)
            : navigate("splash", {}, { reset: true })
        }
        onNext={() =>
          onboardingStep === 2
            ? navigate("register")
            : setOnboardingStep(onboardingStep + 1)
        }
        onSkip={() => setOnboardingStep(2)}
        onLogin={() => navigate("login")}
      />
    );
  if (screen === "login")
    return (
      <LoginScreen
        onLogin={async (email, password) => {
          const result = await signIn(email, password);
          if (!result.error && result.data.session) {
            navigate("home", {}, { reset: true });
          }
          return result;
        }}
        onRegister={() => navigate("register")}
        onForgot={() => navigate("forgot")}
        onSocialLogin={(provider) => navigate(`socialRegister-${provider}`)}
      />
    );
  if (screen === "socialRegister-Google")
    return (
      <CadastroSocialScreen
        provider="Google"
        onContinue={() => navigate("test")}
      />
    );
  if (screen === "socialRegister-Apple")
    return (
      <CadastroSocialScreen
        provider="Apple"
        onContinue={() => navigate("test")}
      />
    );
  if (screen === "register")
    return (
      <CadastroScreen
        onCreate={async (fullName, email, password) => {
          const result = await signUp(email, password, fullName);
          if (result.error) return result;
          if (result.data.session) {
            navigate("test");
            return result;
          }
          return {
            ...result,
            message: "Conta criada. Confirme o e-mail e depois faça login.",
          };
        }}
        onLogin={() => navigate("login")}
        onSocialLogin={(provider) => navigate(`socialRegister-${provider}`)}
      />
    );
  if (screen === "forgot")
    return (
      <RecuperarSenhaScreen
        onSend={resetPasswordForEmail}
        onBack={() => goBack("login")}
      />
    );
  if (screen === "test")
    return (
      <TesteInicialScreen
        onFinish={() => navigate("home", {}, { reset: true })}
      />
    );
  if (screen === "home")
    return (
      <InicioScreen
        onNavigate={navigate}
        onTaskCompletion={onTaskCompletion}
        activityStats={activityStats}
        subjects={subjects}
        authenticated={authenticated}
      />
    );
  if (screen === "calendar")
    return <CalendarioScreen onNavigate={navigate} onBack={back} />;
  if (screen === "materials")
    return (
      <ConteudosScreen
        onNavigate={navigate}
        onBack={back}
        subjects={subjects}
      />
    );
  if (screen === "pdfViewer")
    return (
      <PdfViewerScreen
        materialId={routeParams?.materialId}
        onBack={back}
      />
    );
  if (screen === "subject")
    return (
      <MateriaScreen
        onNavigate={navigate}
        onBack={back}
        subjects={subjects}
        subjectName={routeParams?.subjectName}
      />
    );
  if (screen === "lesson")
    return <AulaScreen onNavigate={navigate} onBack={back} />;
  if (screen === "exercise")
    return (
      <ExerciciosScreen
        onNavigate={navigate}
        onBack={back}
        onStudyActivity={onStudyActivity}
        simulationId={routeParams?.simulationId}
      />
    );
  if (screen === "simulados")
    return <SimuladosScreen onNavigate={navigate} onBack={back} />;
  if (screen === "simuladoDetail")
    return (
      <SimuladoDetalhesScreen
        onNavigate={navigate}
        onBack={back}
        simulationId={routeParams?.simulationId}
      />
    );
  if (screen === "performance")
    return (
      <DesempenhoScreen
        onNavigate={navigate}
        onBack={back}
        subjects={subjects}
        activityStats={activityStats}
      />
    );
  if (screen === "profile")
    return (
      <PerfilScreen
        institution={institution}
        onNavigate={navigate}
        activityStats={activityStats}
        profile={profile}
        onProfileUpdate={onProfileUpdate}
      />
    );
  if (screen === "settings")
    return (
      <ConfiguracoesScreen
        onNavigate={navigate}
        onBack={back}
        onSignOut={onSignOut}
        authenticated={authenticated}
      />
    );
  if (screen === "help") return <AjudaScreen onBack={back} />;

  return (
    <InicioScreen
      onNavigate={navigate}
      onTaskCompletion={onTaskCompletion}
      activityStats={activityStats}
      subjects={subjects}
      authenticated={authenticated}
    />
  );
}
