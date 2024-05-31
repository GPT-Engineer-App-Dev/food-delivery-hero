import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Heading, Text, Spinner, VStack, Box } from "@chakra-ui/react";

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching order details from an API
    const fetchOrder = async () => {
      try {
        // Make a request to the server to fetch order details
        const response = await fetch(`/api/orders/${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        } else {
          throw new Error("Order not found");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
        <Text mt={4}>Loading order details...</Text>
      </Container>
    );
  }

  if (!order) {
    return (
      <Container centerContent>
        <Heading size="md">Order not found</Heading>
      </Container>
    );
  }

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Order Details</Heading>
        <Box>
          <Text>Order ID: {order.id}</Text>
          <Text>Status: {order.status}</Text>
          <Text>Estimated Delivery Time: {order.estimatedDeliveryTime}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default OrderTracking;