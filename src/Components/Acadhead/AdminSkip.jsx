import { React } from "react";
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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
const AdminSkip = () => {
  return (
    <>
      {" "}
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "15px",
          fontSize: "1.2rem",
        }}
      >
        Skip
      </Typography>
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
    </>
  );
};

export default AdminSkip;
