import React from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  TextField,
} from "@mui/material";
import img from "../../Img/seal.png";
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
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
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

        <Box p={5}>
          <TextField
            id="outlined-multiline-flexible"
            label="Announcement"
            multiline
            maxRows={4}
            fullWidth
            height="100px"
            color="pupMaroon"
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Announcement;
