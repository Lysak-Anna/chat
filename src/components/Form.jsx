import { Input, Box, Button, Stack, Container, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export default function Form() {
  return (
    <>
      <Container maxW="2xl" h="100vh">
        <Box
          as="form"
          borderRadius="md"
          maxWidth={96}
          spacing={4}
          p={4}
          margin="auto"
        >
          <Stack spacing={4}>
            <Input
              variant="outline"
              placeholder="Email"
              focusBorderColor="light"
            />
            <Button w="100%" bgColor="yellow" _hover={{ bg: "accent" }}>
              Sign in
            </Button>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              _before={{
                content: '""',
                border: "1px",
                width: "43%",
                display: "inline-block",
                mr: "3",
                color: "#d2d3d3",
              }}
              _after={{
                content: '""',
                border: "1px",
                width: "43%",
                display: "inline-block",
                ml: "3",
                color: "#d2d3d3",
              }}
            >
              or
            </Text>

            <Button
              leftIcon={<FcGoogle />}
              w="100%"
              bgColor="accent"
              _hover={{ bg: "yellow" }}
            >
              Sign in with Google
            </Button>

            <Button
              leftIcon={<FaGithub />}
              w="100%"
              bgColor="accent"
              _hover={{ bg: "yellow" }}
            >
              Sign in with Github
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
