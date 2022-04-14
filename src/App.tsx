import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js';
// @ts-ignore
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
import Remittance from "./pages/Remittance";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import theme from "./theme";
import {initializeAuth} from "./utils/auth";
import SecureRoute from "./components/okta/SecureRoute";
import Login from "./pages/Login";
import Loader from "./components/Loader";

const App = () => {
    const navigate = useNavigate();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });
    };
    const auth = initializeAuth()
  return (
      <ThemeProvider theme={theme}>
          <Security oktaAuth={auth} restoreOriginalUri={restoreOriginalUri}>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<SecureRoute><Home /></SecureRoute>} />
                  <Route path="/orders" element={<SecureRoute><Orders /></SecureRoute>} />
                  <Route path="/remittance" element={<SecureRoute><Remittance /></SecureRoute>} />
                  <Route path="/settings" element={<SecureRoute><Settings /></SecureRoute>} />
                  <Route path='/login/callback' element={<LoginCallback loadingElement={<Loader />}/>} />
              </Routes>

          </Security>
      </ThemeProvider>


  )
}

export default App;
