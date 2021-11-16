import React from "react";
import Image from "next/image";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text
} from "@chakra-ui/react";


import { NotificationInfo } from "../../molecules/NotificationInfo";

import NotificationIcon from "../../../../public/assets/notification.svg";

export const NotificationButton = () => {

  const mock = [
    { title: "Uma Noite Alucinante: A Morte do Demônio", wasAddedAt: "25 minutos" },
    { title: "Jason X", wasAddedAt: "30 minutos" },
    { title: "The Lighthouse", wasAddedAt: "1 dia" },
    { title: "The Nightmare On Elm Street", wasAddedAt: "1 semana" },
    { title: "Freddy vs Jason", wasAddedAt: "1 semana" },
    { title: "Fome Animal", wasAddedAt: "1 semana" },
    { title: "Phantasm", wasAddedAt: "2 semanas" },
    { title: "Boxing Helena", wasAddedAt: "2 semanas" },
  ]
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        _focus={{
          border: "none",
        }}
        icon={
          <Image
            src={NotificationIcon}
            alt="Notification Icon"
            width="30px"
            height="30px"
          />
        }
        variant="unstyled"
      />
      <MenuList bg="black" padding="2.5">
        <Text color="red.500">Notificações</Text>
        <MenuDivider />
        <Box overflowY="scroll" maxHeight="260px">
          {
            mock.map(data => (
              <>
                <NotificationInfo {...data} />
                <Divider />
              </>
            ))
          }
        </Box>

      </MenuList>
    </Menu>
  );
};
