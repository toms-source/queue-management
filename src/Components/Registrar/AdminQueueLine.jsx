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
  Tooltip,
  TableCell,
  TableBody,
  Button,
  Pagination,
  Paper,
} from "@mui/material";
import {
  collection,
  doc,
  getDoc,
  query,
  orderBy,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
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

const AdminQueueLine = () => {
  const [qlUserData, setQluserData] = useState([]);
  const [qlCurrentPage, setQlCurrentPost] = useState(1);
  const QlPostPerPage = 3;
  const userCollection = collection(db, "regNowserving");
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
    const acadQueueCollection = collection(db, "regQueuing");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setQluserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    console.log("render");
    return unsub;
  };

  const directDeleteUser = async (email) => {
    const userDoc = doc(db, "regQueuing", email);
    await deleteDoc(userDoc);
  };

  const moveUser = async (id) => {
    const docRef = doc(db, "regQueuing", id);
    const snapshot = await getDoc(docRef);
    await addDoc(userCollection, {
      name: snapshot.data().name,
      transaction: snapshot.data().transaction,
      email: snapshot.data().email,
      studentNumber: snapshot.data().studentNumber,
      address: snapshot.data().address,
      contact: snapshot.data().contact,
      userType: snapshot.data().userType,
      yearSection: snapshot.data().yearSection,
      ticket: snapshot.data().ticket,
      timestamp: serverTimestamp(),
    });
    directDeleteUser(id);
  };

  const addUser = async (id) => {
    moveUser(id);
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
                    <Button
                      variant="contained"
                      onClick={() => {
                        addUser(queue.id);
                      }}
                    >
                      Serve Now
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {queue.ticket}
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
                    <TableCell>{queue.contact}</TableCell>
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
