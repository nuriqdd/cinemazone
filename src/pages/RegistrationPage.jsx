import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function RegistrationPage() {
  const {
    handleSignUp,
    emailError,
    passwordError,
    email,
    password,
    setEmail,
    setPassword,
  } = React.useContext(authContext);
  const navigate = useNavigate();

  function handleRegister(email, password) {
    handleSignUp(email, password);
    navigate("/home");
  }

  return (
    <Grid container component="main" sx={{ height: "90vh" }}>
      <Box
        sx={{
          my: 8,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          // onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          {emailError ? <Typography>{emailError}</Typography> : null}
          {passwordError ? <Typography>{passwordError}</Typography> : null}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleRegister(email, password)}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/login">
                {"Already have an account? Sign In"}
              </RouterLink>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}
