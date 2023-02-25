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

  var showdate = new Date();
  var dispDate =
    showdate.getMonth() +
    1 +
    "/" +
    showdate.getDate() +
    "/" +
    showdate.getFullYear();
  var dt = showdate.toDateString();

  setInterval(updateTime, 1000);
  return (
    <>
      <Box
        sx={{
          border: "2px solid burtlywood",
          width: "20vw",
          margin: "20px",
          borderRadius: "15px",
          padding: "10px 180px",
          backgroundColor: "cornsilk",
          boxShadow: "rgba(0, 0, 0, 0.35) 0 5px 15px",
        }}
      >
        <Typography
          sx={{ fontSize: "1.8em", color: "#880000", textAlign: "center" }}
        >
          {dispDate} {currentTime}
        </Typography>
      </Box>
    </>
  );
};

export default Time;
