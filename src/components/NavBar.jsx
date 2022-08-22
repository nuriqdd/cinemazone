import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useProducts } from "../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../contexts/CartContextProvider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import AuthContextProvider from "../contexts/AuthContext";
import { slide as Menu } from "react-burger-menu";
function showSettings(event) {
  event.preventDefault();
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const [state, setState] = React.useState();
  const { cartLength } = React.useContext(cartContext);
  const { user } = useContext(authContext);
  console.log(user.email);
  const [searchParams, setSearchParams] = useSearchParams();

  const { getProducts, fetchByParams } = useProducts();
  const navigate = useNavigate();
  React.useEffect(() => {
    getProducts();
  }, [state]);
  React.useEffect(() => {
    getProducts();
  }, []);
  React.useEffect(() => {
    setSearchParams({
      q: state,
    });
  }, [state]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar"
        position="static"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/2063940.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Toolbar>
          <div className="burger">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => showSettings()}
            >
              <MenuIcon />
            </IconButton>
            <Menu className="burger__menu">
              <Link to="/">
                <a id="home" className="menu-item">
                  Home
                </a>
              </Link>
              <Link to="/admin">
                <a id="home" className="menu-item">
                  Admin
                </a>
              </Link>
              <Link to="/products">
                <a id="home" className="menu-item">
                  Products
                </a>
              </Link>
              <Link to="/cart">
                <a id="home" className="menu-item">
                  Cart
                </a>
              </Link>
            </Menu>
          </div>
          <Typography
            variant="h5"
            noWrap
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "yellow",
            }}
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
          >
            <Button
              className="Navbar__btn"
              onClick={() => navigate("/home")}
              style={{
                color: "gold",
                fontFamily: "Monserrat",
                fontSize: "20px",
                backgroundColor: "",
              }}
            >
              КиноЗона{" "}
            </Button>
            <span
              className="text1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                columnGap: "20px",
              }}
            >
              <>
                {/* <Button onClick={() => navigate("/home")}>Домой</Button> */}
              </>
              {user.email === "admin@gmail.com" ? (
                <Button
                  className="Navbar__btn"
                  onClick={() => navigate("/admin")}
                  style={{ color: "gold" }}
                >
                  admin
                </Button>
              ) : null}

              <Button
                className="Navbar__btn"
                onClick={() => navigate("/products")}
                style={{ color: "gold" }}
              >
                Список фильмов
              </Button>

              <Button
                className="cart Navbar__btn"
                onClick={() => navigate("/cart")}
                style={{ color: "gold" }}
              >
                Избранное
              </Button>
              <Button
                className="register Navbar__btn"
                onClick={() => navigate("/register")}
                style={{ color: "gold" }}
              >
                Регистрация
              </Button>
              {user.email ? (
                <></>
              ) : (
                <Button
                  className="Navbar__btn"
                  onClick={() => navigate("/login")}
                  style={{ color: "gold" }}
                >
                  Войти
                </Button>
              )}

              <Link to="/cart1">
                <Badge badgeContent={cartLength} color="warning">
                  <ShoppingCartIcon style={{ color: "gold" }} />
                </Badge>
              </Link>
            </span>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // value={{ value }}
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </MenuItem>
      </AppBar>
    </Box>
  );
}
