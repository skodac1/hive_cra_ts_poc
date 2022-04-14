import React, {useCallback} from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Loader from "../Loader";
import Layout from "../Layout";
import {useNavigate} from "react-router-dom";

const SecureRoute: React.FC = (props ) => {
    const navigate = useNavigate();
    const { oktaAuth, authState } = useOktaAuth();

    const onAuthRequired = useCallback(() => {
        navigate('/login')
    }, [navigate])

    if (!authState || !authState?.isAuthenticated) {
        oktaAuth.setOriginalUri('/orders');
        onAuthRequired();

        return (<Loader />);
    }

    return <Layout>{props.children}</Layout>;
}

export default SecureRoute