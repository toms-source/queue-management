import React from "react";
import { AppBar, ThemeProvider, Typography, Toolbar, Box } from "@mui/material";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
const Report = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="pupMaroon">
            <Toolbar>
              <Sidebar />
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Summary Report
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Report;
