import { React, useState } from "react";
import { Box, Typography } from "@mui/material";
// import "./time.css";
const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <Box
        sx={{
          border: "2px solid burtlywood",
          width: "250px",
          margin: "20px",
          borderRadius: "15px",
          padding: "10px 230px",
          backgroundColor: "cornsilk",
          boxShadow: "rgba(0, 0, 0, 0.35) 0 5px 15px",
        }}
      >
        <Typography
          sx={{ fontSize: "2.5rem", color: "#880000", textAlign: "center" }}
        >
          {currentTime}
        </Typography>
      </Box>
    </>
  );
};

export default Time;
