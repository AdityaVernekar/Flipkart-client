import { makeStyles } from "@mui/styles";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const useStyle = makeStyles({
  image: {
    height: 280,
    width: "100%",
  },
  carousel: {
    marginTop: 10,
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            background: "white",
            padding: "35px 5px",
            color: "#494949",
            borderRadius: 0,
            margin: "-26px 0px",
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((image) => (
          <img src={image} alt="Banner" className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
