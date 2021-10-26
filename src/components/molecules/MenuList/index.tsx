import React from "react";
import { Stack } from "@chakra-ui/layout";

import { MenuItem } from "../../atoms/MenuItem";
import { useMediaQuery } from "@chakra-ui/media-query";
import { SearchBar } from "../../atoms/SearchBar";

type Props = {
  isOpen: boolean;
  items: string[];
};

export const MenuList: React.FC<Props> = ({ isOpen, items }) => {
  const [isMobile] = useMediaQuery("(max-width: 470px)");

  return (
    <Stack
      spacing={{ base: "16px", md: "20px" }}
      direction={{ base: "column", md: "row" }}
      display={{ base: isOpen ? "block" : "none", md: "flex" }}
      width={{ base: "full", md: "auto" }}
      alignItems="center"
      flexGrow={1}
      mt={{ base: 4, md: 0 }}
    >
      {isMobile && <SearchBar />}
      {items.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </Stack>
  );
};
