import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGamesScreen() {
    return (
        <View style={styles.inputContainer}>
            <Text>Guess the number between 1 and 99</Text>
            <TextInput></TextInput>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )


}

// Export so that it can be imported in other files
export default StartGamesScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#72063c',
        // To add shadow with React Native, it is different than in CSS for web
        // On Web: box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        // In Android: elevation property
        // In iOS: shadowColor, shadowOffset, shadowRadius, shadowOpacity
        
        // for Android shadow
        elevation: 4,  // the higher the value, the more intense the shadow
        // for iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    }
});