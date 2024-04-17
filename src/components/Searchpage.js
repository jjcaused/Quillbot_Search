import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderCenter,
} from "./searchpage.Styled";
import { Muitoggle } from "./Muitoggle";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { SearchResults } from "./SearchResults";
import { useLocation } from "react-router-dom";
import { useSearch_ACA } from "./hooks/useSearch_ACA";

export const Searchpage = () => {
  const { search } = useLocation();
  const searchTerm = search?.split("?")[1];

  const { data } = useSearch_ACA(searchTerm);

  return (
    <div>
      <StyledHeader>
        <StyledHeaderCenter>
          <StyledHeaderLeft>
            <button style={{ backgroundColor: "white", border: "none" }}>
              <ArrowBackIosIcon />
            </button>
          </StyledHeaderLeft>
          <TextField
            id="time"
            style={{ width: 550 }}
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: (
                <button style={{ backgroundColor: "white", border: "none" }}>
                  <ArrowCircleRightIcon />
                </button>
              ),
            }}
          />
          <StyledHeaderRight>
            <Muitoggle />
          </StyledHeaderRight>
        </StyledHeaderCenter>
        {true && <SearchResults />}
      </StyledHeader>
    </div>
  );
};
