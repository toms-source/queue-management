import React from "react";
import FaqLogo from "../../Img/faqs.svg";
import { Box } from "@mui/material";
const FaqIcon = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={FaqLogo} alt="" height={400} width={400} />
      </Box>
    </>
  );
};

export default FaqIcon;
