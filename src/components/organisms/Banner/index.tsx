import React, { useState } from "react"
import { Box } from "@chakra-ui/react"

import { BannerGeneral } from "../../molecules/BannerGeneral"
import { BannerDetail } from "../../molecules/BannerDetail"

export const Banner = () => {
    const [bannerState, setBannerState] = useState({
        generalTab: true,
        detailTab: false
    });

    return (
        <Box>
            {bannerState.generalTab && <BannerGeneral />}
            {bannerState.detailTab && <BannerDetail />}
        </Box>
    )
}