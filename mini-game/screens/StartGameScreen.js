import { TextInput, Button, Text, View } from 'react-native';

function StartGamesScreen() {
    return (
        <View>
            <Text>Guess the number between 1 and 99</Text>
            <TextInput></TextInput>
            <Button title="Start Game"/>
        </View>
    )


}

// Export so that it can be imported in other files
export default StartGamesScreen;