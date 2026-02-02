import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: "#e4e4e4",
    borderRadius: 4,
    fontSize: 16,
  },
});
