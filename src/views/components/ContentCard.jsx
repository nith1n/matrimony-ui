import { StyleSheet, Text, View } from "react-native";
import React from "react";

const data = [
  { label: "Sent", value: "15" },
  { label: "Received", value: "7" },
  { label: "Accepted", value: "3" },
];

const ContentCard = ({ header }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderContainer}>
        <Text style={styles.cardHeader}>{header}</Text>
      </View>

      {data.map((cardData, index) => (
        <View style={styles.cardItem} key={index}>
          <Text style={styles.cardText}>{cardData.value}</Text>
          <Text style={styles.cardText}>{cardData.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 120,
    width: "100%",
    borderRadius: 20,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
  },
  cardItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cardHeaderContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 17,
  },
});
