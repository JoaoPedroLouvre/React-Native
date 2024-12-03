import styled from "styled-components/native"

const Background = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
`;
const Text = styled.Text`
    color: ${({ theme }) => theme.colors.light};
`;

export default function StyledButton({ bgColor, color, children, onPress }) {
    return (
        <Background bgColor={bgColor} onPress={onPress}>
            <Text color={color}>{children}</Text>
        </Background>
    );
}