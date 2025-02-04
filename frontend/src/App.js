import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/pages/Homepage/Homepage";
import Loader from "./components/layout/Loader";
import Shop from "./components/pages/Shop/Shop";
import About from "./components/pages/About/About";
import ContactPage from "./components/pages/Contact/ContactPage";
import LogIn from "./components/pages/LogIn/LogIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Cart from "./components/layout/Cart/Cart";
import ProductPage from "./components/pages/Shop/ProductPage";
import CategoryPage from "./components/pages/Shop/CategoryPage";
import Profile from "./components/pages/Profile/Profile";

function App() {
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(false);
  }, []);

  return loadingState ? (
    <Loader />
  ) : (
    <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route
          path="/shop/:category/:productName"
          element={<ProductPage />}
        ></Route>
        <Route path="/shop/:category" element={<CategoryPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
