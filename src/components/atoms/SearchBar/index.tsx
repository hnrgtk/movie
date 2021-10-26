/* eslint-disable react/no-children-prop */
import React, { useRef } from "react";
import { Box } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import { useDisclosure, useOutsideClick } from "@chakra-ui/hooks";

export const SearchBar = () => {
  const inputRef = useRef(null);
  const { isOpen, onToggle, onClose } = useDisclosure();

  useOutsideClick({
    ref: inputRef,
    handler: onClose,
  });

  return (
    <Box display="inline-block" cursor="pointer" onClick={onToggle} w="100%">
      <InputGroup>
        <InputLeftElement
          cursor="default"
          pointerEvents="none"
          children={<SearchIcon color="gray.200" w={5} h={5} />}
        />
        <Input
          ref={inputRef}
          _focus={{ boxShadow: "none" }}
          border={{ base: "1px", md: isOpen ? "1px" : "0px" }}
          cursor={isOpen ? "text" : "pointer"}
          width={{
            base: "100%",
            md: isOpen ? "260px" : "0px",
          }}
          placeholder="Pesquisar..."
          transition="0.3s"
        />
      </InputGroup>
    </Box>
  );
};
