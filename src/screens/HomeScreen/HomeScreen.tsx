import Box from "@src/components/Box/Box"
import Background from "./patterns/Background/background"
import Menu from "./patterns/Menu/menu"
import Text from "@src/components/Text/Text"
import Feed from "./patterns/Feed/Feed"
import Footer from "./patterns/Footer/footer"

export default function HomeScreen() {
  return (
    <Box tag="main" stylesheet={{
      backgroundColor: 'red',
      flex: 1,
    }}>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
