import { Badge, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import Login from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
const useStyle = makeStyles({
  login: {
    background: ["#ffffff", "!important"],
    color: ["#2874f0", "!important"],
    textTransform: ["none", "!important"],
    padding: ["5px 60px ", "!important"],
    borderRadius: "2px !important",
  },
  wrapper: {
    position: "relative",
    margin: ["0 5% 0 460px", "!important"],
    display: "flex",
    bottom: "6px",
    alignItems: "center",
    "& > *": {
      marginRight: "50px !important",
      fontSize: "15px !important",
      textDecoration: "none !important",
    },
  },
  container: {
    display: "flex",
    color: "white",
  },
});
const HeaderButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const classes = useStyle();
  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <div>
      <Box className={classes.wrapper}>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button className={classes.login} onClick={() => openLoginDialog()}>
            Login
          </Button>
        )}

        <Typography>More</Typography>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
        </Link>
        <Login open={open} setOpen={setOpen} setAccount={setAccount} />
      </Box>
    </div>
  );
};

export default HeaderButtons;
