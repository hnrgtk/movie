import React from "react";
import { Text } from "@chakra-ui/layout";

export const MenuItem: React.FC = ({ children }) => (
  <Text
    color="red"
    cursor="pointer"
    fontWeight="600"
    transition="0.3s"
    _hover={{
			color: "white",
      transition: "0.3s",
    }}
  >
    {children}
  </Text>
);
