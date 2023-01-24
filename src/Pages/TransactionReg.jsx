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

const labelNameStyle = {
  fontWeight: "bold",
};
const TransactionAcad = () => {
  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
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

            <Box component={Paper} my={10} p={5} elevation={5}>
              <Stack spacing={3}>
                <Stack>
                  <Stack spacing={2} direction="row">
                    <Stack>
                      <Typography sx={labelNameStyle}>Ticket</Typography>
                    </Stack>
                    <Stack>
                      <Typography>RO8854</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack spacing={2} direction="row">
                    <Stack>
                      <Typography sx={labelNameStyle}>Name</Typography>
                    </Stack>
                    <Stack>
                      <Typography>Juan Dela Cruz</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack spacing={2} direction="row">
                    <Stack>
                      <Typography sx={labelNameStyle}>Transaction</Typography>
                    </Stack>
                    <Stack>
                      <Typography>
                        ISSUANCE OF CERTIFICATE OF REGISTRATION, ISSUANCE OF
                        TRANSCRIPT OF RECORD FOR UNDERGRADUATE STUDENT
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Stack>
                    <Button
                      variant="outlined"
                      sx={{ marginTop: "15px" }}
                      onClick={landing}
                    >
                      Cancel
                    </Button>
                  </Stack>
                  <Stack>
                    <Button variant="contained" sx={{ marginTop: "15px" }}>
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
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
