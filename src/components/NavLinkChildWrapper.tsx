import { Flex } from "rebass/styled-components";
import {useMemo} from "react";

const NavLinkChildWrapper = ({ children }: any) => {
    const style = useMemo(() => ({
        lineHeight: '145%',
        borderRadius: '4px',
        zIndex: 1,
        cursor: 'pointer',
    }), [])

    return <Flex
        sx={style}
        className='nav-link-child-wrapper'
        alignItems="center"
        py={2}
        px={4}
        mb={3}
        fontSize={2}
        fontFamily="heading"
    >
        {children}
    </Flex>
}

export default NavLinkChildWrapper