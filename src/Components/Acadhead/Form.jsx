import React, { useState } from "react";
import {
  ThemeProvider,
  TextField,
  Typography,
  Box,
  Card,
  Stack,
  Button,
  Link,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import {
  School,
  Badge,
  AlternateEmail,
  ChevronRight,
  HighlightOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Theme from "../../CustomTheme";
import { db } from "../../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,
  timestamp,
  where,
  query,
  getDocs,
} from "firebase/firestore";

// Function for generate random number
function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.ticket = "AP" + randomNumberInRange(99, 499); // Global variable for store ticket number

const transactions = [
  "Processing of Application for Overload of Subjects",
  "Processing of Application for Change of Enrollment (Adding of Subject)",
  "Processing of Application for Change of Enrollment (Change of Schedule/Subject)",
  "Processing of Application for Correction of Grade Entry, Late Reporting of Grades and Removal of Incomplete Mark",
  "Processing of Application for Cross-Enrollment",
  "Processing of Application for Shifting",
  "Processing of Manual Enrollment ",
  "Processing of Online Petition of Subject",
  "Processing of Online Request for Tutorial of Subject",
  "Processing of Request for Certification (Grades, Bonafide Student, General Weighted Average)",
];

const Form = () => {
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [yearSection, setYearSection] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [transaction, setTransaction] = useState([]);
  const navigate = useNavigate();
  const userCollection1 = collection(db, "acadQueuing");
  const userCollection2 = collection(db, "acadNowserving");

  const landing = () => {
    navigate("/");
  };
  const generateSuccess = () => {
    navigate("/generate-acad");
  };

  // Dropdown textbox handle
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTransaction(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Function only numbers can accept
  const numOnly = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setContact(e.target.value);
    }
  };

  // Function for clear selected fields
  const clearForm = () => {
    setStudentNumber("");
    setAddress("");
    setContact("");
    setYearSection("");
  };

  // Function for inserting user between (priorty or regular)
  const insert = async () => {
    let transactions = transaction.join(", ");

    if (selectedOption !== "priority") {
      if (window.confirm("Are you sure you wish to add this transaction ?")) {
        await addDoc(userCollection1, {
          name: name,
          transaction: transactions,
          email: email,
          studentNumber: studentNumber,
          address: address,
          contact: contact,
          userType: selectedOption,
          yearSection: yearSection,
          ticket: window.ticket,
          timestamp: serverTimestamp(),
        });
        generateSuccess();
      }
    } else {
      if (window.confirm("Are you sure you wish to add this transaction ?")) {
        await addDoc(userCollection2, {
          name: name,
          transaction: transactions,
          email: email,
          studentNumber: studentNumber,
          address: address,
          contact: contact,
          userType: selectedOption,
          yearSection: yearSection,
          ticket: window.ticket,
          timestamp: serverTimestamp(),
        });
        generateSuccess();
      }
    }
  };

  const checkExisting = async () => {
    let x = 0;
    let y = 0;

    //Check student number if exist
    let checkStudentNumber = query(
      collection(db, "acadQueuing"),
      where("studentNumber", "==", studentNumber)
    );
    let querySnapshotNumber = await getDocs(checkStudentNumber);
    querySnapshotNumber.forEach(() => {
      x++;
    });

    checkStudentNumber = query(
      collection(db, "acadNowserving"),
      where("studentNumber", "==", studentNumber)
    );
    querySnapshotNumber = await getDocs(checkStudentNumber);
    querySnapshotNumber.forEach(() => {
      x++;
    });

    checkStudentNumber = query(
      collection(db, "acadSkip"),
      where("studentNumber", "==", studentNumber)
    );
    querySnapshotNumber = await getDocs(checkStudentNumber);
    querySnapshotNumber.forEach(() => {
      x++;
    });
    // Check email  if exist
    let checkEmail = query(
      collection(db, "acadQueuing"),
      where("email", "==", email)
    );
    let querySnapshotEmail = await getDocs(checkEmail);
    querySnapshotEmail.forEach(() => {
      y++;
    });

    checkEmail = query(
      collection(db, "acadNowserving"),
      where("email", "==", email)
    );
    querySnapshotEmail = await getDocs(checkEmail);
    querySnapshotEmail.forEach(() => {
      y++;
    });

    checkEmail = query(collection(db, "acadSkip"), where("email", "==", email));
    querySnapshotEmail = await getDocs(checkEmail);
    querySnapshotEmail.forEach(() => {
      y++;
    });

    if (x > 0 && y === 0) {
      alert("Student Number is existing on Que Line");
    } else if (x === 0 && y > 0) {
      alert("Email is existing on Que Line");
    } else if (x > 0 && y > 0) {
      alert("Email and Stundent Number is existing on Que Line");
    } else {
      insert();
    }
  };

  // Validating for creating user
  const creatingUser = async () => {
    let z = 0;

    // Check if Ticket exist on Acad Que Table
    let checkTicket = query(
      collection(db, "acadQueuing"),
      where("ticket", "==", window.ticket)
    );
    let querySnapshotTicket = await getDocs(checkTicket);
    querySnapshotTicket.forEach(() => {
      z++;
    });

    // Check if Ticket exist on Acad Now Serving Table
    checkTicket = query(
      collection(db, "acadNowserving"),
      where("ticket", "==", window.ticket)
    );
    querySnapshotTicket = await getDocs(checkTicket);
    querySnapshotTicket.forEach(() => {
      z++;
    });

    // Check if Ticket exist on Acad Skip Table
    checkTicket = query(
      collection(db, "acadSkip"),
      where("ticket", "==", window.ticket)
    );
    querySnapshotTicket = await getDocs(checkTicket);
    querySnapshotTicket.forEach(() => {
      z++;
    });

    if (z > 0) {
      // IF exist then random again until generate unique ticket id
      let ctr = 0;
      do {
        ctr = 0;
        window.ticket = "AP" + randomNumberInRange(99, 499);
        let getNum = query(
          collection(db, "acadQueuing"),
          where("ticket", "==", window.ticket)
        );
        let querySnapshotNum = await getDocs(getNum);
        querySnapshotNum.forEach(() => {
          ctr++;
        });

        getNum = query(
          collection(db, "acadNowserving"),
          where("ticket", "==", window.ticket)
        );
        querySnapshotNum = await getDocs(getNum);
        querySnapshotNum.forEach(() => {
          ctr++;
        });
      } while (ctr > 0);
    }
    // Chkeck if student number or email are exist/s in queline

    // form requied fields validation
    if (selectedOption === "student") {
      if (
        name.length > 0 &&
        email.length > 0 &&
        transaction.length > 0 &&
        yearSection.length > 0 &&
        studentNumber.length > 0
      ) {
        checkExisting();
      } else {
        alert("Please fill all the reqiured fields!");
      }
    } else if (selectedOption === "priority") {
      if (
        name.length > 0 &&
        email.length > 0 &&
        transaction.length > 0 &&
        yearSection.length > 0 &&
        studentNumber.length > 0
      ) {
        checkExisting();
      } else {
        alert("Please fill all the reqiured fields!");
      }
    } else if (selectedOption === "guest") {
      if (
        name.length > 0 &&
        email.length > 0 &&
        transaction.length > 0 &&
        contact.length > 0 &&
        address.length > 0
      ) {
        checkExisting();
      } else {
        alert("Please fill all the reqiured fields!");
      }
    } else if (selectedOption === "parent") {
      if (
        name.length > 0 &&
        email.length > 0 &&
        contact.length > 0 &&
        address.length > 0 &&
        yearSection.length > 0 &&
        studentNumber.length > 0
      ) {
        checkExisting();
      } else {
        alert("Please fill all the reqiured fields!");
      }
    } else {
      alert("Please fill all the reqiured fields!");
    }
  };
  return (
    <>
      <Box
        sx={{
          px: { lg: 50, md: 20, sx: 0 },
          pt: { lg: 5, md: 20, sx: 0 },
        }}
      >
        <form className="acadForm">
          <ThemeProvider theme={Theme}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card>
                <Box>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    p={4}
                    mt={3}
                  >
                    <School />
                    Academic Head QMS Form
                  </Typography>
                </Box>
                <Stack spacing={2} direction="column" p={3}>
                  <TextField
                    type="text"
                    id="outlined-textarea"
                    required
                    label="Name"
                    autoFocus
                    placeholder="Ex. Juan Dela Cruz"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }} //set name
                    color="pupMaroon"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Badge />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    type="email"
                    id="outlined-textarea"
                    required
                    label="Email"
                    value={email}
                    placeholder="Ex. JuanDelacruz@yahoo.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} //set email
                    color="pupMaroon"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AlternateEmail />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControl fullWidth required>
                    <InputLabel
                      id="demo-multiple-name-label"
                      color="pupMaroon"
                      required
                    >
                      Transactions
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      color="pupMaroon"
                      multiple
                      value={transaction}
                      onChange={handleChange}
                      input={<OutlinedInput label="Transactions" />}
                      sx={{
                        whiteSpace: "no-wrap",
                        overFlow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: {
                          lg: "650px",
                          md: "640px",
                          sm: "560px",
                          xs: "355px",
                        },
                      }}
                    >
                      {transactions.map((transaction) => (
                        <MenuItem
                          key={transaction}
                          value={transaction}
                          sx={{
                            maxWidth: { lg: "800px" },
                            whiteSpace: "pre-wrap",
                            paddingRight: "10px",
                          }}
                        >
                          {transaction}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      color="pupMaroon"
                      required
                    >
                      Type of User
                    </FormLabel>
                    <RadioGroup
                      sx={{ lg: "row", xs: "column" }}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      color="pupMaroon"
                      value={selectedOption}
                      onChange={(event) => {
                        setSelectedOption(event.target.value);
                        clearForm();
                      }}
                    >
                      <FormControlLabel
                        value="student"
                        control={<Radio color="pupMaroon" />}
                        label="Student"
                        color="pupMaroon"
                      />
                      <FormControlLabel
                        value="priority"
                        control={<Radio color="pupMaroon" />}
                        label="PWD and Pregnant"
                      />
                      <FormControlLabel
                        value="guest"
                        control={<Radio color="pupMaroon" />}
                        label="Guest"
                      />
                      <FormControlLabel
                        value="parent"
                        control={<Radio color="pupMaroon" />}
                        label="Parent"
                      />
                    </RadioGroup>
                    {selectedOption === "student" && (
                      <>
                        <Stack spacing={2} direction="column">
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            value={yearSection}
                            onChange={(e) => {
                              setYearSection(e.target.value);
                            }}
                            label="Year & Section"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            value={studentNumber}
                            onChange={(e) => {
                              setStudentNumber(e.target.value);
                            }}
                            label="Student Number"
                            placeholder="EX. 2018-12022-SM-0"
                            color="pupMaroon"
                            maxlength="15"
                          />
                        </Stack>
                      </>
                    )}
                    {selectedOption === "priority" && (
                      <>
                        <Stack spacing={2} direction="column">
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            value={yearSection}
                            onChange={(e) => {
                              setYearSection(e.target.value);
                            }}
                            label="Year & Section"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            value={studentNumber}
                            onChange={(e) => {
                              setStudentNumber(e.target.value);
                            }}
                            label="Student Number"
                            placeholder="EX. 2018-12022-SM-0"
                            color="pupMaroon"
                            maxlength="15"
                          />
                        </Stack>
                      </>
                    )}
                    {selectedOption === "guest" && (
                      <>
                        <Stack spacing={2} direction="column">
                          <TextField
                            type="tel"
                            id="outlined-textarea"
                            required
                            label="Contact Number"
                            placeholder="Ex. 09997845244"
                            value={contact}
                            onChange={numOnly}
                            color="pupMaroon"
                            maxlength="10"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            label="Address"
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            placeholder="Ex. Pulong Buhangin Sta. Maria Bulacan"
                            color="pupMaroon"
                          />
                        </Stack>
                      </>
                    )}
                    {selectedOption === "parent" && (
                      <>
                        <Stack spacing={2} direction="column">
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            value={yearSection}
                            onChange={(e) => {
                              setYearSection(e.target.value);
                            }}
                            label="Year & Section of student, if representative"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            required
                            type="text"
                            id="outlined-textarea"
                            label="Student Number of student, if representative"
                            value={studentNumber}
                            onChange={(e) => {
                              setStudentNumber(e.target.value);
                            }}
                            placeholder="EX. 2018-12022-SM-0"
                            color="pupMaroon"
                            maxlength="15"
                          />
                          <TextField
                            type="tel"
                            id="outlined-textarea"
                            required
                            label="Contact Number"
                            inputmode="numeric"
                            placeholder="Ex. 09997845244"
                            value={contact}
                            onChange={numOnly}
                            color="pupMaroon"
                            maxlength="10"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            label="Address"
                            placeholder="Ex. Pulong Buhangin Sta. Maria Bulacan"
                            color="pupMaroon"
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </Stack>
                      </>
                    )}
                  </FormControl>

                  <Box>
                    By using this service, you understood and agree to the PUP
                    Online Services{" "}
                    <Link
                      href="https://www.pup.edu.ph/terms/"
                      target="_blank"
                      rel="noreferrer"
                      variant="body2"
                    >
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://www.pup.edu.ph/privacy/"
                      target="_blank"
                      rel="noreferrer"
                      variant="body2"
                    >
                      Privacy Statement
                    </Link>
                  </Box>
                  <Box>
                    <Stack spacing={2} direction="row">
                      <Button
                        type="submit"
                        variant="contained"
                        color="pupMaroon"
                        onClick={creatingUser}
                        endIcon={<ChevronRight />}
                        component={motion.div}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Submit
                      </Button>

                      <Button
                        type="button"
                        variant="outlined"
                        color="pupMaroon"
                        onClick={landing}
                        endIcon={<HighlightOff />}
                        component={motion.div}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Box>
          </ThemeProvider>
        </form>
      </Box>
    </>
  );
};

export default Form;
