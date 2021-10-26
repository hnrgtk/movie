import React from "react";
import Image from "next/image";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

import NotificationIcon from "../../../../public/assets/notification.svg";

export const NotificationButton = () => {
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
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
