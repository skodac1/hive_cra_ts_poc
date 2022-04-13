import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import Loader from "../Loader";
import Layout from "../Layout";

const SecureRoute = ({ children }) => {
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState || !authState?.isAuthenticated) {
        const originalUri = toRelativeUrl(window.location.href, window.location.origin);
        oktaAuth.setOriginalUri(originalUri);
        oktaAuth.signInWithRedirect();

        return (<Loader />);
    }

    return <Layout>{children}</Layout>;
}

export default SecureRoute