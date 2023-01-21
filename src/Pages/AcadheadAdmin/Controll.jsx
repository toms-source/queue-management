import React from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";
// const mainTableLayout = {
//   pa
// }
const Controll = () => {
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
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Control Table */}
        <Box p={5}>
          <Grid container spacing={5}>
            {/* Now Serving */}
            <Grid item lg={12}>
              <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                Now Serving
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableRow sx={{ bgcolor: "#880000" }}>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Ticket
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Email
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        User Type
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Transaction
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ minWidth: "200px" }}>
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Student Number
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Year & Section
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          minWidth: "200px",
                          color: "white",
                        }}
                      >
                        Contact Number
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Address
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* Queue Line */}
            <Grid item lg={6}>
              <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                Queue Line
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#880000" }}>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Ticket
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Name
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Email
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          User Type
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Transaction
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ minWidth: "200px" }}>
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Student Number
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Year & Section
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            minWidth: "200px",
                            color: "white",
                          }}
                        >
                          Contact Number
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Address
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>R2013</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Juan Dela Cruz
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        juandelacruz@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Student</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Overload</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        2019-22113-SM-0
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>BSIT 3-2</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>R2013</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Juan Dela Cruz
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        juandelacruz@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Student</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Overload</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        2019-22113-SM-0
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>BSIT 3-2</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>R4021</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Jose Rizal
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        jrizal123@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Student</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Overload, Change subject
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        2019-22113-SM-0
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        ENTREP 3-2
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>R2013</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Vincent dela Cruz
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        vincentdelacruz55@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>parent</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Change subject
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        2021-30113-SM-0
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>BSIT 3-2</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        09874223697
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        P. Buhangin
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>R20113</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Bella Poarch
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        bellapoarch@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Visitor</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Overload</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        09212365789
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Bagbaguin, Sta. maria Bulacan
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>R2013</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        Juan Dela Cruz
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        juandelacruz@yahoo.com
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Student</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>Overload</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>
                        2019-22113-SM-0
                      </TableCell>
                      <TableCell sx={{ minWidth: "120px" }}>BSIT 3-2</TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                      <TableCell sx={{ minWidth: "120px" }}></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={3}>
                <Stack spacing={3} direction="row">
                  <Stack>
                    <Button variant="contained">Window 1</Button>
                  </Stack>
                  <Stack>
                    <Button variant="contained">Window 2</Button>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* Skip */}
            <Grid item lg={6}>
              <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                Skip
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#880000" }}>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold", color: "white" }}>
                          Skip
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Controll;
