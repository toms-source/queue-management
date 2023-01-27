import { React, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Pagination,
} from "@mui/material";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Usertable = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPost] = useState(1);
  const postPerPage = 5;
  let pages = [];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    tableQueryQueue();
    // tableQueryServing();
  }, []);

  const handleChangePagination = (event, value) => {
    setCurrentPost(value);
  };

  // QueueLinetable Query
  const tableQueryQueue = async () => {
    const acadQueueCollection = collection(db, "acadQueuing");
    const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    console.log("render");
    return unsub;
  };
  // QueueNOwServing Query
  // const tableQueryServing = async () => {
  //   const acadQueueCollection = collection(db, "acadQueuing");
  //   const q = query(acadQueueCollection, orderBy("timestamp", "asc"));
  //   const unsub = onSnapshot(q, (snapshot) =>
  //     setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   );
  //   console.log("render");
  //   return unsub;
  // };
  return (
    <>
      <Box
        sx={{
          px: { lg: 50, md: 25, sx: 10 },
          pt: { lg: 10, md: 20, sx: 0 },
        }}
      >
        <Box p={3}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#880000" }}>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold", color: "wheat" }}>
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
        </Box>

        <Box p={3}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#ffd700" }}>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Queue Line
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPost.map((queue, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{queue.ticket}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
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
              page={currentPage}
              onChange={handleChangePagination}
              shape="rounded"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Usertable;
