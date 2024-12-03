import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from "react-native"
import NavButton from "../components/NavButton"
import Container from "../components/Container"
import Title from "../components/Title"

export default function ScrollViewScreen() {

    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }

    return(
        <Container>
            <Title text="ScrollView" />
            <NavButton text="Voltar" onPress={navigateBack} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.item}>
                1 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
                <Text style={styles.item}>
                2 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
                <Text style={styles.item}>
                3 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
                <Text style={styles.item}>
                4 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
                <Text style={styles.item}>
                5 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
                <Text style={styles.item}>
                6 - Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Architecto sint veniam at quae enim culpa, quia facere 
                in fugit animi aut molestias deserunt nulla sapiente doloremque, 
                ea repellat beatae temporibus?
                </Text>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginHorizontal: 3,
        marginVertical: 32
    },
    item: {
        fontSize: 16,
        marginTop: 16
    },
})