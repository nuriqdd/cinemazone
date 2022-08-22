import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";
import Cart from "./components/Cart";
import ProductCard from "./components/products/ProductCard";
import ProductList from "./components/products/ProductList";
import ModalCart from "./components/ModalCart";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/home",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },

    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 9,
    },
    {
      link: "/cart1",
      element: <Cart />,
      id: 10,
    },
    {
      link: "/productList",
      element: <ProductList />,
      id: 11,
    },
    {
      link: "/productCard",
      element: <ProductCard />,
      id: 12,
    },

    {
      link: "/modalCart",
      element: <ModalCart />,
      id: 13,
    },
    {
      link: "/notFound",
      element: <NotFoundPage />,
      id: 14,
    },
    {
      link: "products/:id",
      element: <ProductsDetailsPage />,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
