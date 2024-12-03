// Página home, principal do projeto

import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import NavButton from "../components/NavButton"
import Container from "../components/Container"
import StyledTitle from "../components/StyledTitle"

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

    const toStyledComponentScreen = () => {
        navigation.navigate('Styled')
    }

    const toAPIScreen = () => {
        navigation.navigate('API')
    }

    const toAcelerometerScreen = () => {
        navigation.navigate('Acelerometer')
    }
    
    return (
        <Container>
            <StyledTitle>Olá mundo!</StyledTitle>
            <StatusBar style="auto" />
            <NavButton text="Aula de Navegação" onPress={toNavigationScreen} />
            <NavButton text="Aula de ScroolView" onPress={toScrollViewScreen} />
            <NavButton text="Aula de FlatList" onPress={toFlatListScreen} />
            <NavButton text="Aula de StyledComponent" onPress={toStyledComponentScreen} />
            <NavButton text="Aula de Consumo de API's" onPress={toAPIScreen} />
            <NavButton text="Aula de Periféricos" onPress={toAcelerometerScreen} />
        </Container>
    )
}