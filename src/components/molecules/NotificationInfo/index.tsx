import Image from "next/image";

import { Box, Flex, Text } from "@chakra-ui/layout"

type Props = {
    title: string;
    wasAddedAt: string;
}

export const NotificationInfo: React.FC<Props> = ({
    title,
    wasAddedAt
}) => {
    const handleTitleElipsis = (value: string) => value.length > 35 ? value.slice(0, 35) + "..." : value
    return (
        <Flex w="100%" px="1" my="8px">
            <Box px="2">
                <Image src="https://source.unsplash.com/random" draggable={false} width={70} height={65} />
            </Box>
            <Box>
                <Text>{handleTitleElipsis(title)}</Text>
                <Text>há {wasAddedAt}</Text>
            </Box>
        </Flex>
    )
}