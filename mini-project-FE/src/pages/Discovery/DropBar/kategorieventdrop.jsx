
import {
    Link,
    Text
  } from '@chakra-ui/react'

export default function KategoriDropBar() {
  return (
    <div>   
      <Link position='absolute' top='-3rem' left='1.50rem' marginTop='100px' fontSize='16' fontStyle='normal' lineHeight='normal'><Text>Live Musik</Text></Link><br/>
      <Link position='absolute' top='4.70rem' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Pendidikan</Text></Link><br/>
      <Link position='absolute' top='6.20rem' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Olahraga</Text></Link><br/>
      <Link position='absolute' top='9.20rem' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Trater dan Drama</Text></Link><br/>
      <Link position='absolute' top='123px' left='1.50rem' fontStyle='normal' lineHeight='normal'><Text>Atraksi</Text></Link><br/>
    </div>
  )
}
