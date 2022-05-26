import { Route, Routes } from "react-router-dom";

import Account from "./pages/Account";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderConfirmation from "./pages/OrderConfirmation";
import OurStory from "./pages/OurStory";
import Privacy from "./pages/Privacy";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-detail" element={<BlogDetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/account/forgot-password" element={<ForgotPassword />} />
      <Route path="/shop/:id" element={<DetailProduct />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
