import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Banner from "./Banner";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import Slide from "./Slide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  ad: {
    background: "white",
    padding: 5,
    width: "17%",
    margin: "10px 0 0 5px",
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deal of the Day" />
          </Box>
          <Box className={classes.ad}>
            <img src={adURL} alt="advertisement" style={{ width: "230px" }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="TOP SELECTIONS" />
        <Slide timer={false} title="Sugegsted EXclusively For You" />
        <Slide title="Limited Discount For You.... Hurry NOW!" timer={true} />
        <Slide title="Top 10 " timer={false} />
      </Box>
    </div>
  );
};

export default Home;
