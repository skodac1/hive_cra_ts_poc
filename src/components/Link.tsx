import React from 'react'
import { Text } from 'rebass/styled-components'

type LinkProps = {
    text: string,
    url: string
}

const Link = ({ text, url }: LinkProps) => {
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

export default Link
