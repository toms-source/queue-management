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

const transactions = [
  "Accreditation of Subjects",
  "Adding/Changing Subjects",
  "Overload",
  "Online Request for Petition",
  "Cross-Enrollment",
];
const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState("");
  const [personName, setPersonName] = useState([]);
  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };

  // Dropdown textbox handle
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Function only numbers can accept
  const numOnly = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };
  return (
    <>
      <Box
        sx={{
          px: { lg: 50, md: 20, sx: 0 },
          pt: { lg: 10, md: 20, sx: 0 },
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
                    placeholder="Ex. JuanDelacruz@yahoo.com"
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
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Transactions" />}
                      sx={{
                        whiteSpace: "no-wrap",
                        overFlow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: { lg: 900, md: 700, sm: 650, xs: 380 },
                      }}
                    >
                      {transactions.map((transaction) => (
                        <MenuItem key={transaction} value={transaction}>
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
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    >
                      <FormControlLabel
                        value="student"
                        control={<Radio color="pupMaroon" />}
                        label="Student"
                        color="pupMaroon"
                      />
                      <FormControlLabel
                        value="pwd"
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
                            label="Year & Section"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            label="Student Number"
                            placeholder="EX. 2018-12022-SM-0"
                            color="pupMaroon"
                            maxlength="15"
                          />
                        </Stack>
                      </>
                    )}
                    {selectedOption === "pwd" && (
                      <>
                        <Stack spacing={2} direction="column">
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
                            label="Year & Section"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            type="text"
                            id="outlined-textarea"
                            required
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
                            value={value}
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
                            label="Year & Section of student, if representative"
                            placeholder="BSIT 1-1"
                            color="pupMaroon"
                          />
                          <TextField
                            required
                            type="text"
                            id="outlined-textarea"
                            label="Student Number of student, if representative"
                            placeholder="EX. 2018-12022-SM-0"
                            color="pupMaroon"
                            maxlength="15"
                          />
                          <TextField
                            required
                            type="text"
                            id="outlined-textarea"
                            label="Representative Name"
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
                            value={value}
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
