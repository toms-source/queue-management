import React from "react";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";

const Info = (props) => {
  return (
    <>
      <Paper elevation={4} />
      <Box
        m={3}
        mx={{ lg: 27, md: 10, sm: 5, xs: 4 }}
        sx={{ padding: "10px 20px", bgcolor: "white", borderRadius: "10px" }}
        data-aos="fade-right"
      >
        <Typography variant="h5" pt={4} sx={{ textAlign: "center" }}>
          How to use?
        </Typography>
        <Box
          p={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ol>
            <Typography
              sx={{
                fontSize: { lg: "1.2rem", sx: "1rem" },
                textAlign: "justify",
              }}
              color="text.secondary"
            >
              <li>
                Choose what office you need to queue for your transaction
                between Academic Head Office or Registrar office.
              </li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>If you are not IN-QUEUE click Get Inline.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Fill Out the form.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Check the data if misspelled or Incorrect.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Read the terms of Use and Privacy statement.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Click Submit.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Remember or do a Screenshot of your Ticket number.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>
                If you want to cancel or check your transaction click view
                transaction.
              </li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}
              color="text.secondary"
            >
              <li>Check your transaction using your email you use in form.</li>
            </Typography>
          </ol>
        </Box>
      </Box>
    </>
  );
};

export default Info;
