import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ModalCart = () => {
  return (
    <div>
      <div>
        {" "}
        <img
          src="https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg"
          alt=""
          style={{ marginLeft: "735px", width: "250px" }}
        />
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField disabled label="Name on card" defaultValue="" />
          <TextField
            id="outlined-password-input"
            label="Namber card"
            type="Number card"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="expiry date"
            defaultValue=""
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Security code" type="search" />
          <TextField
            id="outlined-helperText"
            label="ZIP/Postal code"
            defaultValue=""
            helperText=""
          />
          <Button style={{ border: "8px", backgroundColor: "gold" }}>
            Buy
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ModalCart;
