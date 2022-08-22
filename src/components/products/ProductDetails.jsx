import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <Paper sx={{ m: 5 }} elevation={24}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src={productDetails.picture}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "70vh" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{productDetails.name}</Typography>
          <Typography variant="subtitle1">{productDetails.type}</Typography>
          <Typography variant="caption">{productDetails.price}</Typography>
          <Typography sx={{ color: "black" }}>
            {productDetails.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
