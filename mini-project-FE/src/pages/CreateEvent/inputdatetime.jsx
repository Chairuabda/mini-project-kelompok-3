import { Input,
} from '@chakra-ui/react'

export const InputDateTime = () => {
  return (
    <div>
        <Input borderRadius='9px' boxShadow='sm' position='absolute' top='42rem' left='26rem' width='65rem'
        placeholder="Pilih tanggal dan waktu mulai..."
        size="md"
        type="datetime-local"
        />

        <div>
        <Input borderRadius='9px' boxShadow='sm' position='absolute' top='50.60rem' left='26rem' width='65rem'
        placeholder="Pilih tanggal dan waktu berakhir..."
        size="md"
        type="datetime-local"
        />
        </div>
    </div>
  )
}
