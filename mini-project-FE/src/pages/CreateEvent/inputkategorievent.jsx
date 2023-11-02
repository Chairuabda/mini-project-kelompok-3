import {
  FormControl,
  Select,
} from '@chakra-ui/react'

export const InputKategoriEvent = () => {
  return (
    <div>
        <FormControl borderRadius='9px' boxShadow='sm' position='absolute' top='33rem' left='26rem' width='65rem'>
        <Select placeholder='Pilih Kategori...'>
          <option>Konser</option>
          <option>Festival</option>
          <option>Pertandingan</option>
          <option>Pameran</option>
        </Select>
      </FormControl>
    </div>
  )
}
