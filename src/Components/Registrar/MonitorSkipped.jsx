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
const MonitorSkipped = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "447px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#880000" }}>
              <TableCell align="center">
                <Typography
                  sx={{ fontWeight: "bold", color: "wheat", fontSize: "2rem" }}
                >
                  Skipped
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  border: "none",
                  fontSize: "1.8rem",
                }}
              >
                R0231
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MonitorSkipped;
