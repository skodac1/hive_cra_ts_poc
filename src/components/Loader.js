import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'
import ClipLoader from 'react-spinners/ClipLoader'

const Loader = ({ size }) => {
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

Loader.propTypes = {
  size: PropTypes.number,
}

Loader.defaultProps = {
  size: 30,
}

export default Loader
