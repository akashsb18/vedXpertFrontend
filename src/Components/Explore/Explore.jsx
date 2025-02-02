import { useState } from "react";
import "./Explore.scss";
import {
  FormControl,
  Box,
  IconButton,
  InputBase,
  Paper,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  return (
    <div className="explore">
      <Box
        pt={4}
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Box sx={{ maxWidth: 200, margin: "0 auto" }}>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="demo-simple-select-label">Search By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data}
              label="Select"
              onChange={handleChange}
            >
              <MenuItem value={10}>Medicine</MenuItem>
              <MenuItem value={20}>Symptoms</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingY={2}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 10px",
              display: "flex",
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
            }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ flex: 1, fontSize: "1rem" }}
              placeholder="Search "
              inputProps={{ "aria-label": "search user" }}
              value={inputValue}
              onChange={handleInputChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon fontSize="large" />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
