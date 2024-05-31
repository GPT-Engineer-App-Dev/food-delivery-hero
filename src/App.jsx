import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OrderTracking from "./pages/OrderTracking.jsx"; // Import the new OrderTracking page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/order-tracking/:orderId" element={<OrderTracking />} /> {/* Add route for OrderTracking */}
      </Routes>
    </Router>
  );
}

export default App;
