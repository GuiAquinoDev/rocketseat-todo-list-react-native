import { ThemeProvider } from "styled-components/native";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from "./src/components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
