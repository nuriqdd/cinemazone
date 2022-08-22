import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const Category = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ mb: 0.5 }}>
          Сортировка по жанрам
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "80vw",
            }}
          >
            <Box>
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </Box>
            <Box>
              <FormControlLabel
                value="Боевик"
                control={<Radio />}
                label="Боевик"
              />
            </Box>
            <Box>
              <FormControlLabel
                value="Драма"
                control={<Radio />}
                label="Драма"
              />
            </Box>
            <Box>
              <FormControlLabel
                value="Триллер"
                control={<Radio />}
                label="Триллер"
              />
            </Box>
            <Box>
              <FormControlLabel
                value="Фантастика"
                control={<Radio />}
                label="Фантастика"
              />
            </Box>
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Category;
