
import {
    Input,
  } from '@chakra-ui/react'

export default function WaktuDropBar() {
  return (
    <div>   
      <Input marginLeft='5' marginTop='3' width='231px' height='40px' flexShrink='0'
        placeholder="Mulai"
        size="md"
        type="datetime-local"
        />

        <Input marginLeft='5' marginTop='3' width='231px' height='40px' flexShrink='0'
        placeholder="Berakhir"
        size="md"
        type="datetime-local"
        />
    </div>
  )
}
