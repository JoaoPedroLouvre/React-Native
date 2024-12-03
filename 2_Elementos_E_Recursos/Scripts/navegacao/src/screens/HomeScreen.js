// Página home, principal do projeto

import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HomeScreen() {
    const navigation = useNavigation()

    const navigateToNavigationScreen = ()=> {
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
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={navigateToNavigationScreen}
            >
                <Text style={styles.buttonText}>Aula de Navegação</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={toScrollViewScreen}
            >
                <Text style={styles.buttonText}>Aula de ScrollView</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={toFlatListScreen}
            >
                <Text style={styles.buttonText}>Aula de FlatList</Text>
            </TouchableOpacity>
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