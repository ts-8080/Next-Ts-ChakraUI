import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Stack>
        <Container className="container">
          <nav>
            <Box bg="red" fontSize="100"  className=" title">
              Next-Ts-ChakraUI
            </Box>
            <div>
              <form action="#">
                <label htmlFor="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </form>
            </div>
          </nav>
          <section>
            <div className="content">
              <h1>ポートフォリオ</h1>
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
            </div>
          </section>
        </Container>
      </Stack>
    </ChakraProvider>
  );
}
