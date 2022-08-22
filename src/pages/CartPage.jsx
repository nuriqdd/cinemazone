import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContextProvider";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getLiked, changeProductCount, deleteProductInLiked, liked } =
    useCart();

  React.useEffect(() => {
    getLiked();
  }, []);

  // console.log(liked);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getLiked();
  }

  const trHeadStyle = {
    backgroundColor: "#666699 !important",
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {/* <TableHead>
          <TableRow>
            <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Type
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Count
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Sub Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              {" "}
              ---{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {liked?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="50%" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              {
                <StyledTableCell align="right">
                  {row.item.price}
                </StyledTableCell>
              }
              {
                <StyledTableCell align="right">
                  <TextField
                    type="number"
                    value={row.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                </StyledTableCell>
              }

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => deleteProductInLiked(row.item.id)}
                  startIcon={<DeleteIcon sx={{ color: "#666699" }} />}
                ></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
