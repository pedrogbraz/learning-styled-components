import Box from "@src/components/box";
import Theme from "@src/theme/theme";

export default function Home() {
  return(
    <Box tag="main" stylesheet={{
      fontFamily: Theme.typography.fontFamily
    }}
    >
      <h1>Opa</h1>
    </Box>
  )
}
