import styled from "styled-components/native"

const Background = styled.TouchableOpacity`
    background-color: ${(props) => props.bgColor ?? '#1c1a1d'};
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
`;
const Text = styled.Text`
    color: ${(props) => props.color ?? '#fff'};
`;

export default function StyledButton({ bgColor, color, children, onPress }) {
    return (
        <Background bgColor={bgColor} onPress={onPress}>
            <Text color={color}>{children}</Text>
        </Background>
    );
}