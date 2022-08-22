import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <Box
      sx={{
        display: "flex",
        mt: 5,
        flexDirection: "column",
        backgroundImage:
          "url(https://www.tirazisdm.ir/wp-content/files/site/edd/2016/04/VO-cinema-in-Barcelona.jpg)",
        backgroundSize: "cover",
      }}
    >
      <h1>Фильмы</h1>
      <Box
        className="List__movie"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </Box>

      <Pagination
        variant="outlined"
        shape="rounded"
        sx={{ m: "0 auto" }}
        count={count}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default ProductList;
