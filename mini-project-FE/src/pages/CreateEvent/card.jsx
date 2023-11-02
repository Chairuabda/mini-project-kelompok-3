import { Grid,
        GridItem,
        Box,
} from '@chakra-ui/react'

export const ThisCard = () => {
  return (
    <Box height='1800px'>
       <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    <GridItem marginLeft='24rem' 
    marginTop='16rem' 
    flexShrink='0' 
    w='1100px' 
    h='1300px' 
    bg='white' 
    borderRadius='9px'
    border='1px solid gray'
    boxShadow='xl'
    />
    </Grid>
    </Box>
  )
}
