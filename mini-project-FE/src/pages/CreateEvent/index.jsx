/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Input,
  Card,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Stack,
  Button,
} from "@chakra-ui/react";

import { Navbar } from "../Components/Navbar";

import { Footer } from "../Components/Footer";
import UploadImage from "./inputuploadgambar";
import { PaidTicket } from "./Components/paidticket";
import { FreeTicket } from "./Components/freeticket";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BeTicket } from "./Components/beticket";

export const CreateEvent = () => {
  const [category, setCategory] = useState();
  const [city, setCity] = useState();
  const user = useSelector((state) => state.AuthReducer.user);
  const createEvents = async (
    title,
    description,
    cityId,
    address,
    start_date,
    end_date,
    start_time,
    end_time,
    categoryId
  ) => {
    try {
      await axios.post("http://localhost:8080/event/createevent", {
        userId: user.id,
        title,
        description,
        cityId,
        address,
        start_date,
        end_date,
        start_time,
        end_time,
        isComplate: 0,
        categoryId,
      });
      alert("create event succsess");
    } catch (err) {
      console.log(err);
    }
  };

  const dataCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/category");

      setCategory(response.data.data);
      console.log(category);
    } catch (err) {
      console.log(err.message);
    }
  };

  const dataCity = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/location");

      setCity(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dataCategory();
    dataCity();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      cityId: "",
      address: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      categoryId: "",
    },
    onSubmit: (values) => {
      createEvents(
        values.title,
        values.description,
        values.cityId,
        values.address,
        values.start_date,
        values.end_date,
        values.start_time,
        values.end_time,
        values.categoryId
      );
    },
  });

  return (
    <Box minH="100vh" w="100vW">
      <Navbar />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <form onSubmit={formik.handleSubmit}>
          <Card  mt="150px" ml='-225px' w="200%" padding="50px" mb="100px" display='flex' justifyContent='center'>
            <Text
              textAlign="center"
              fontSize="48px"
              fontWeight="600"
              lineHeight="128.5%"
            >
              Buat Event
            </Text>
            <UploadImage />
            <Box mt="90px" display="flex " gap="10" flexDirection="column">
              <FormControl>
                <FormLabel>Nama Event</FormLabel>
                <Input
                  type="text"
                  placeholder="Tulis nama event..."
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Kategori</FormLabel>
                <Select
                  placeholder="Select category"
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                >
                  {category?.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.category}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>

              <Box display="flex" gap="10">
                <FormControl>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    placeholder="Select start date"
                    name="start_date"
                    value={formik.values.start_date}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    type="date"
                    placeholder="Select end date"
                    name="end_date"
                    value={formik.values.end_date}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Box>

              <Box display="flex" gap="10">
                <FormControl>
                  <FormLabel>Start Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="Select start time"
                    name="start_time"
                    value={formik.values.start_time}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>End Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="Select end time"
                    name="end_time"
                    value={formik.values.end_time}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Box>

              <FormControl>
                <FormLabel>Deskripsi</FormLabel>
                <Textarea
                  borderRadius="9px"
                  boxShadow="sm"
                  placeholder="Tulis deskripsi"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Select
                  placeholder="Select City"
                  name="cityId"
                  value={formik.values.cityId}
                  onChange={formik.handleChange}
                >
                  {city?.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.city}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Card>
        </form>
      </Box>
      <Box  mt="20px" mb="200px" display="flex" justifyContent="center">
        <Box w="45%" display="flex" justifyContent="space-between">
          <PaidTicket />
          <FreeTicket />
          
        </Box>
      </Box>
      <BeTicket/>
      <Box display='flex' justifyContent='center' alignItems='center' marginBottom='200px'>
      <Stack spacing={4} direction="row" align="center">
            <Button
              marginTop="5rem"
              marginLeft="-1rem"
              width="500px"
              bgColor="home.primary"
              color="white"
              size="lg"
              type="submit"
            >
              Buat Event
            </Button>
          </Stack>
      </Box>
      <Footer />
    </Box>
  );
};
