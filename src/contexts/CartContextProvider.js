import React, { createContext, useContext, useReducer } from "react";
import { CART, LIKED } from "../helpers/consts";

import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
  getCountProductsInLiked,
} from "../helpers/functions";

export const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
  liked: JSON.parse(localStorage.getItem("liked")),
  likedLength: getCountProductsInLiked(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    case LIKED.GET_LIKED:
      return { ...state, liked: action.payload };
    case LIKED.GET_LIKED_LENGTH:
      return { ...state, likedLength: action.payload };
    default:
      return state;
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const getLiked = () => {
    let liked = JSON.parse(localStorage.getItem("liked"));

    if (!liked) {
      localStorage.setItem(
        "liked",
        JSON.stringify({ products: [], totalPrice: 0 })
      );

      liked = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: LIKED.GET_LIKED,
      payload: liked,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    // если не найдется элемент в localStorage, то он добавит элемент в localStorage,а если найдет, то удалит
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addProductToLiked = (product) => {
    let liked = JSON.parse(localStorage.getItem("liked"));

    if (!liked) {
      liked = {
        products: [],
      };
    }

    let newProduct = {
      item: product,
    };

    let productToFind = liked.products.filter(
      (elem) => elem.item.id === product.id
    );
    // если не найдется элемент в localStorage, то он добавит элемент в localStorage,а если найдет, то удалит
    if (productToFind.length === 0) {
      liked.products.push(newProduct);
    } else {
      liked.products = liked.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    liked.totalPrice = calcTotalPrice(liked.products);

    localStorage.setItem("liked", JSON.stringify(liked));

    dispatch({
      type: LIKED.GET_LIKED,
      payload: liked,
    });
  };

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  function deleteProductInLiked(id) {
    let liked = JSON.parse(localStorage.getItem("liked"));

    liked.products = liked.products.filter((elem) => elem.item.id !== id);
    localStorage.setItem("liked", JSON.stringify(liked));
    getLiked();
    dispatch({
      type: LIKED.GET_LIKED_LENGTH,
      payload: liked,
    });
  }

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  const values = {
    getCart,
    getLiked,
    addProductToCart,
    addProductToLiked,
    changeProductCount,
    checkProductInCart,
    deleteProductInCart,
    deleteProductInLiked,
    cart: state.cart,
    liked: state.liked,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
