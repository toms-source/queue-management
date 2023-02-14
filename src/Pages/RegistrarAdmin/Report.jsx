import { React, useState, useEffect } from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  createTheme,
  Tooltip,
} from "@mui/material";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Registrar/Sidebar";
import Theme from "../../CustomTheme";
import { db } from "../../firebase-config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

const Report = () => {
  const [qlUserData, setQluserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("Password1") !== "admin" &&
      localStorage.getItem("Username1") !== "adminreg"
    ) {
      navigate("/admin");
    }
    console.log("Running");
  });

  useEffect(() => {
    tableQueryHistory();
  }, []);

  const tableQueryHistory = async () => {
    const acadQueueCollection = collection(db, "regSummaryreport");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };

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
                Summary Report
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <Box p={5} sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="outlined" color="pupMaroon">
            Print
          </Button>
        </Box>
        <Box px={5}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <ThemeProvider theme={styleTableHead}>
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
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
                  {qlUserData.map((queue, index) => (
                    <TableRow key={index}>
                      <TableCell>{queue.status}</TableCell>
                      <TableCell>{queue.date}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        {queue.ticket}
                      </TableCell>
                      <Tooltip title={queue.transaction} arrow>
                        <TableCell
                          sx={{
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {queue.transaction}
                        </TableCell>
                      </Tooltip>
                      <TableCell>{queue.name}</TableCell>
                      <TableCell>{queue.studentNumber}</TableCell>
                      <TableCell>{queue.email}</TableCell>
                      <TableCell>{queue.userType}</TableCell>
                      <TableCell>{queue.yearSection}</TableCell>
                      <TableCell>{queue.contact}</TableCell>
                      <TableCell>{queue.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ThemeProvider>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Report;
