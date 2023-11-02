
import {
    Input,
    Link
  } from '@chakra-ui/react'

export default function LokasiDropBar() {
  return (
    <div>   
      <Input marginLeft='5' marginTop='3' width='231px' height='40px' flexShrink='0' placeholder='Cari Lokasi' />
      <Link marginLeft='7' marginTop='6' fontSize='16px' fontStyle='normal' lineHeight='normal'>Semua Kota</Link><br/>
      <Link marginLeft='7' marginTop='6' fontSize='16px' fontStyle='normal' lineHeight='normal'>DKI jakarta</Link><br/>
      <Link marginLeft='7' marginTop='6' fontSize='16px' fontStyle='normal' lineHeight='normal'>D.I Yogyakarta</Link><br/>
      <Link marginLeft='7' marginTop='6'fontSize='16px' fontStyle='normal' lineHeight='normal'>Bali</Link><br/>

    </div>
  )
}
