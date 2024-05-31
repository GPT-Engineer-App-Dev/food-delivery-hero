import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaMotorcycle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
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