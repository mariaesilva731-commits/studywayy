import React, { useMemo, useState } from "react";
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import { getProMaterials } from "../services/materialService";
import { COLORS } from "../styles/colors";
import {
  getPdfDisplayName,
  getPdfDisplaySubtitle,
} from "../utils/pdfDisplayNames";
import { PRO_SUBSCRIPTION_PLANS } from "../services/proAccessService";

const PRO_BLUE = "#2563EB";
const PRO_PURPLE = "#7C3AED";

const subjects = [
  "Matemática",
  "Português",
  "História",
  "Geografia",
  "Biologia",
  "Química",
];

const lessons = [
  {
    title: "Função afim: conceito e exemplos",
    subject: "Matemática",
    channel: "Khan Academy Brasil",
    videoId: "4OVttqaXJ1w",
  },
];

const reviewTopics = {
  Matemática: ["Função afim: f(x) = ax + b", "Razão, proporção e porcentagem", "Geometria plana e áreas"],
  Português: ["Interpretação de texto", "Gêneros textuais", "Figuras de linguagem"],
  História: ["Brasil Colônia", "Abolição da escravidão", "República brasileira"],
  Geografia: ["Cartografia e escalas", "Clima e vegetação", "Urbanização brasileira"],
  Biologia: ["Ecologia e cadeias alimentares", "Citologia", "Genética básica"],
  Química: ["Ligações químicas", "Soluções e concentração", "Ácidos, bases e pH"],
};

const reviewQuestions = {
  Matemática: {
    prompt: "Se f(x) = 2x + 3, quanto vale f(4)?",
    options: ["7", "9", "11", "12"],
    answer: "11",
    explanation: "Substituindo x por 4: f(4) = 2 × 4 + 3 = 11.",
  },
  Português: {
    prompt: "Ao interpretar um texto, qual é o primeiro objetivo?",
    options: ["Localizar o tema e a ideia central", "Contar os parágrafos", "Ignorar o título", "Procurar apenas palavras difíceis"],
    answer: "Localizar o tema e a ideia central",
    explanation: "A leitura começa pela compreensão do tema e da ideia defendida no texto.",
  },
  História: {
    prompt: "Em que ano foi assinada a Lei Áurea no Brasil?",
    options: ["1822", "1888", "1889", "1930"],
    answer: "1888",
    explanation: "A Lei Áurea foi assinada em 13 de maio de 1888.",
  },
  Geografia: {
    prompt: "O que as linhas de latitude medem?",
    options: ["A distância ao Equador", "A distância a Greenwich", "A altitude", "A profundidade dos oceanos"],
    answer: "A distância ao Equador",
    explanation: "A latitude indica a posição ao norte ou ao sul da linha do Equador.",
  },
  Biologia: {
    prompt: "Qual organela está diretamente ligada à produção de ATP na respiração celular?",
    options: ["Ribossomo", "Mitocôndria", "Lisossomo", "Complexo golgiense"],
    answer: "Mitocôndria",
    explanation: "A maior parte do ATP da respiração celular é produzida nas mitocôndrias.",
  },
  Química: {
    prompt: "Uma solução com pH menor que 7 é classificada como:",
    options: ["Ácida", "Neutra", "Básica", "Saturada"],
    answer: "Ácida",
    explanation: "Em condições usuais, valores de pH abaixo de 7 indicam acidez.",
  },
};

const examQuestions = subjects.map((subject) => ({
  subject,
  ...reviewQuestions[subject],
}));

const weeklyPlan = [
  ["Segunda-feira", "Matemática", "Funções e exercícios", "45 min"],
  ["Terça-feira", "Português", "Interpretação e revisão", "40 min"],
  ["Quarta-feira", "Biologia", "Ecologia e questões", "45 min"],
  ["Quinta-feira", "História e Geografia", "Brasil e cartografia", "50 min"],
  ["Sexta-feira", "Química", "Ligações e exercícios", "40 min"],
  ["Sábado", "Revisão geral", "Retomar erros da semana", "60 min"],
];

const youtubeSearchUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

function ProCard({ icon, title, description, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={proStyles.card}
    >
      <View style={proStyles.cardIcon}>
        <Ionicons name={icon} size={22} color={COLORS.purple2} />
      </View>
      <View style={proStyles.cardCopy}>
        <Text style={proStyles.cardTitle}>{title}</Text>
        <Text style={proStyles.cardDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
    </Pressable>
  );
}

const proBenefits = [
  { icon: "play-circle-outline", label: "Videoaulas exclusivas e completas" },
  { icon: "calendar-outline", label: "Planos prontos e personalizados" },
  { icon: "folder-open-outline", label: "Adicione e organize seus materiais" },
  {
    icon: "library-outline",
    label: "Biblioteca ampliada com materiais licenciados",
  },
  { icon: "document-text-outline", label: "Simulados para testar seus conhecimentos" },
  {
    icon: "refresh-circle-outline",
    label: "Mais revisões e preparação para vestibulares",
  },
  {
    icon: "sparkles-outline",
    label: "Uma experiência de estudos mais completa e personalizada",
  },
];

function SubscriptionPlanCard({
  plan,
  annual = false,
  busy,
  disabled,
  onPress,
}) {
  return (
    <View
      style={[
        proStyles.subscriptionPlan,
        annual && proStyles.subscriptionPlanFeatured,
      ]}
    >
      {annual ? (
        <LinearGradient
          colors={[PRO_BLUE, PRO_PURPLE]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={proStyles.bestOptionBadge}
        >
          <Text style={proStyles.bestOptionText}>MELHOR OPÇÃO</Text>
        </LinearGradient>
      ) : null}
      <Text style={proStyles.planName}>{plan.name.toUpperCase()}</Text>
      <View style={proStyles.priceRow}>
        <Text style={proStyles.planPrice}>{plan.monthlyPrice}</Text>
        <Text style={proStyles.planPriceUnit}>
          {annual ? "/ mês (equivalente)" : "/ mês"}
        </Text>
      </View>
      {annual ? (
        <Text style={proStyles.annualTotal}>{plan.billingPrice}</Text>
      ) : null}
      <View style={proStyles.planDetails}>
        <View style={proStyles.planDetailRow}>
          <Ionicons name="checkmark-circle" size={18} color={PRO_BLUE} />
          <Text style={proStyles.planDetailText}>
            Acesso completo aos recursos PRO.
          </Text>
        </View>
        <View style={proStyles.planDetailRow}>
          <Ionicons name="checkmark-circle" size={18} color={PRO_BLUE} />
          <Text style={proStyles.planDetailText}>{plan.billingDescription}</Text>
        </View>
      </View>
      <Button
        title={
          busy
            ? "Iniciando..."
            : annual
              ? "Assinar anualmente"
              : "Assinar mensalmente"
        }
        onPress={onPress}
        disabled={disabled}
        gradientVariant="pro"
        style={proStyles.planButton}
      />
    </View>
  );
}

function SubscriptionScreen({
  isProLoading,
  checkoutPlan,
  onSubscribe,
}) {
  return (
    <View style={proStyles.subscriptionContent}>
      <LinearGradient
        colors={[PRO_BLUE, PRO_PURPLE, "#302D95"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={proStyles.subscriptionHero}
      >
        <View style={proStyles.heroGlow} />
        <View style={proStyles.proLabel}>
          <Ionicons name="sparkles" size={15} color={COLORS.white} />
          <Text style={proStyles.proLabelText}>ASSINATURA</Text>
        </View>
        <Text style={proStyles.heroBrand}>STUDYWAY PRO</Text>
        <Text style={proStyles.heroTitle}>Estude além. Conquiste mais.</Text>
        <Text style={proStyles.heroSubtitle}>
          Desbloqueie ferramentas exclusivas e tenha uma experiência de estudos
          ainda mais completa.
        </Text>
      </LinearGradient>

      <View style={proStyles.benefitsCard}>
        <Text style={proStyles.subscriptionSectionTitle}>
          Tudo para evoluir nos estudos
        </Text>
        {proBenefits.map((benefit) => (
          <View key={benefit.label} style={proStyles.benefitRow}>
            <View style={proStyles.benefitIcon}>
              <Ionicons name={benefit.icon} size={19} color={PRO_BLUE} />
            </View>
            <Text style={proStyles.benefitLabel}>{benefit.label}</Text>
          </View>
        ))}
      </View>

      <View style={proStyles.plansHeading}>
        <Text style={proStyles.subscriptionSectionTitle}>
          Escolha seu plano
        </Text>
        <Text style={proStyles.plansCaption}>
          Acesso completo a todos os recursos exclusivos do StudyWay PRO.
        </Text>
      </View>
      <View style={proStyles.plansRow}>
        <SubscriptionPlanCard
          plan={PRO_SUBSCRIPTION_PLANS.monthly}
          busy={checkoutPlan === "monthly"}
          disabled={isProLoading || checkoutPlan !== null}
          onPress={() => onSubscribe("monthly")}
        />
        <SubscriptionPlanCard
          plan={PRO_SUBSCRIPTION_PLANS.annual}
          annual
          busy={checkoutPlan === "annual"}
          disabled={isProLoading || checkoutPlan !== null}
          onPress={() => onSubscribe("annual")}
        />
      </View>

      <View style={proStyles.comparisonCard}>
        <Text style={proStyles.subscriptionSectionTitle}>
          Gratuito ou PRO?
        </Text>
        <View style={proStyles.comparisonHeader}>
          <Text style={[proStyles.comparisonHeaderText, proStyles.comparisonFeature]}>
            RECURSO
          </Text>
          <Text style={proStyles.comparisonHeaderText}>GRATUITO</Text>
          <Text style={[proStyles.comparisonHeaderText, proStyles.proColumn]}>
            PRO
          </Text>
        </View>
        {[
          ["Conteúdos essenciais", true, true],
          ["Videoaulas exclusivas", false, true],
          ["Planos de estudos personalizados", false, true],
          ["Materiais próprios organizados", false, true],
          ["Simulados e revisões ampliados", false, true],
        ].map(([label, free, pro]) => (
          <View key={label} style={proStyles.comparisonRow}>
            <Text style={[proStyles.comparisonLabel, proStyles.comparisonFeature]}>
              {label}
            </Text>
            <View style={proStyles.comparisonValue}>
              <Ionicons
                name={free ? "checkmark-circle" : "remove-circle-outline"}
                size={18}
                color={free ? "#64748B" : "#CBD5E1"}
              />
            </View>
            <View style={[proStyles.comparisonValue, proStyles.proColumn]}>
              <Ionicons
                name={pro ? "checkmark-circle" : "remove-circle-outline"}
                size={18}
                color={PRO_PURPLE}
              />
            </View>
          </View>
        ))}
      </View>

      <Text style={proStyles.renewalNote}>
        Protótipo: ao escolher um plano, você entra na área StudyWay PRO para
        demonstração. Nenhum pagamento ou assinatura real é feito.
      </Text>
      {isProLoading ? (
        <Text style={proStyles.plansCaption}>Consultando sua assinatura...</Text>
      ) : null}
    </View>
  );
}

function ProScreen({
  isPro,
  isProDemo,
  isProLoading,
  subscription,
  proDemoPlan,
  onSubscribe,
  onNavigate,
  onBack,
  onStudyActivity,
}) {
  const [section, setSection] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [reviewedTopics, setReviewedTopics] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [reviewResult, setReviewResult] = useState("");
  const [examIndex, setExamIndex] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [examAnswer, setExamAnswer] = useState(null);
  const [examResult, setExamResult] = useState(null);
  const [checkoutPlan, setCheckoutPlan] = useState(null);

  const extraMaterials = useMemo(
    () =>
      getProMaterials()
        .filter(
          (material) =>
            !material.sourcePath
              .toLocaleLowerCase("pt-BR")
              .includes("/provas/") &&
            !material.sourcePath
              .toLocaleLowerCase("pt-BR")
              .includes("/fuvest/"),
        )
        .slice(0, 20),
    [],
  );

  async function beginCheckout(planId) {
    setCheckoutPlan(planId);
    try {
      const result = await onSubscribe(planId);
      if (result.error) return;
    } finally {
      setCheckoutPlan(null);
    }
  }

  function goBack() {
    if (section !== "home") {
      setSection("home");
      setSelectedSubject(null);
      setSelectedAnswer(null);
      setReviewedTopics({});
      setReviewResult("");
      setExamIndex(0);
      setExamScore(0);
      setExamAnswer(null);
      setExamResult(null);
      return;
    }
    onBack();
  }

  function answerReview() {
    if (!selectedSubject || selectedAnswer === null) return;
    const question = reviewQuestions[selectedSubject];
    setReviewResult(
      selectedAnswer === question.answer
        ? `Resposta correta! ${question.explanation}`
        : `Ainda não. A resposta é "${question.answer}". ${question.explanation}`,
    );
    if (selectedAnswer === question.answer) {
      onStudyActivity(`pro-exercise-${selectedSubject}`);
    }
  }

  function answerExam() {
    if (examAnswer === null) return;
    const isCorrect = examAnswer === examQuestions[examIndex].answer;
    const nextScore = examScore + (isCorrect ? 1 : 0);

    if (examIndex === examQuestions.length - 1) {
      setExamScore(nextScore);
      setExamResult(nextScore);
      onStudyActivity("studyway-pro-exam");
      return;
    }

    setExamScore(nextScore);
    setExamIndex((current) => current + 1);
    setExamAnswer(null);
  }

  const title =
    section === "home"
      ? "StudyWay PRO"
      : {
          videos: "Videoaulas",
          materials: "Materiais extras",
          exam: "Prova StudyWay",
          plan: "Plano de estudos",
          exercises: "Exercícios",
          reviews: "Revisões por matéria",
        }[section];

  return (
    <MainLayout
      tab="pro"
      onNavigate={onNavigate}
      header={
        <Header
          title={title}
          subtitle={
            section === "home"
              ? "Um espaço completo para sua preparação."
              : undefined
          }
          onBack={goBack}
        />
      }
    >
      <ScrollView contentContainerStyle={proStyles.content}>
        {!isPro ? (
          <SubscriptionScreen
            isProLoading={isProLoading}
            checkoutPlan={checkoutPlan}
            onSubscribe={beginCheckout}
          />
        ) : section === "home" ? (
          <>
            {isProDemo ? (
              <View style={[proStyles.statusCard, proStyles.demoStatusCard]}>
                <View style={proStyles.statusIcon}>
                  <Ionicons
                    name="flask-outline"
                    size={22}
                    color={PRO_PURPLE}
                  />
                </View>
                <View style={proStyles.cardCopy}>
                  <Text style={proStyles.demoStatusTitle}>
                    Acesso de demonstração ativo
                  </Text>
                  <Text style={proStyles.demoStatusDescription}>
                    Plano {proDemoPlan === "annual" ? "anual" : "mensal"}{" "}
                    selecionado. Nenhuma cobrança foi feita.
                  </Text>
                </View>
              </View>
            ) : (
              <View style={proStyles.statusCard}>
                <View style={proStyles.statusIcon}>
                  <Ionicons name="checkmark-circle" size={23} color="#059669" />
                </View>
                <View style={proStyles.cardCopy}>
                  <Text style={proStyles.statusTitle}>
                    Assinatura StudyWay PRO ativa
                  </Text>
                  <Text style={proStyles.statusDescription}>
                    {subscription?.cancel_at_period_end
                      ? "Cancelamento agendado. "
                      : subscription?.plan_id === "monthly"
                        ? "Plano mensal com renovação. "
                        : "Plano anual. "}
                    Acesso até{" "}
                    {subscription?.current_period_end
                      ? new Date(
                          subscription.current_period_end,
                        ).toLocaleDateString("pt-BR")
                      : "o fim do período contratado"}
                    .
                  </Text>
                </View>
              </View>
            )}
            <View style={proStyles.welcome}>
              <Text style={proStyles.welcomeEyebrow}>ÁREA EXCLUSIVA</Text>
              <Text style={proStyles.welcomeTitle}>Vamos avançar nos estudos?</Text>
              <Text style={proStyles.welcomeCopy}>
                Escolha uma atividade para continuar sua preparação.
              </Text>
            </View>
            <ProCard
              icon="play-circle-outline"
              title="Videoaulas"
              description="Aulas reais e materiais em vídeo."
              onPress={() => setSection("videos")}
            />
            <ProCard
              icon="library-outline"
              title="Materiais extras"
              description="Acesse conteúdos selecionados para o ENEM."
              onPress={() => setSection("materials")}
            />
            <ProCard
              icon="document-text-outline"
              title="Prova própria"
              description="Responda questões e veja seu resultado."
              onPress={() => setSection("exam")}
            />
            <ProCard
              icon="reader-outline"
              title="Provas anteriores"
              description="Consulte provas e gabaritos do ENEM, FUVEST e UNESP."
              onPress={() => onNavigate("provas")}
            />
            <ProCard
              icon="calendar-outline"
              title="Plano de estudos"
              description="Uma sugestão organizada para a semana."
              onPress={() => setSection("plan")}
            />
            <ProCard
              icon="checkmark-done-outline"
              title="Exercícios por matéria"
              description="Pratique os principais conteúdos."
              onPress={() => {
                setSelectedSubject(null);
                setSelectedAnswer(null);
                setReviewResult("");
                setSection("exercises");
              }}
            />
            <ProCard
              icon="refresh-circle-outline"
              title="Revisões"
              description="Retome os tópicos essenciais de cada matéria."
              onPress={() => {
                setSelectedSubject(null);
                setSection("reviews");
              }}
            />
          </>
        ) : section === "videos" ? (
          <>
            <Text style={proStyles.sectionIntro}>
              Comece com uma aula de função afim da Khan Academy Brasil. Para
              outras matérias, abra uma busca de videoaulas no YouTube.
            </Text>
            {lessons.map((lesson) => (
              <View key={lesson.videoId} style={proStyles.lessonCard}>
                <Text style={proStyles.lessonSubject}>{lesson.subject}</Text>
                <Text style={proStyles.lessonTitle}>{lesson.title}</Text>
                <View style={proStyles.videoFrame}>
                  {Platform.OS === "web" ? (
                    <iframe
                      title={lesson.title}
                      src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                    />
                  ) : (
                    <WebView
                      source={{
                        uri: `https://www.youtube-nocookie.com/embed/${lesson.videoId}`,
                      }}
                      allowsFullscreenVideo
                      style={proStyles.nativeVideo}
                    />
                  )}
                </View>
                <Text style={proStyles.videoCredit}>
                  Vídeo de {lesson.channel}.
                </Text>
              </View>
            ))}
            <Text style={proStyles.sectionTitle}>Mais videoaulas</Text>
            {subjects.map((subject) => (
              <ProCard
                key={subject}
                icon="logo-youtube"
                title={subject}
                description={`Buscar videoaulas de ${subject}.`}
                onPress={() =>
                  Linking.openURL(youtubeSearchUrl(`videoaula ${subject} ENEM`))
                }
              />
            ))}
          </>
        ) : section === "materials" ? (
          <>
            <Text style={proStyles.sectionIntro}>
              Materiais extras exclusivos do PRO. A biblioteca completa com
              conteúdos gratuitos e PRO também está disponível para consulta.
            </Text>
            {extraMaterials.map((material) => (
              <Pressable
                key={material.id}
                accessibilityRole="button"
                onPress={() =>
                  onNavigate("pdfViewer", { materialId: material.id })
                }
                style={proStyles.materialCard}
              >
                <Ionicons
                  name="document-text-outline"
                  size={22}
                  color={COLORS.blue2}
                />
                <View style={proStyles.cardCopy}>
                  <Text style={proStyles.cardTitle} numberOfLines={2}>
                    {getPdfDisplayName(material)}
                  </Text>
                  <Text style={proStyles.cardDescription} numberOfLines={1}>
                    {getPdfDisplaySubtitle(material)}
                  </Text>
                </View>
                <Ionicons name="open-outline" size={18} color={COLORS.muted} />
              </Pressable>
            ))}
            <Button
              title="Abrir biblioteca completa"
              secondary
              onPress={() => onNavigate("materials")}
              style={proStyles.bottomButton}
            />
          </>
        ) : section === "plan" ? (
          <>
            <Text style={proStyles.sectionIntro}>
              Plano demonstrativo de segunda a sábado. Ajuste as atividades à
              sua rotina e marque as tarefas concluídas na tela inicial.
            </Text>
            {weeklyPlan.map(([day, subject, activity, duration]) => (
              <View key={day} style={proStyles.planCard}>
                <View style={proStyles.planTopRow}>
                  <Text style={proStyles.planDay}>{day}</Text>
                  <Text style={proStyles.planDuration}>{duration}</Text>
                </View>
                <Text style={proStyles.planSubject}>{subject}</Text>
                <Text style={proStyles.cardDescription}>{activity}</Text>
              </View>
            ))}
            <Button
              title="Ver tarefas de hoje"
              onPress={() => onNavigate("home")}
              style={proStyles.bottomButton}
            />
          </>
        ) : section === "exercises" || section === "reviews" ? (
          selectedSubject ? (
            <View style={proStyles.detailCard}>
              <Text style={proStyles.sectionTitle}>{selectedSubject}</Text>
              {section === "reviews" ? (
                reviewTopics[selectedSubject].map((topic) => (
                  <Pressable
                    key={topic}
                    accessibilityRole="checkbox"
                    accessibilityState={{
                      checked: Boolean(reviewedTopics[`${selectedSubject}:${topic}`]),
                    }}
                    onPress={() => {
                      const topicKey = `${selectedSubject}:${topic}`;
                      const wasReviewed = Boolean(reviewedTopics[topicKey]);
                      setReviewedTopics((current) => ({
                        ...current,
                        [topicKey]: !wasReviewed,
                      }));
                      if (!wasReviewed) {
                        onStudyActivity(`pro-review-${selectedSubject}-${topic}`);
                      }
                    }}
                    style={proStyles.topicRow}
                  >
                    <Ionicons
                      name={
                        reviewedTopics[`${selectedSubject}:${topic}`]
                          ? "checkmark-circle"
                          : "ellipse-outline"
                      }
                      size={18}
                      color={COLORS.blue2}
                    />
                    <Text style={proStyles.topicText}>{topic}</Text>
                  </Pressable>
                ))
              ) : (
                <>
                  <Text style={proStyles.questionText}>
                    {reviewQuestions[selectedSubject].prompt}
                  </Text>
                  {reviewQuestions[selectedSubject].options.map((option) => (
                    <Pressable
                      key={option}
                      accessibilityRole="radio"
                      accessibilityState={{ checked: selectedAnswer === option }}
                      onPress={() => {
                        setSelectedAnswer(option);
                        setReviewResult("");
                      }}
                      style={[
                        proStyles.answerOption,
                        selectedAnswer === option &&
                          proStyles.answerOptionActive,
                      ]}
                    >
                      <Text style={proStyles.answerText}>{option}</Text>
                    </Pressable>
                  ))}
                  {reviewResult ? (
                    <Text style={proStyles.feedbackText}>{reviewResult}</Text>
                  ) : null}
                  <Button
                    title="Conferir resposta"
                    onPress={answerReview}
                    disabled={selectedAnswer === null}
                    style={proStyles.bottomButton}
                  />
                </>
              )}
            </View>
          ) : (
            <>
              <Text style={proStyles.sectionIntro}>
                {section === "reviews"
                  ? "Escolha uma matéria para ver os principais tópicos de revisão."
                  : "Escolha uma matéria e responda uma questão de prática."}
              </Text>
              {subjects.map((subject) => (
                <ProCard
                  key={subject}
                  icon={
                    section === "reviews"
                      ? "refresh-outline"
                      : "help-circle-outline"
                  }
                  title={subject}
                  description={
                    section === "reviews"
                      ? `${reviewTopics[subject].length} tópicos para revisar`
                      : "Praticar uma questão"
                  }
                  onPress={() => {
                    setSelectedSubject(subject);
                    setSelectedAnswer(null);
                    setReviewResult("");
                  }}
                />
              ))}
            </>
          )
        ) : section === "exam" ? (
          examResult !== null ? (
            <View style={proStyles.resultCard}>
              <Ionicons
                name="trophy-outline"
                size={46}
                color={COLORS.purple2}
              />
              <Text style={proStyles.resultTitle}>Prova concluída</Text>
              <Text style={proStyles.resultScore}>
                Você acertou {examResult} de {examQuestions.length} questões.
              </Text>
              <Button
                title="Tentar novamente"
                onPress={() => {
                  setExamIndex(0);
                  setExamScore(0);
                  setExamAnswer(null);
                  setExamResult(null);
                }}
                style={proStyles.bottomButton}
              />
            </View>
          ) : (
            <View style={proStyles.detailCard}>
              <Text style={proStyles.questionProgress}>
                Questão {examIndex + 1} de {examQuestions.length} •{" "}
                {examQuestions[examIndex].subject}
              </Text>
              <Text style={proStyles.questionText}>
                {examQuestions[examIndex].prompt}
              </Text>
              {examQuestions[examIndex].options.map((option) => (
                <Pressable
                  key={option}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: examAnswer === option }}
                  onPress={() => setExamAnswer(option)}
                  style={[
                    proStyles.answerOption,
                    examAnswer === option && proStyles.answerOptionActive,
                  ]}
                >
                  <Text style={proStyles.answerText}>{option}</Text>
                </Pressable>
              ))}
              <Button
                title={
                  examIndex === examQuestions.length - 1
                    ? "Finalizar prova"
                    : "Próxima questão"
                }
                onPress={answerExam}
                disabled={examAnswer === null}
                style={proStyles.bottomButton}
              />
            </View>
          )
        ) : null}
      </ScrollView>
    </MainLayout>
  );
}

const proStyles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 92,
    gap: 12,
    width: "100%",
    maxWidth: 820,
    alignSelf: "center",
  },
  subscriptionContent: {
    gap: 14,
    width: "100%",
  },
  subscriptionHero: {
    minHeight: 230,
    overflow: "hidden",
    borderRadius: 20,
    padding: 23,
    justifyContent: "center",
  },
  heroGlow: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    top: -70,
    right: -40,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  proLabel: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.16)",
  },
  proLabelText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  heroBrand: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 2.4,
    marginTop: 16,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 27,
    lineHeight: 33,
    fontWeight: "900",
    marginTop: 8,
  },
  heroSubtitle: {
    color: "#F1F5FF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    maxWidth: 580,
  },
  benefitsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 18,
    gap: 11,
  },
  subscriptionSectionTitle: {
    color: COLORS.text,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "900",
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  benefitIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  benefitLabel: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "600",
  },
  plansHeading: {
    gap: 4,
    marginTop: 2,
  },
  plansCaption: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  plansRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    gap: 12,
  },
  subscriptionPlan: {
    flexGrow: 1,
    flexBasis: 280,
    minWidth: 260,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 16,
    padding: 18,
  },
  subscriptionPlanFeatured: {
    borderColor: PRO_PURPLE,
    borderWidth: 2,
    padding: 17,
  },
  bestOptionBadge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
    marginBottom: 13,
  },
  bestOptionText: {
    color: COLORS.white,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
  planName: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },
  priceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    marginTop: 9,
  },
  planPrice: {
    color: COLORS.text,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "900",
  },
  planPriceUnit: {
    color: COLORS.muted,
    fontSize: 12,
    marginLeft: 5,
  },
  annualTotal: {
    color: PRO_PURPLE,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 3,
  },
  planDetails: {
    gap: 9,
    marginTop: 17,
    minHeight: 65,
  },
  planDetailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  planDetailText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 12,
    lineHeight: 18,
  },
  planButton: {
    marginTop: 17,
  },
  noticeCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    backgroundColor: "#EFF6FF",
  },
  noticeText: {
    flex: 1,
    color: "#1E3A8A",
    fontSize: 12,
    lineHeight: 18,
  },
  loginButton: {
    marginTop: -4,
  },
  comparisonCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 17,
  },
  comparisonHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingVertical: 11,
    marginTop: 7,
  },
  comparisonHeaderText: {
    width: 66,
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "900",
    textAlign: "center",
  },
  comparisonFeature: {
    flex: 1,
    width: undefined,
    textAlign: "left",
  },
  proColumn: {
    backgroundColor: "#F5F3FF",
    borderRadius: 6,
  },
  comparisonRow: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E2E8F0",
  },
  comparisonLabel: {
    color: COLORS.text,
    fontSize: 11,
    lineHeight: 15,
    paddingVertical: 7,
    paddingRight: 5,
  },
  comparisonValue: {
    width: 66,
    alignItems: "center",
    justifyContent: "center",
  },
  renewalNote: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    backgroundColor: "#ECFDF5",
    borderColor: "#A7F3D0",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
  },
  statusIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  statusTitle: {
    color: "#065F46",
    fontSize: 13,
    fontWeight: "900",
  },
  statusDescription: {
    color: "#047857",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  demoStatusCard: {
    backgroundColor: "#F5F3FF",
    borderColor: "#DDD6FE",
  },
  demoStatusTitle: {
    color: "#5B21B6",
    fontSize: 13,
    fontWeight: "900",
  },
  demoStatusDescription: {
    color: "#6D28D9",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  paywall: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 22,
  },
  proMark: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: COLORS.purple2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  paywallTitle: {
    color: COLORS.text,
    fontSize: 21,
    lineHeight: 27,
    fontWeight: "900",
    textAlign: "center",
  },
  paywallCopy: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 16,
    textAlign: "center",
  },
  featureRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginVertical: 5,
  },
  featureText: { color: COLORS.text, fontSize: 13, flex: 1 },
  unlockButton: { width: "100%", marginTop: 18 },
  demoNote: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 10,
    textAlign: "center",
  },
  errorText: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  welcome: {
    backgroundColor: COLORS.navy,
    borderRadius: 15,
    padding: 19,
    marginBottom: 4,
  },
  welcomeEyebrow: {
    color: "#C9B7FF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },
  welcomeTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 8,
  },
  welcomeCopy: {
    color: "#E4E5FF",
    fontSize: 12,
    marginTop: 6,
  },
  card: {
    minHeight: 72,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#F0EBFF",
    alignItems: "center",
    justifyContent: "center",
  },
  cardCopy: { flex: 1 },
  cardTitle: { color: COLORS.text, fontSize: 13, fontWeight: "800" },
  cardDescription: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 3,
  },
  sectionIntro: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 3,
  },
  lessonCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 13,
  },
  lessonSubject: {
    color: COLORS.purple2,
    fontSize: 11,
    fontWeight: "800",
  },
  lessonTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 4,
    marginBottom: 11,
  },
  videoFrame: {
    height: 210,
    width: "100%",
    overflow: "hidden",
    backgroundColor: COLORS.navy,
    borderRadius: 8,
  },
  nativeVideo: { flex: 1, backgroundColor: COLORS.navy },
  videoCredit: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 8,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "900",
    marginTop: 5,
    marginBottom: 2,
  },
  materialCard: {
    backgroundColor: COLORS.white,
    borderRadius: 11,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bottomButton: { marginTop: 10 },
  planCard: {
    backgroundColor: COLORS.white,
    borderRadius: 11,
    padding: 14,
  },
  planTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  planDay: { color: COLORS.purple2, fontSize: 11, fontWeight: "800" },
  planDuration: { color: COLORS.muted, fontSize: 11, fontWeight: "700" },
  planSubject: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 8,
  },
  detailCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
  },
  topicRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    paddingVertical: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#DCE5F5",
  },
  topicText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 19,
  },
  questionProgress: {
    color: COLORS.purple2,
    fontSize: 11,
    fontWeight: "800",
    marginBottom: 11,
  },
  questionText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 23,
    marginBottom: 15,
  },
  answerOption: {
    borderWidth: 1,
    borderColor: "#C9DCF3",
    borderRadius: 9,
    padding: 12,
    marginBottom: 8,
  },
  answerOptionActive: {
    borderColor: COLORS.blue2,
    backgroundColor: "#EFF4FF",
  },
  answerText: { color: COLORS.text, fontSize: 12, lineHeight: 17 },
  feedbackText: {
    color: COLORS.text,
    backgroundColor: "#EEF8F3",
    borderRadius: 8,
    padding: 11,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },
  resultCard: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 22,
  },
  resultTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 10,
  },
  resultScore: {
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});

export default ProScreen;
