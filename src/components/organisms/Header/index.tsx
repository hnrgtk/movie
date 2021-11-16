import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Logo } from "../../atoms/Logo";
import { MenuList } from "../../molecules/MenuList";
import { SearchBar } from "../../atoms/SearchBar";
import { NotificationButton } from "../../atoms/NotificationButton";

export const Header: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      width="100%"
      wrap="wrap"
      padding={5}
      bg="black"
      color="white"
    >
      <Logo src="https://darkflix.com.br/img/cache/thumb/2075afcba663bcafabd68ac4a89e12ba91877e83.jpg" />
      <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
        <HamburgerIcon color="gray.200" w={6} h={6} />
      </Box>
      <MenuList
        {...{
          isOpen,
          items: [
            "Início",
            "Recomendados",
            "Categorias",
            "Tendências",
            "Novidades",
          ],
        }}
      />
      <HStack spacing="4">
        <Box display={{ base: "none", md: "block" }}>
          <SearchBar />
        </Box>
        <NotificationButton />
      </HStack>
    </Flex>
  );
};
