import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ padding: "5px 30px" }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Welcome to PUPSMB-QMS
      </Typography>

      <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
        Academic head office & Registrar
      </Typography>
    </Box>
  );
};

export default Header;
