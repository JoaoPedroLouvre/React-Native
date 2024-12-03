// Gerencia a troca de páginas do aplicativo

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import StyledComponentScreen from "./screens/StyledComponentScreen";
import UsingApisScreen from "./screens/UsingApisScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="Styled" component={StyledComponentScreen} />
        <Stack.Screen name="API" component={UsingApisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
