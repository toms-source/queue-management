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
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#ffd700" }}>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Now Serving
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
                    <TableRow sx={{ bgcolor: "#ffd700" }}>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Ticket
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Name
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Gr & Sec
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">Juan Dela Cruz</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Stack>
                            <Button variant="contained">Window 1</Button>
                          </Stack>
                          <Stack>
                            <Button variant="contained">Window 2</Button>
                          </Stack>
                          <Stack>
                            <Button variant="contained">Skip</Button>
                          </Stack>
                        </Stack>
                      </TableCell>
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

            {/* Skip */}
            <Grid item lg={6}>
              <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                Skip
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#ffd700" }}>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
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
