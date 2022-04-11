import React  from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { NavLink, useMatch } from 'react-router-dom'
import { Flex, Box } from 'rebass/styled-components'
import LogoutIcon from './icons/Logout'
import SettingsIcon from './icons/Settings'
// import { AuthContext } from './okta/AuthProvider'

const StyledSidebarItem = styled(Flex)`
  line-height: 145%;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: ${ ({ active, theme }) => (active ? theme.colors?.primary : theme.colors?.gray_light) };
  }
  svg {
    margin-right: 16px;
    ${ ({ active, theme }) => (active &&
    css`
      path {
        fill: ${ theme.colors?.white }
      };
    `) }
    };
  }
`

const SidebarItem = ({ href, children, onClick }) => {
    // const router = useRouter()
    // const isActive = router?.pathname.includes(href)
    let isActive = useMatch(href)

    return (
        <NavLink to={href} style={{ textDecoration: 'none' }}>
            <StyledSidebarItem
                active={isActive}
                alignItems="center"
                py={2}
                px={4}
                mb={3}
                bg={isActive ? 'primary' : 'transparent'}
                color={isActive ? 'white' : 'gray_darkest'}
                fontSize={2}
                fontFamily="heading"
                cursor="pointer"
                onClick={onClick}
            >
                {children}
            </StyledSidebarItem>
        </NavLink>
    )
}

SidebarItem.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

SidebarItem.defaultProps = {
    onClick: () => null,
}

const Sidebar = () => {
    // const { auth } = useContext(AuthContext)

    // const logout = async () => {
    //     // const originalUri = router.asPath
    //     auth.setOriginalUri('/orders')
    //     await auth.signOut()
    // }

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
            <SidebarItem href="#" onClick={() => {}}>
                <LogoutIcon />
                Log Out
            </SidebarItem>
        </Flex>
    )
}

export default Sidebar
