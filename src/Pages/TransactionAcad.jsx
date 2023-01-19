import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Theme from "../CustomTheme";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Appbar from "../Components/Landing/Appbar";

const TransactionAcad = () => {
  return (
    <>
      <Box>
        <Appbar />
        <ThemeProvider theme={Theme}>
          <Box
            p={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              mb={3}
              fontSize={{
                lg: 30,
                md: 25,
              }}
            >
              Search your transaction using Email
            </Typography>
            <TextField
              type="email"
              id="Username"
              label="Email"
              required
              color="pupMaroon"
              placeholder="Ex. JuanDelacruz@yahoo.com..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchOutlinedIcon onClick />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: {
                  xs: "100%",
                  md: "100%",
                  lg: "80%",
                },
                bgcolor: "white",
              }}
            />
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default TransactionAcad;
