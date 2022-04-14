import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink, useMatch } from 'react-router-dom'
import { Flex, Box } from 'rebass/styled-components'
import LogoutIcon from './icons/Logout'
import SettingsIcon from './icons/Settings'
import {useOktaAuth} from "@okta/okta-react";

// const StyledSidebarItem = styled(Flex)`
//   line-height: 145%;
//   border-radius: 4px;
//   z-index: 1;
//   cursor: pointer;
//
//   &:hover {
//     background-color: ${ ({ active, theme }) => (active ? theme.colors?.primary : theme.colors?.gray_light) };
//   }
//   svg {
//     margin-right: 16px;
//     ${ ({ active, theme }) => (active &&
//     css`
//       path {
//         fill: ${ theme.colors?.white }
//       };
//     `) }
//     };
//   }
// `

const SidebarItem = ({ href, children, onClick }: SidebarItemProps) => {
    let isActive = useMatch(href)
    const style = {
        lineHeight: '145%',
    borderRadius: '4px',
    zIndex: 1,
    cursor: 'pointer',
        '.active': {
            '&:hover': {
                backgroundColor: 'primary'
            },
            '.inactive': {
                backgroundColor: 'gray_light'
            }
        },
        ...(isActive && {
            '& path': {
                fill: 'white'
            }
        })
    }

    return (
        <NavLink to={href} style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <Flex
                style={style}
                alignItems="center"
                py={2}
                px={4}
                mb={3}
                bg={isActive ? 'primary' : 'transparent'}
                color={isActive ? 'white' : 'gray_darkest'}
                fontSize={2}
                fontFamily="heading"
                onClick={onClick}
            >
                {children}
            </Flex>
        </NavLink>
    )
}

type SidebarItemProps = {
    href: string,
    children: any,
    onClick?: () => void,
}

SidebarItem.defaultProps = {
    onClick: () => null,
}

const Sidebar = () => {
    const { oktaAuth } = useOktaAuth()
    const logout = async () => {
        oktaAuth.setOriginalUri('/orders')
        await oktaAuth.signOut()
    }

    return (
        <Flex
            flexDirection="column"
            bg="gray_lighter"
            width={244}
            py={4}
            px={3}
            sx={{
                borderRight: '1px solid',
                borderRightColor: 'gray',
                position: 'relative',
                backgroundImage: 'url(/sidebar-background1.png), url(/sidebar-background2.png)',
                backgroundPosition: 'top, bottom',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}
        >
            <Box as="img" src="/happy_hive_logo.svg" width={180} height={34} alt="logo" />
            <Flex flexDirection="column" mt={40} flex={1}>
                <SidebarItem href="/orders">
                    Orders
                </SidebarItem>
                <SidebarItem href="/remittance">
                    Remittance
                </SidebarItem>
            </Flex>
            <Box as="hr" bg="gray" my={3} height={1} sx={{ border: 'none' }} />
            <SidebarItem href="/settings">
                <SettingsIcon />
                Settings
            </SidebarItem>
            <SidebarItem href="#" onClick={logout}>
                <LogoutIcon />
                Log Out
            </SidebarItem>
        </Flex>
    )
}

export default Sidebar
