import { Flex, Link as ReachLink, Link, HStack } from "@chakra-ui/react";
export default function Layout() {
  return (
    <Flex h="60px" p={4} bgColor="light">
      <HStack spacing="24px">
        <Link as={ReachLink} to="/">
          Home
        </Link>

        <Link as={ReachLink} to="/chat">
          Chat
        </Link>
      </HStack>
    </Flex>
  );
}
