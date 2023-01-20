import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ThemeProvider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Theme from "../../CustomTheme";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const acadHeadAnnouncement = () => {
    navigate("/acad-head-announcement");
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setShow(true)}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
      <ThemeProvider theme={Theme}>
        <Drawer
          anchor="left"
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <Box
            p={2}
            width="350px"
            textAlign="center"
            role="presentation"
            color="pupMaroon"
          >
            <Typography variant="h6" component="div">
              controll me
            </Typography>

            <Button onClick={acadHeadAnnouncement}>click me</Button>
          </Box>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Sidebar;
