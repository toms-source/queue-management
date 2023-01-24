import React, { useState } from "react";
import {
  ThemeProvider,
  TextField,
  Typography,
  Box,
  Card,
  Stack,
  Select,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Link,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import {
  Article,
  Badge,
  AlternateEmail,
  ChevronRight,
  HighlightOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Theme from "../../CustomTheme";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState(""); //state accepts number only
  const navigate = useNavigate();

  // Function only numbers can accept
  const numOnly = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const landing = () => {
    navigate("/");
  };
  // style
  const styles = {
    whiteSpace: "pre-wrap",
    paddingRight: "10px",
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
                    <Article />
                    Registrar QMS Form
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
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      color="pupMaroon"
                      required
                    >
                      Transactions
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Transactions"
                      color="pupMaroon"
                      required
                      sx={{
                        whiteSpace: "no-wrap",
                        overFlow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: { lg: 900, md: 700, sm: 650, xs: 380 },
                      }}
                    >
                      <MenuItem
                        value="ISSUANCE OF CERTIFIED TRUE COPY OF REGISTRATION CARD"
                        sx={styles}
                      >
                        ISSUANCE OF CERTIFIED TRUE COPY OF REGISTRATION CARD
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF Duplicate Copy of Registration card"
                        sx={styles}
                      >
                        ISSUANCE OF Duplicate Copy of Registration card
                      </MenuItem>
                      <MenuItem value="ISSUANCE OF CERTIFICATE OF ENROLLMENT">
                        ISSUANCE OF CERTIFICATE OF ENROLLMENT
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF PERMIT TO CROSS ENROLL COURSE"
                        sx={styles}
                      >
                        ISSUANCE OF PERMIT TO CROSS ENROLL COURSE
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF CERTIFICATION, AUTHENTICATION AND
                        VERIFICATION"
                        sx={styles}
                      >
                        ISSUANCE OF CERTIFICATION, AUTHENTICATION AND
                        VERIFICATION
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF STUDENT VERIFICATION"
                        sx={styles}
                      >
                        ISSUANCE OF STUDENT VERIFICATION
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF CERTIFIED TRUE COPY of TOR, Diploma and GWA
                        for Graduate Students"
                        sx={styles}
                      >
                        ISSUANCE OF CERTIFIED TRUE COPY of TOR, Diploma and GWA
                        for Graduate Students
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT"
                        sx={styles}
                      >
                        ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF TRANSCRIPT OF RECORD FOR GRADUATE STUDENTS
                        Requirements for TOR Employment for graduate/H.D/Further
                        studies/ evaluation"
                        sx={styles}
                      >
                        ISSUANCE OF TRANSCRIPT OF RECORD FOR GRADUATE STUDENTS
                        Requirements for TOR Employment for graduate/H.D/Further
                        studies/ evaluation
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT"
                        sx={styles}
                      >
                        ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT"
                        sx={styles}
                      >
                        ISSUANCE OF TRANSCRIPT OF RECORD FOR UNDERGRADUATE
                        STUDENT
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF TRANSCRIPT OF RECORD FOR Graduate Students"
                        sx={styles}
                      >
                        ISSUANCE OF TRANSCRIPT OF RECORD FOR Graduate Students
                      </MenuItem>
                      <MenuItem
                        value=" ISSUANCE OF CERTIFICATE OF GRADES"
                        sx={styles}
                      >
                        ISSUANCE OF CERTIFICATE OF GRADES
                      </MenuItem>
                      <MenuItem
                        value="ISSUANCE OF CERTIFICATE OF REGISTRATION"
                        sx={styles}
                      >
                        ISSUANCE OF CERTIFICATE OF REGISTRATION
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      color="pupMaroon"
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
                        sx={{ color: "wheat" }}
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
