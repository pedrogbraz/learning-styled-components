import Box from "@src/components/Box/box"
import Background from "./patterns/Background/background"
import Menu from "./patterns/Menu/menu"
import Text from "@src/components/Text/text"
import Feed from "./patterns/Feed/Feed"

export default function HomeScreen() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
    </Box>
  )
}
