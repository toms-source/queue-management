import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Container,
  Typography,
  Pagination,
} from "@mui/material";

const Usertable = () => {
  return (
    <>
      <Box p={5}>
        <Container>
          <Typography p={3} variant="h4" component="h2" textAlign="center">
            Now Serving
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Ticket Number
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
        </Container>

        <Container>
          <Typography p={3} variant="h4" component="h2" textAlign="center">
            Queue Line
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Ticket Number
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
              </TableBody>
            </Table>
          </TableContainer>{" "}
          <Box
            mt={4}
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Pagination count={5} shape="rounded" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Usertable;
