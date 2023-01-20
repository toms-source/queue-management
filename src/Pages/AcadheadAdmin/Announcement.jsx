import React from "react";
import { AppBar, ThemeProvider, Typography, Toolbar, Box } from "@mui/material";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";

const Announcement = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="pupMaroon">
            <Toolbar>
              <Sidebar />

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Announcement
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Announcement;
