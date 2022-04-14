import { OktaAuth } from '@okta/okta-auth-js'
import { getAuthIssuer, getAuthPostLogoutRedirectUri, getAuthRedirectUri, getEnv } from './baseUrl'

const storageProvider = {
  getItem(key: string) {
    return (typeof window !== 'undefined') ? window.localStorage.getItem(key) : ''
  },
  setItem(key: string, val: string) {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, val)
  },
  removeItem(key: string) {
    if (typeof window !== 'undefined') window.localStorage.removeItem(key)
  },
}

const clientId = '0oa27p1gxl714UvUi1d7'

export const initializeAuth = () => {
  return new OktaAuth({
    clientId,
    issuer: getAuthIssuer(),
    redirectUri: getAuthRedirectUri(),
    postLogoutRedirectUri: getAuthPostLogoutRedirectUri(),
    scopes: ['openid', 'profile', 'email'],
    transformAuthState: async (oktaAuth, authState) => {
      if (!authState.isAuthenticated) {
        return authState
      }
      authState.user = await oktaAuth.token.getUserInfo()
      return authState
    },
    storageManager: {
      token: {
        storageProvider,
        storageType: 'localStorage',
      },
      transaction: {
        storageType: 'localStorage',
      },
    },
    tokenManager: {
      storageKey: `okta-token-storage-${ getEnv() }`,
    },
    pkce: true,
  })
}

export const configureWidget = () => ({
  logo: '/happy_hive_logo_mark.svg',
  issuer: getAuthIssuer(),
  clientId,
  redirectUri: getAuthRedirectUri(),
  i18n: {
    en: {
      'primaryauth.title': "Let's get you logged in",
    },
  },
  recoveryToken: ''
})
