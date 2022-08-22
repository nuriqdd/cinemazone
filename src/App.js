import { Home } from "@mui/icons-material";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/products/Footer";
import AuthContextProvider from "./contexts/AuthContext";

import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <NavBar />

            <MainRoutes />
            <Footer />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
