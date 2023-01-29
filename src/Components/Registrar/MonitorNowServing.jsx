import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const MonitorNowServing = () => {
  return (
    <div>
      {" "}
      <Box
        component={Paper}
        sx={{
          height: "180px",
          padding: "15px 40px",
          backgroundColor: "#880000",
          color: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <Typography fontSize="2.5rem" fontWeight="bolder">
          Now Serving:
        </Typography>
        <Typography fontSize="2.5rem" fontWeight="bold" textAlign="center">
          RO312
        </Typography>
      </Box>
    </div>
  );
};

export default MonitorNowServing;
