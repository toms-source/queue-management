import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const MonitorQueueLine = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ minHeight: "447px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#880000" }}>
              <TableCell align="center">
                <Typography
                  sx={{ fontWeight: "bold", color: "wheat", fontSize: "2rem" }}
                >
                  Queue Line
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
                RO232
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MonitorQueueLine;
