import React from 'react'
import { Box } from 'rebass/styled-components'
import ClipLoader from 'react-spinners/ClipLoader'

const Loader = ({ size }: LoaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& span': {
          border: '3px solid',
          borderColor: 'primary',
          borderBottomColor: 'transparent',
        },
      }}
    ><ClipLoader size={size} /></Box>
  )
}

Loader.defaultProps = {
    size: 30,
}

type LoaderProps = { size?: number };

export default Loader
