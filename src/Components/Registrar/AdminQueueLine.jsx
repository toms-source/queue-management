import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  ThemeProvider,
  createTheme,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Pagination,
  Paper,
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
        },
      },
    },
  },
});

const AdminQueueLine = () => {
  const [qlUserData, setQluserData] = useState([]);
  const [qlCurrentPage, setQlCurrentPost] = useState(1);
  const QlPostPerPage = 3;
  let pages = [];

  const lastPostIndex = qlCurrentPage * QlPostPerPage;
  const firstPostIndex = lastPostIndex - QlPostPerPage;
  const currentPost = qlUserData.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(qlUserData.length / QlPostPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    tableQueryQueue();
    // tableQueryServing();
  }, []);

  const handleChangePagination = (event, value) => {
    setQlCurrentPost(value);
  };

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "acadQueuing");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    console.log("render");
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
        Queue Line
      </Typography>
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
              {currentPost.map((queue, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Button variant="contained">Serve Now</Button>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {queue.ticket}
                  </TableCell>
                  <TableCell>{queue.transaction}</TableCell>
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
      {/* Pagination */}
      <Box
        mt={4}
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Pagination
          count={25}
          page={qlCurrentPage}
          onChange={handleChangePagination}
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default AdminQueueLine;
