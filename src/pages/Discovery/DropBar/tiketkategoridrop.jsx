import React from 'react'
import {
    Link,
    Text
  } from '@chakra-ui/react'

export default function TiketDropBar() {
  return (
    <div>
      <Link position='absolute' top='-3rem' left='1.50rem' marginTop='100px' fontSize='16' fontStyle='normal' lineHeight='normal'><Text>Semua</Text></Link><br/>
      <Link position='absolute' top='4.70rem' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Berbayar</Text></Link><br/>
      <Link position='absolute' top='6.20rem' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Gratis</Text></Link><br/>
    </div>
  )
}
