import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Heading, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

const Flyer = () => {


  return (
    <div>
      <Card className='cardCard'>
        <CardHeader>
              <Heading>CREATE YOUR EVENT</Heading>
        </CardHeader>
        <CardBody className='cardBody'>
              <FormControl isRequired>
                  <FormLabel>Event Name</FormLabel>
                  <Input placeholder='Enter here' /> 

                  <div className='categoriesInti'>
                  <FormLabel>Format</FormLabel>
                  <Select className='selectTopic' placeholder='Select categories'>
                    <option>Festival</option>
                    <option>Konser</option>
                    <option>Pertandingan</option>
                    <option>Pertunjukan</option>
                    <option>Turnamen</option>
                    <option>Atraksi</option>
                    <option>Comedy</option>
                    <option>Lainnya</option>
                  </Select>

                  <Select className='selectTopic2' placeholder='Select Topic'>
                    <option>Bisnis</option>
                    <option>Karir</option>
                    <option>Keagamaan</option>
                    <option>Kesehatan</option>
                    <option>Marketing</option>
                    <option>Sains</option>
                    <option>Otomotif</option>
                    <option>Game E-sports</option>
                    <option>Stand-Up Comedy</option>
                    <option>Lainnya</option>
                  </Select>
                  </div>

                  <div className='dateTime'>
                  <FormLabel>Date and Time</FormLabel>
                  <h2 className='teksDateTime'>Starting</h2>
                  <Input className='dateAndTimeInti'
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      />
                      <h2 className='teksDateTime2'>Ended</h2>
                      <Input className='dateAndTimeInti2'
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      />
                  </div>

                  <div className='thisCountry'>
                  <FormLabel>Location</FormLabel>
                  <Select className='Country' placeholder='Select Country'>
                    <option>Indonesian</option>
                    <option>Japan</option>
                    <option>Belanda</option>
                    <option>Nigeria</option>
                    <option>Arab</option>
                    <option>Brazil</option>
                    <option>Malaysia</option>
                    <option>America</option>
                    <option>Argentina</option>
                    <option>Portugal</option>
                  </Select>
                  <Input className='Address' placeholder='Address' />
                  <Input className='City' placeholder='City' />
                  </div>

              </FormControl>
        </CardBody>
        <CardFooter>
          
        </CardFooter>
</Card>
    <useDisclosure/>
    </div>
);
};

export default Flyer;
