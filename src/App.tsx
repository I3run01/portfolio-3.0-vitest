import { GlobalStyle } from "src/styles/global.style"
import { MainRoutes } from 'src/routes/mainRoutes'
import { Colors } from "./styles/globalVariables.style"
import { useSelector } from "react-redux"
import { RootState } from 'src/redux/store'
import { Layout } from "./components/layout"
 
function App() {

  const isDark = useSelector((state: RootState) => state.theme.isDark)

  const animationBgColorsLight = {
    color01: '#E0EAFC',
    color02: '#CFDEF3',
    color03: '#E0C3FC',
    color04: '#B4ACFF',
  }

  const animationBgColorsDark = {
    color01: '#353536 ',
    color02: '#012647',
    color03: '#112b17',
    color04: '#38015d',
  }

  return (
    <GlobalStyle $bgColor={isDark ? Colors.darkBgColor01 : Colors.lightBgColor01}
    $animationBgColors={isDark ? animationBgColorsDark : animationBgColorsLight}> 
      <Layout>
        <MainRoutes/>
      </Layout>
    </GlobalStyle>
  )
}

export default App
