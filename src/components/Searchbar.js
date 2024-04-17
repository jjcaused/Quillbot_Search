import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Muitoggle } from "./Muitoggle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const Searchbar = () => {
  const [search, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // e.preventDefault();
    navigate(`/search?${search}`);
  };

  return (
    <div>
      <form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Quill Search"
            placeholder="Type to search"
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: <Muitoggle />,
            }}
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
          />{" "}
          <br />
          <Button
            className="muibutton"
            variant="contained"
            onClick={handleSearch}
          >
            {" "}
            Search the Web{" "}
          </Button>
        </Box>
      </form>
    </div>
  );
};
