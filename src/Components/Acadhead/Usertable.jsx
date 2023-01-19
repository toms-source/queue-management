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
  Typography,
  Pagination,
} from "@mui/material";

const Usertable = () => {
  return (
    <>
      <Box p={5}>
        <Box>
          <Typography p={3} variant="h4" component="h2" textAlign="center">
            Now Serving
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#880000" }}>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold", color: "wheat" }}>
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
        </Box>

        <Box>
          <Typography p={3} variant="h4" component="h2" textAlign="center">
            Queue Line
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#ffd700" }}>
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
                <TableRow>
                  <TableCell align="center">5</TableCell>
                </TableRow>
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
            <Pagination count={5} shape="rounded" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Usertable;
