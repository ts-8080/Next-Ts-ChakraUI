import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Checkbox,
  Container,
  Input,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Stack>
        <Container className="container">
          <nav>
            <Box fontSize='9xl' >
              Next-Ts-ChakraUI
            </Box>
            <Stack>
              <Switch colorScheme="teal" size="lg" />
              <Checkbox colorScheme="teal" defaultChecked></Checkbox>
              <span className="slider"></span>
            </Stack>
          </nav>
          <section>
            <Box className="content">
              <Text fontSize='3xl'>ポートフォリオ</Text>
              <h3>xxxxxxxxxxxxxxxxxxxxxxxxx</h3>
              <p>tttttttttttttttttttttttttt</p>
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                className="primary-btn"
              >
                お問い合わせ
              </Button>
            </Box>
          </section>
        </Container>
      </Stack>
    </ChakraProvider>
  );
}
