import React from "react";
import Image from "next/image";

import { Center } from "@chakra-ui/layout";

type Props = {
  src: string;
  width?: string;
  height?: string;
};

export const Logo: React.FC<Props> = ({
  src,
  width = "40px",
  height = "40px",
}) => (
  <Center mr={5}>
    <Image {...{ src, width, height, alt: "Logo Darkflix" }} />
  </Center>
);
