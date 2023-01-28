import React from "react";
import { Box, Typography, Paper } from "@mui/material";
const MonitorNowServing = () => {
  return (
    <>
      <Box
        component={Paper}
        sx={{
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
          AP312
        </Typography>
        <Typography fontSize="2.5rem" fontWeight="bold" textAlign="center">
          AP845
        </Typography>
      </Box>
    </>
  );
};

export default MonitorNowServing;
