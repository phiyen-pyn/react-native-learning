import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

function GoalItem(props) {
  /* We have two ways to pass the id to GoalItem component for deletion:
  1. Have a separate function in this GoalItem class just like the GoalInput has the addGoalHandler function to call props.onDeleteItem with the id by use a wrapper function or arrow function.
  Example:
    function deleteItemHandler() {
      props.onDeleteItem(props.id);
    }
    Then use onPress={deleteItemHandler} in the Pressable component.  
  2. Use bind method to bind the id to the onPress event handler directly in the JSX code.
  Example:
    onPress={props.onDeleteItem.bind(this, props.id)}
  Here we are using the second approach. */
  /* bind is a basic JavaScript function that allows you to preconfigure a function for future execution. */
  /* The id which is gotten through the props is sent as a parameter value to the function that we receive on the props.onDeleteItem. which is the deleteGoalHandler function in App.js */
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && Platform.OS === 'ios' && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    backgroundColor: "#4e7bb6",
    borderRadius: 4,
    overflow: 'hidden'
  },
  goalText: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  }
});
