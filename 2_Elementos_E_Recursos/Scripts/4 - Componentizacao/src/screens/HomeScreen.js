// Página home, principal do projeto

import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import NavButton from "../components/NavButton"

export default function HomeScreen() {
    const navigation = useNavigation()

    const toNavigationScreen = ()=> {
        navigation.navigate('Navigation')
    }

    const toScrollViewScreen = () => {
        navigation.navigate('ScrollView')
    }

    const toFlatListScreen = () => {
        navigation.navigate('FlatList')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, mundo!</Text>
            <StatusBar style="auto" />
            <NavButton text="Aula de Navegação" onPress={toNavigationScreen} />
            <NavButton text="Aula de ScroolView" onPress={toScrollViewScreen} />
            <NavButton text="Aula de FlatList" onPress={toFlatListScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        color: "#f64348",
    },
    button: {
        backgroundColor: "#DDD",
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "#232323",
    }
})