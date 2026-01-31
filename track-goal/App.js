import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
          <TextInput style = {styles.textInput} 
                     placeholder="Enter your goal"
                     onChangeText={goalInputHandler}
                     value={enteredGoalText}
          />
        <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>List of Goals</Text>
            {courseGoals.map((goal) => (
              <Text style={styles.goalItem} key={goal}>{goal}</Text>
            ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfc5c5',
    paddingBottom: 12
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    marginTop: 10
  },
  goalItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#e4e4e4',
    borderRadius: 4,
    fontSize: 16,
  },
});