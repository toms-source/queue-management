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

const UserSkippedTable = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "320px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#880000" }}>
              <TableCell align="center">
                <Typography sx={{ fontWeight: "bold", color: "wheat" }}>
                  Skipped
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
    </>
  );
};

export default UserSkippedTable;
