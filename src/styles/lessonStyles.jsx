import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const styles = StyleSheet.create({
  subjectHero: {
    backgroundColor: "transparent",
    borderRadius: 6,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    marginBottom: 8,
  },
  subjectHeroIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: COLORS.blue2,
    alignItems: "center",
    justifyContent: "center",
  },
  topicRow: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  topicNumber: {
    width: 32,
    height: 32,
    borderRadius: 7,
    backgroundColor: "#DCE9FF",
    alignItems: "center",
    justifyContent: "center",
  },
  topicNumberText: { color: COLORS.blue2, fontWeight: "900", fontSize: 12 },
  videoBox: {
    height: 190,
    borderRadius: 6,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  videoText: {
    color: "#AAB3D6",
    marginTop: 7,
    fontWeight: "700",
    fontSize: 11,
  },
  paragraph: { color: COLORS.muted, fontSize: 12, lineHeight: 18, flex: 1 },
  infoRow: { flexDirection: "row", gap: 6, marginTop: 10 },
  infoPill: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  infoPillText: { color: COLORS.text, fontSize: 9, fontWeight: "800" },
  noteCard: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 12,
    borderWidth: 1,
    borderColor: "#C9DCF3",
  },
  noteTitle: {
    color: COLORS.text,
    fontWeight: "900",
    marginBottom: 7,
    fontSize: 13,
  }
});

export default styles;
