import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
const TutorialVid = () => {
  return (
    <>
      <Box
        mt={3}
        mx={3}
        p={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingTop: "56.25%",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hsGOT_0L16U"
          width="100%"
          height="99%"
          controls={true}
          pip="true"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </Box>
    </>
  );
};

export default TutorialVid;
