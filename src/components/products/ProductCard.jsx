import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { authContext } from "../../contexts/AuthContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { user } = React.useContext(authContext);
  // const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToCart, addProductToLiked } = useCart();

  const navigate = useNavigate();

  return (
    <Card className="Card" sx={{ width: 500, m: 3, borderRadius: "15px" }}>
      <CardMedia
        component="img"
        height="300"
        image={item.picture}
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            addProductToLiked(item);
          }}
        >
          В избранное{" "}
        </Button>
        {user.email === "admin@gmail.com" ? (
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            DELETE
          </Button>
        ) : null}
        {user.email === "admin@gmail.com" ? (
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            EDIT
          </Button>
        ) : null}
        <Button
          size="small"
          onClick={() => {
            addProductToCart(item);
            // navigate("/cart1");
          }}
        >
          Cart
        </Button>

        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          MORE
        </Button>
      </CardActions>
    </Card>
  );
}
