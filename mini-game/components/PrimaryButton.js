import { View, Text } from 'react-native';

// The text of the button is provided from outside so we use props to access it
// props.children will contain whatever is placed between the opening and closing tags of the PrimaryButton component when it is used
// {children} is destructured from props for easier access
function PrimaryButton({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default PrimaryButton;