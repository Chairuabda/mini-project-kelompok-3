import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="#2b6cb0" color="white">
      <HStack spacing={4} padding={4}>
        <div className='teksNavbar'>
            <h1>LOGO</h1>
        </div>
      </HStack>
    </Box>
  );
};

export default Navbar;