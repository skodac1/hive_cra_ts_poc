import React, { useEffect, useRef } from 'react'
// @ts-ignore
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'

import { Flex } from 'rebass/styled-components'
import {configureWidget} from "../../utils/auth"

const style = {
  height: 'calc(100% - 154px)',
  '#okta-sign-in.auth-container.main-container': {
    border: '2px solid #777777',
    borderRadius: '3px',
  },
  '#okta-sign-in': {
    margin: 'auto',
    '.o-form': {
      label: {
        fontWeight: '600',
        fontSize: '10px',
        color: '#5A5859',
      },
      '.input-fix': {
        input: {
          fontWeight: '400',
          color: '#5E5E5E !important',
        },
      },
    },
    '.link:link': {
      fontWeight: '600',
      fontSize: '10px',
      color: '#5A5859',
    },
    '.focused-input': {
      boxShadow: 'none',
    },
    '.link.help:focus': {
      boxShadow: 'none',
    },
  },
  '#okta-sign-in.auth-container': {
    '.button-primary': {
      background: '#065143',
      borderRadius: '5px',
      ':hover': {
        background: '#065143',
      },
    },
    h2: {
      marginBottom: '36px',
      fontWeight: '400',
      fontSize: '20px',
      color: '#242220',
    },
    '.okta-sign-in-header': {
      borderBottom: '2px solid #777777',
    },
    'input[type=submit]:focus': {
      boxShadow: 'none',
      border: 'none',
    },
    '.button.button-primary.link-button-disabled': {
      backgroundColor: '#C9C8C6',
      borderColor: '#C9C8C6',
    },
  },
}

const OktaSignInWidget = ({ onSuccess, onError, recoveryToken }: OktaSignInWidgetProps) => {
  const widgetRef = useRef()
  // @ts-ignore
  useEffect(() => {
    if (!widgetRef.current) { return false }

    const config = configureWidget()
    if (recoveryToken) config.recoveryToken = recoveryToken
    const widget = new OktaSignIn(config)

    widget.showSignInAndRedirect({
      el: widgetRef.current,
    }).then(onSuccess).catch(onError)

    return () => widget.remove()
  }, [onSuccess, onError, recoveryToken])

  return (
    <Flex sx={style} ref={widgetRef} />
  )
}

type OktaSignInWidgetProps = {
  onSuccess?: (tokens: any) => void,
  onError?: (error: any) => void,
  recoveryToken?: string | null
}

OktaSignInWidget.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
  recoveryToken: '',
}
export default OktaSignInWidget
