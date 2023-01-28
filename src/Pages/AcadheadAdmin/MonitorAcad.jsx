import React from "react";
import { Grid } from "@mui/material";
import QueueLine from "../../Components/Acadhead/MonitorQueueLine";
import NowServing from "../../Components/Acadhead/MonitorNowServing";
import Skipped from "../../Components/Acadhead/MonitorSkipped";

import AnnouncementSlider from "../../Components/Acadhead/AnnouncementSlider";
const MonitorAcad = () => {
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

export default MonitorAcad;
