import { LanguageProvider } from "../providers/language-provider"
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = ({ children }) => {
  return <LanguageProvider>
    <Header />
    { children }
    <Footer />
  </LanguageProvider>
}

export default MainLayout
