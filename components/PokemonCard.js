import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};
export default function PokemonCard({
  hp,
  image,
  name,
  type,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>💓{hp}</Text>
      </View>

      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.typeContainer}>
        <View style={styles.badge}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.moves}>
        <Text style={styles.movesText}>{moves.join(",")}</Text>
      </View>
      <View style={styles.weak}>
        <Text style={styles.weakText}>{weaknesses}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 8,
    margin: 2,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 32,
  },
  name: { fontSize: 30, fontWeight: "bold" },
  hp: { fontSize: 22 },
  image: {
    width: "100%",
    height: 200,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 10,
    borderWidth: 4,
    borderRadius: 20,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  moves: { padding: 2, margin: 3 },
  movesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  weak: { margin: 3 },

  weakText: {
    fontWeight: "normal",
  },
});
