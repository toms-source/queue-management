import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Paper,
} from "@mui/material";

const UserNowServingTable = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "160px" }}>
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
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "none" }}
              >
                1
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "none" }}
              >
                2
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserNowServingTable;
