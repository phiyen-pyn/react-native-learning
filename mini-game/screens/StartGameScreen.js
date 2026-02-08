import { TextInput, Button, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGamesScreen() {
    return (
        <View>
            <Text>Guess the number between 1 and 99</Text>
            <TextInput></TextInput>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )


}

// Export so that it can be imported in other files
export default StartGamesScreen;