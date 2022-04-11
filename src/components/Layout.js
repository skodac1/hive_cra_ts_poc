import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass/styled-components'

import Sidebar from './Sidebar'

const Layout = ({ children }) => {
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

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
