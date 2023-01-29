import React from "react";
import { Grid } from "@mui/material";
import NowServing from "../../Components/Registrar/MonitorNowServing";
import QueueLine from "../../Components/Registrar/MonitorQueueLine";
import Skipped from "../../Components/Registrar/MonitorSkipped";
import AnnouncementSlider from "../../Components/Registrar/AnnouncementSlider";

const MonitorReg = () => {
  return (
    <>
      <Grid container lg={6} spacing={2} p={5} pb={1}>
        <Grid item lg={12}>
          <NowServing />
        </Grid>
        <Grid item lg={6}>
          <QueueLine />
        </Grid>
        <Grid item lg={6}>
          <Skipped />
        </Grid>
      </Grid>
      <AnnouncementSlider />
    </>
  );
};

export default MonitorReg;
