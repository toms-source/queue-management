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
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import { db } from "../../firebase-config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

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
  const [search, setSearch] = useState("");

  useEffect(() => {
    tableQueryHistory();
  }, []);

  const tableQueryHistory = async () => {
    const acadQueueCollection = collection(db, "acadSummaryreport");
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
        <Box
          py={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            type="email"
            id="Username"
            label="Email/Contact"
            required
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            color="pupMaroon"
            placeholder="Ex. JuanDelacruz@yahoo.com/09458744562"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchOutlinedIcon
                    // onClick={}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: {
                xs: "100%",
                md: "100%",
                lg: "95%",
              },
              bgcolor: "white",
            }}
          />
        </Box>
        <Box mx={5} sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="outlined" color="pupMaroon">
            Print
          </Button>
        </Box>
        <Box px={5} py={2} mb={5}>
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
