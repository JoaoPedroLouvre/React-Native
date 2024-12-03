import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import NavButton from "../components/NavButton"

export default function NavigationScreen() {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aula de Navegação</Text>
            <NavButton text="Voltar" onPress={navigateBack} />
            <TouchableOpacity
                activeOpacity={0.8}
                style={StyleSheet.button} 
                onPress={navigateBack}
            >
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "fff"
    }
})