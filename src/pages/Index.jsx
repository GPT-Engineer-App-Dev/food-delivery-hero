import { useState } from "react";
import { Input, InputGroup, InputRightElement, Button, FormControl, Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";
import { FaSearch, FaMotorcycle } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Search Query:", searchQuery);
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <InputGroup size="md" width="100%">
          <FormControl>
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search for restaurants by name or cuisine type"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleSearchSubmit}>
                <FaSearch /> Search
              </Button>
            </InputRightElement>
          </FormControl>
        </InputGroup>
        <Heading as="h1" size="2xl">Delicious Delights</Heading>
        <Text fontSize="lg">Satisfy your cravings with a click!</Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaMotorcycle />}>
          Order Now
        </Button>
        <Box boxSize="sm">
          <Image src="/images/food-delivery.png" alt="Food Delivery" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;