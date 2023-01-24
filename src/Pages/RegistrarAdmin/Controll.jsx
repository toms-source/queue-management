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
  createTheme,
} from "@mui/material";
import Sidebar from "../../Components/Registrar/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";

// table header syle
const styleTableHead = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#880000",
          color: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
        },
      },
    },
  },
});

// table body style
const styleTableBody = createTheme({
  palette: {
    red: {
      main: "#ba000d",
      contrastText: "#ffffff",
    },
    yellow: {
      main: "#ffab00",
      contrastText: "#000000",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          textAlign: "center",
        },
      },
    },
  },
});

// table title style
const tableTitle = {
  textAlign: "center",
  fontWeight: "bold",
  padding: "15px",
  fontSize: "1.2rem",
};

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
      </ThemeProvider>

      {/* Control Table */}
      <Box p={5}>
        <Grid container spacing={5}>
          {/* Now Serving */}
          <Grid item lg={12}>
            <Typography sx={tableTitle}>Now Serving</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <ThemeProvider theme={styleTableHead}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Actions</TableCell>
                      <TableCell>Ticket</TableCell>
                      <TableCell>Transaction</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Student Number</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Type of User</TableCell>
                      <TableCell>Year&Section</TableCell>
                      <TableCell>Contact Number</TableCell>
                      <TableCell>Address</TableCell>
                    </TableRow>
                  </TableHead>
                </ThemeProvider>
                <ThemeProvider theme={styleTableBody}>
                  {/* Table Body */}
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Stack spacing={1.5} direction="row">
                          <Stack>
                            <Button variant="contained" color="success">
                              Complete
                            </Button>
                          </Stack>
                          <Stack>
                            <Button variant="contained" color="red">
                              Incomplete
                            </Button>
                          </Stack>
                          <Stack>
                            <Button variant="contained" color="yellow">
                              Skip
                            </Button>
                          </Stack>
                        </Stack>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        RO234
                      </TableCell>
                      <TableCell>Overload, Change Subject</TableCell>
                      <TableCell>Juan dela Cruz</TableCell>
                      <TableCell>2018-45632-SM-0</TableCell>
                      <TableCell>juandc@gmail.com</TableCell>
                      <TableCell>Student</TableCell>
                      <TableCell>BSIT 3-2</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </ThemeProvider>
              </Table>
            </TableContainer>
          </Grid>

          {/* Queue Line */}
          <Grid item lg={6}>
            <Typography sx={tableTitle}>Queue Line</Typography>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <ThemeProvider theme={styleTableHead}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Actions</TableCell>
                      <TableCell>Ticket</TableCell>
                      <TableCell>Transactions</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Student Number</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Type of User</TableCell>
                      <TableCell>Year&Section</TableCell>
                      <TableCell>Contact Number</TableCell>
                      <TableCell>Address</TableCell>
                    </TableRow>
                  </TableHead>
                </ThemeProvider>
                <ThemeProvider theme={styleTableBody}>
                  {/* Table Body */}
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Button variant="contained">Serve Now</Button>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        RO234
                      </TableCell>
                      <TableCell>
                        ISSUANCE OF PERMIT TO CROSS ENROLL COURSE
                      </TableCell>
                      <TableCell>Juan dela Cruz</TableCell>
                      <TableCell>2018-45632-SM-0</TableCell>
                      <TableCell>juandc@gmail.com</TableCell>
                      <TableCell>Student</TableCell>
                      <TableCell>BSIT 3-2</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Button variant="contained">Serve Now</Button>
                      </TableCell>
                      <TableCell align="right">RO744</TableCell>
                      <TableCell align="right">
                        ISSUANCE OF CERTIFICATE OF GRADES, ISSUANCE OF STUDENT
                        VERIFICATION
                      </TableCell>
                      <TableCell align="right">Juan dela Cruz</TableCell>
                      <TableCell align="right">2018-45632-SM-0</TableCell>
                      <TableCell align="right">juandc@gmail.com</TableCell>
                      <TableCell align="right">Student</TableCell>
                      <TableCell align="right">BSIT 3-2</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableBody>
                </ThemeProvider>
              </Table>
            </TableContainer>
          </Grid>

          {/* Skip */}
          <Grid item lg={6}>
            <Typography sx={tableTitle}>Skip</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <ThemeProvider theme={styleTableHead}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Actions</TableCell>
                      <TableCell>Ticket</TableCell>
                      <TableCell>Transaction</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Student Number</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Type of User</TableCell>
                      <TableCell>Year&Section</TableCell>
                      <TableCell>Contact Number</TableCell>
                      <TableCell>Address</TableCell>
                    </TableRow>
                  </TableHead>
                </ThemeProvider>
                <ThemeProvider theme={styleTableBody}>
                  {/* Table Body */}
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Stack spacing={1.5} direction="row">
                          <Stack>
                            <Button variant="contained">Serve Now</Button>
                          </Stack>
                          <Stack>
                            <Button variant="contained" color="red">
                              Incomplete
                            </Button>
                          </Stack>
                        </Stack>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        RO234
                      </TableCell>
                      <TableCell>Overload, Change Subject</TableCell>
                      <TableCell>Juan dela Cruz</TableCell>
                      <TableCell>2018-45632-SM-0</TableCell>
                      <TableCell>juandc@gmail.com</TableCell>
                      <TableCell>Student</TableCell>
                      <TableCell>BSIT 3-2</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </ThemeProvider>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Controll;
