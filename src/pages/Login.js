import React from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import OktaSignInWidget from "../components/okta/OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";
import {useNavigate, useSearchParams} from "react-router-dom";
import Link from "../components/Link";

const Login = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const recoveryToken = searchParams.get('recoveryToken')

    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens)
    }

    const onError = (err) => {
        // eslint-disable-next-line no-console
        console.log('error logging in', err)
    }

    if (!authState) return null

    if (authState.isAuthenticated) {
        navigate('/orders', { replace: true });
        return null
    }

    return (
        <Box height="100%">
            <OktaSignInWidget
                onSuccess={onSuccess}
                onError={onError}
                recoveryToken={recoveryToken}
            />
            <Box
                px={2}
                py={5}
                bg="primary"
                color="off_white"
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <Flex justifyContent="space-between">
                    <Flex pb={3}>
                        <Link text="Privacy Policy" url="https://happymoney.okta.com/privacy" />
                    </Flex>
                    <Text fontWeight="medium" fontSize={1} mx={2}>Hive is a product brought to you by Happy Money, INC.</Text>
                </Flex>
                <Text fontWeight="medium" fontSize={0} mx={2} py={3}>© Copyright 2021. All rights reserved. Happy Money.</Text>
            </Box>
        </Box>)
}

export default Login
