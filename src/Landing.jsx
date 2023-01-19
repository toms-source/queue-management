import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import Appbar from "./Components/Landing/Appbar";
import Cards from "./Components/Landing/Cards";
import ImgCarousel from "./Components/Landing/Carousel";
import Header from "./Components/Landing/Header";
import Info from "./Components/Landing/Info";
import Faqs from "./Components/Landing/Faqs";
import Icon from "./Components/Landing/FaqIcon";
import TutorialVid from "./Components/Landing/TutorialVid";
import Footer from "./Components/Landing/Footer";
const Landing = () => {
  return (
    <>
      <Appbar />
      <ImgCarousel />
      <Header />
      <Cards /> <Info />
      <Grid container spacing={0}>
        {/* <Grid item lg={6}>
        
        </Grid> */}
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TutorialVid />
        </Grid>
        <Grid
          item
          lg={6}
          sx={{ display: { lg: "block", xs: "none", md: "none" } }}
        >
          <Icon />
        </Grid>
        <Grid item lg={6}>
          <Faqs />
        </Grid>
      </Grid>
      <Divider>
        <Typography color="#939393" textAlign="center">
          © Group-7
        </Typography>
      </Divider>
      <Footer />
    </>
  );
};

export default Landing;
