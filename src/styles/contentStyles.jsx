import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const styles = StyleSheet.create({
  taskRow: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    gap: 9,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  taskTime: { width: 43 },
  taskHour: { color: COLORS.purple2, fontWeight: "900", fontSize: 11 },
  searchBox: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  searchInput: {
    flex: 1,
    minHeight: 42,
    paddingHorizontal: 8,
    color: COLORS.text,
    fontSize: 12,
  },
  institutionTabs: { flexDirection: "row", gap: 8, marginTop: 10 },
  institutionTab: {
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  institutionTabActive: {
    backgroundColor: COLORS.purple2,
    borderColor: COLORS.purple2,
  },
  institutionText: { color: COLORS.text, fontWeight: "800", fontSize: 11 },
  institutionTextActive: { color: COLORS.white },
  subjectCard: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  subjectIcon: {
    width: 42,
    height: 42,
    borderRadius: 7,
    backgroundColor: "#D4E5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  simuladoCard: {
    backgroundColor: COLORS.purple2,
    borderRadius: 5,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  whiteCardTitle: { color: COLORS.white, fontWeight: "900", fontSize: 14 },
  whiteCardText: { color: "#DDD5FF", fontSize: 10, marginTop: 4 }
});

export default styles;
