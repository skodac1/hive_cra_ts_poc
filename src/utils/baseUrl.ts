export const getFEUrl = (env: string) => `https://hive-participation-fe-${ env }.happymoney.com`
export const getBEUrl = (env: string) => `https://mesh-gateway.${ env }.aws-ue1.happymoney.com/hive/participation`

export const getEnv = () => {
  if (typeof window !== 'undefined') {
    switch (true) {
      case window.location.origin === getFEUrl('dev'):
        return 'dev'
      case window.location.origin === getFEUrl('qa'):
        return 'qa'
      case window.location.origin === getFEUrl('uat'):
        return 'uat'
      case window.location.origin === getFEUrl('stage'):
        return 'stage'
      case window.location.origin === getFEUrl('prod'):
        return 'prod'
      default:
        return 'local'
    }
  }

  return 'dev'
}

export const getLoginUri = () => {
  const env = getEnv()
  const baseUrl = (env === 'local') ? 'http://localhost:3000' : `https://hive-participation-fe-${ env }.happymoney.com`
  return `${ baseUrl }/login`
}

const appendHtml = (uri: string) => {
  if (getEnv() !== 'local') uri = `${ uri }.html`
  return uri
}

export const getAuthRedirectUri = () => {
  return appendHtml(`${ getLoginUri() }/callback`)
}

export const getAuthPostLogoutRedirectUri = () => {
  return appendHtml(getLoginUri())
}

export const getAuthIssuer = () => {
  const env = getEnv()
  // TODO Change to the actual PROD url
  return (env === 'prod') ?
    'https://hmplatform-dev.oktapreview.com/oauth2/aus224gp7qbNsyvMC1d7' :
    'https://hmplatform-dev.oktapreview.com/oauth2/aus224gp7qbNsyvMC1d7'
}

export function getBaseUrl() {
  const env = getEnv()
  return (env === 'local') ? getBEUrl('dev') : getBEUrl(env)
}
