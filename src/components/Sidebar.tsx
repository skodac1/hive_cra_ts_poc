import React, {useMemo} from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Box } from 'rebass/styled-components'
import LogoutIcon from './icons/Logout'
import SettingsIcon from './icons/Settings'
import { useOktaAuth } from "@okta/okta-react";
import NavLinkChildWrapper from "./NavLinkChildWrapper";

const SidebarNavItem = ({ to, children }: SidebarItemProps) => {
    return (
        <NavLink to={to} style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <NavLinkChildWrapper>
                {children}
            </NavLinkChildWrapper>
        </NavLink>
    )
}

type SidebarItemProps = {
    to: string,
    children: any
}

SidebarNavItem.defaultProps = {
    onClick: () => null,
}

const Sidebar = () => {
    const { oktaAuth } = useOktaAuth()
    const logout = async () => {
        oktaAuth.setOriginalUri('/orders')
        await oktaAuth.signOut()
    }

    const style = useMemo(() => ({
        borderRight: '1px solid',
        borderRightColor: 'gray',
        position: 'relative',
        backgroundImage: 'url(/sidebar-background1.png), url(/sidebar-background2.png)',
        backgroundPosition: 'top, bottom',
        backgroundRepeat: 'no-repeat, no-repeat',
        '& .nav-link-child-wrapper': {
            bg: 'transparent',
            color: 'gray_darkest',
            '&:hover': {
                bg: 'gray_light'
            },
        },
        '& svg': { mr: 3},
        '& .active': {
            '& .nav-link-child-wrapper': {
                bg: 'primary',
                color: 'white',
                '&:hover': {
                    bg: 'primary'
                },
            },
            '& path': {
                fill: 'white'
            }
        },
    }), [])

    return (
        <Flex
            flexDirection="column"
            bg="gray_lighter"
            width={244}
            py={4}
            px={3}
            sx={style}
        >
            <Box as="img" src="/happy_hive_logo.svg" width={180} height={34} alt="logo" />
            <Flex flexDirection="column" mt={40} flex={1}>
                <SidebarNavItem to="/orders">
                    Orders
                </SidebarNavItem>
                <SidebarNavItem to="/remittance">
                    Remittance
                </SidebarNavItem>
            </Flex>
            <Box as="hr" bg="gray" my={3} height={1} sx={{ border: 'none' }} />
            <SidebarNavItem to="/settings">
                <SettingsIcon />
                Settings
            </SidebarNavItem>
            <Box className="inactive" onClick={logout}>
                <NavLinkChildWrapper>
                    <LogoutIcon />
                    Log Out
                </NavLinkChildWrapper>
            </Box>
        </Flex>
    )
}

export default Sidebar
