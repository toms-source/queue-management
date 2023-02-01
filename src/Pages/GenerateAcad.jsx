import { Box, Paper, Typography, Button, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Appbar from "../Components/Landing/Appbar";

import { useNavigate } from "react-router-dom";
import waves from "../Img/wave.svg";
import Theme from "../CustomTheme";
import { db } from "../firebase-config";
import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const GenerateAcad = () => {
  const [que, setQue] = useState([]);
  const [skip, setSkip] = useState([]);
  const [nowserve, setNowserve] = useState([]);
  let currentTimestamp = Date.now();
  let date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTimestamp);

  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };

  useEffect(() => {
    nowServing();
    skipped();
    queuing();
    readQue();
  }, []);

  const nowServing = async () => {
    const userCollection = collection(db, "acadNowserving");
    const x = query(userCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(x, (snapshot) =>
      setNowserve(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };
  const queuing = async () => {
    const userCollection = collection(db, "acadSkip");
    const x = query(userCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(x, (snapshot) =>
      setSkip(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };
  const skipped = async () => {
    const userCollection = collection(db, "acadQueueing");
    const x = query(userCollection, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(x, (snapshot) =>
      setQue(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  };

  const readQue = () => {
    que.map((element) => {
      console.log(element.ticket);
    });
  };

  return (
    <>
      <Box>
        <Appbar />
      </Box>
      <Box
        sx={{
          px: { lg: 50, md: 20, xs: 0 },
          pt: { lg: 5, md: 20, xs: 5 },
        }}
      >
        <Box
          component={Paper}
          m={2}
          p={5}
          sx={{
            maxWidth: "1000px",
            backgroundImage: `url(${waves})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1.1rem",
              },
              fontWeight: "bold",
              marginTop: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
            }}
          >
            Queue Line Ticket Number
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1rem",
              },
            }}
          >
            Academic Head Program
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "1.4rem",
                md: "1.2rem",
                sm: "1.3rem",
                xs: "1rem",
              },
            }}
          >
            {date}
          </Typography>

          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2.5rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "2.5rem",
              },
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
            {window.ticket}
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "1.4rem",
                md: "1.2rem",
                sm: "1.3rem",
                xs: "1rem",
              },
            }}
          >
            Thank you for using PUPSMB QMS
          </Typography>
        </Box>
        <Box m={2}>
          <ThemeProvider theme={Theme}>
            <Button
              variant="contained"
              color="pupMaroon"
              onClick={landing}
              sx={{ width: "100%" }}
            >
              Complete
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
};

export default GenerateAcad;
