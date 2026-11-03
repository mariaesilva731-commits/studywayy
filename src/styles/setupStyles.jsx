import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const styles = StyleSheet.create({
  setup: {
    flexGrow: 1,
    backgroundColor: "transparent",
    padding: 18,
    paddingTop: 32,
  },
  formLabel: {
    color: COLORS.white,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 2,
    fontSize: 12,
  },
  choiceWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  choice: {
    backgroundColor: "#101542",
    borderWidth: 1,
    borderColor: "#303873",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 9,
  },
  choiceActive: {
    backgroundColor: COLORS.purple2,
    borderColor: COLORS.purple2,
  },
  choiceText: { color: "#CBD3F1", fontWeight: "700", fontSize: 12 },
  choiceTextActive: { color: COLORS.white },
  testScreen: {
    flexGrow: 1,
    backgroundColor: "transparent",
    padding: 18,
    paddingTop: 36,
  },
  testBrand: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 28,
  },
  testTitle: { color: COLORS.white, fontSize: 25, fontWeight: "900" },
  testSubtitle: {
    color: "#A7AFD9",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 16,
  },
  questionCard: {
    backgroundColor: "rgba(3, 4, 29, 0.28)",
    borderRadius: 6,
    padding: 12,
    marginTop: 10,
  },
  questionNumber: { color: "#9BA9FF", fontWeight: "900", fontSize: 11 },
  question: {
    color: COLORS.white,
    fontWeight: "800",
    marginTop: 5,
    lineHeight: 18,
    fontSize: 12,
  },
  questionInput: {
    backgroundColor: COLORS.light,
    borderRadius: 5,
    minHeight: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    color: COLORS.text,
    fontSize: 12,
  }
});

export default styles;
