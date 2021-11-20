import React from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "#fff",
  color: "black",
  paddingLeft: 15,
  position: "relative",
  bottom: 5,
  marginLeft: 10,

  width: "200%",
  display: "flex",
  justifyContent: "space-between",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: 6,
  marginTop: 3,
  height: "100%",
  color: "#2874f0",
  display: "flex",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "unset",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
  width: "100%",
}));
const SearchBar = () => {
  return (
    <div>
      <Search>
        <StyledInputBase
          placeholder="Search for products,brands and more"
          inputProps={({ "aria-label": "search" }, { style: { fontSize: "unset" } })}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </div>
  );
};

export default SearchBar;
