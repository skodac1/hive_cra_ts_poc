import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js';
// @ts-ignore
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import Home from './pages/Home'
import Remittance from "./pages/Remittance";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import theme from "./theme";
import {initializeAuth} from "./utils/auth";

const App = () => {
    let navigate = useNavigate();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });
    };
    const auth = initializeAuth()
  return (
      <ThemeProvider theme={theme}>
          <Layout>
              <Security oktaAuth={auth} restoreOriginalUri={restoreOriginalUri}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/remittance" element={<Remittance />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path='/login/callback' element={LoginCallback} />
                  </Routes>
              </Security>
          </Layout>
      </ThemeProvider>


  )
}

export default App;
