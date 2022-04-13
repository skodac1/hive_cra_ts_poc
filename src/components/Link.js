import React from 'react'
import { Text } from 'rebass/styled-components'
import PropTypes from 'prop-types'

const Link = ({ text, url }) => {
  return (<Text
    as="a"
    href={url}
    mx={2}
    fontWeight="body"
    fontSize={2}
    sx={{
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'white',
    }}
  >
    {text}
  </Text>)
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default Link
