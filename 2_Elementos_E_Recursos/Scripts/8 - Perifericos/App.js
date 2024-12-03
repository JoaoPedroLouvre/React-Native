import StackNavigator from "./src/StackNavigator";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto"

const theme = {
  colors: {
    red: '#F64348',
    dark: '#1C1A1D',
    light: '#EAEAEA'
  },
  fonts: {
    roboto700: 'Roboto_700Bold'
  },
}

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_700Bold })


  return( 
    <ThemeProvider theme={theme}>
      <StackNavigator />
    </ThemeProvider>
  )
}