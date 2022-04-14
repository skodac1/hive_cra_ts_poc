import React from "react"
import { Flex } from 'rebass/styled-components'

import Sidebar from './Sidebar'

type LayoutProps = {
    children: any
}

const Layout = ({children}: LayoutProps) => {
    return (
        <Flex
            overflow="hidden"
            height="100vh"
            sx={{
                left: 0,
                top: 0,
                width: '100vw',
            }}
        >
            <Sidebar />
            <Flex flexDirection="column" flex={1}>{children}</Flex>
        </Flex>
    )
}

export default Layout
