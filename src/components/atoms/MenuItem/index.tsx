import React from "react";
import { Text } from "@chakra-ui/layout";

export const MenuItem: React.FC = ({ children }) => (
  <Text
    color="gray.200"
    cursor="pointer"
    fontWeight="500"
    transition="0.3s"
    _hover={{
			color: "red.500",
      transition: "0.3s",
    }}
  >
    {children}
  </Text>
);
