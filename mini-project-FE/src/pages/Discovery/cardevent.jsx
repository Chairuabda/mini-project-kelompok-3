import { LinkBox, 
        LinkOverlay,
        Box,
        Heading,
        Text
} from '@chakra-ui/react'

export const ThisCardEvent = () => {
  return (
    <div>
        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' position='absolute' left='30rem' top='8rem' height='20rem' width='20rem' borderRadius='9px' border='1px solid gray' boxShadow='xl'>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            21 Sep 2023 - 24 Sep 2023
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href='#'>
            Nama Event
            </LinkOverlay>
        </Heading>
        <Text>
            Rp 999.999
        </Text>
        </LinkBox>
    </div>
  )
}
