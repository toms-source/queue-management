import React from "react";
import {
  Box,
  Stack,
  Paper,
  Divider,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Theme from "../CustomTheme";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Appbar from "../Components/Landing/Appbar";
import Footer from "../Components/Landing/Footer";

import waves from "../Img/wave.svg";
const labelNameStyle = {
  fontWeight: "bold",
};
const TransactionAcad = () => {
  const navigate = useNavigate();
  const transaction = () => {
    navigate("/generateform-acad");
  };
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
                lg: "30px",
                md: "25px",
                sm: "20px",
                xs: "18px",
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

          <Box
            sx={{
              px: { lg: 50, md: 20, xs: 0 },
              pt: { lg: 5, md: 20, xs: 5 },
            }}
          >
            <Box
              component={Paper}
              mx={2}
              p={5}
              sx={{
                maxWidth: "1000px",
                backgroundImage: `url(${waves})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.1rem",
                  },
                  fontWeight: "bold",
                  marginTop: {
                    lg: "100px",
                    md: "80px",
                    sm: "60px",
                    xs: "40px",
                  },
                }}
              >
                Ticket Entry
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1rem",
                  },
                  textDecoration: "underline",
                }}
              >
                AP312
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1rem",
                  },
                  fontWeight: "bold",
                }}
              >
                Juan dela cruz
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1rem",
                  },
                }}
              >
                Processing of Application for Shifting, Processing of Request
                for Certification (Grades, Bonafide Student, General Weighted
                Average)
              </Typography>
            </Box>
            <Box m={2}>
              <ThemeProvider theme={Theme}>
                <Button
                  variant="contained"
                  color="pupMaroon"
                  onClick={transaction}
                  sx={{ width: "100%" }}
                >
                  Create Transaction Or View Queue Line
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        </ThemeProvider>
        <Divider>
          <Typography color="#939393" textAlign="center">
            © Group-7
          </Typography>
        </Divider>
        <Footer />
      </Box>
    </>
  );
};

export default TransactionAcad;
