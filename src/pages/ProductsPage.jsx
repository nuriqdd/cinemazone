import { Box } from "@mui/material";
import React from "react";
import Category from "../components/Category";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div></div>
      <Category />
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
