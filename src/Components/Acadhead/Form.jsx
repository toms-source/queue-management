import React from "react";
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
  OutlinedInput,
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const transactionList = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Form = () => {
  const [personName, setPersonName] = React.useState([]);

  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
                  <Typography variant="h5" component="div" align="center" p={4}>
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
                  <FormControl>
                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      maxSelections={3}
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {transactionList.map((trans) => (
                        <MenuItem key={trans} value={trans}>
                          {trans}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      required
                      color="pupMaroon"
                    >
                      Transactions
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Transactions"
                      color="pupMaroon"
                      required
                    >
                      <MenuItem value="Accreditation of Subjects">
                        Accreditation of Subjects
                      </MenuItem>
                      <MenuItem value="Adding/Changing Subjects">
                        Adding/Changing Subjects
                      </MenuItem>
                      <MenuItem value="Overload">Overload</MenuItem>
                      <MenuItem value="Online Request for Petition">
                        Online Request for Petition
                      </MenuItem>
                      <MenuItem value="Cross-Enrollment">
                        Cross-Enrollment
                      </MenuItem>
                    </Select>
                  </FormControl> */}
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
