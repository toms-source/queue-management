import { React, useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Tooltip,
  TableBody,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

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
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  },
});

const AdminNowServing = () => {
  const [userData, setUserData] = useState([]);
  const currentPage = 1;
  const postPerPage = 2;
  let pages = [];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    tableQueryNowserving();
  }, []);

  // QueueLinetable Query
  const tableQueryNowserving = async () => {
    const acadQueueCollection = collection(db, "acadNowserving");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  };
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "15px",
          fontSize: "1.2rem",
        }}
      >
        Now Serving
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
              {currentPost.map((queue, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ minWidth: "350px" }}>
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

                  <Tooltip title={queue.transaction} arrow>
                    <TableCell>{queue.transaction}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.name} arrow>
                    <TableCell>{queue.name}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.studentNumber} arrow>
                    <TableCell>{queue.studentNumber}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.email} arrow>
                    <TableCell>{queue.email}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.userType} arrow>
                    <TableCell>{queue.userType}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.yearSection} arrow>
                    <TableCell>{queue.yearSection}</TableCell>
                  </Tooltip>
                  <Tooltip title={queue.contact} arrow>
                    <TableCell>{queue.contact} </TableCell>
                  </Tooltip>
                  <Tooltip title={queue.address} arrow>
                    <TableCell>{queue.address}</TableCell>
                  </Tooltip>
                </TableRow>
              ))}
            </TableBody>
          </ThemeProvider>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminNowServing;
