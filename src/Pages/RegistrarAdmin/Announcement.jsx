import React from "react";
import {
  AppBar,
  ThemeProvider,
  createTheme,
  Typography,
  Toolbar,
  Box,
  TextField,
  Paper,
  Button,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import img from "../../Img/seal.png";
import Sidebar from "../../Components/Registrar/Sidebar";
import Theme from "../../CustomTheme";

// table header syle
const styleTableHead = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#880000",
          color: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
        },
      },
    },
  },
});

// table body style
const styleTableBody = createTheme({
  palette: {
    red: {
      main: "#ba000d",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          textAlign: "center",
        },
      },
    },
  },
});

const Announcement = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="pupMaroon">
            <Toolbar>
              <Sidebar />
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Announcement
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Announcement textfield */}
        <Box p={5}>
          <TextField
            id="outlined-multiline-flexible"
            label="Announcement"
            multiline
            maxRows={4}
            fullWidth
            height="100px"
            color="pupMaroon"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      "&:hover": { backgroundColor: "#ffd700" },
                    }}
                  >
                    <CampaignIcon onClick />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Announcement table */}
        <Box px={5}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <ThemeProvider theme={styleTableHead}>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Announcement</TableCell>
                  </TableRow>
                </TableHead>
              </ThemeProvider>
              <ThemeProvider theme={styleTableBody}>
                {/* Table Body */}
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <Button variant="contained" color="red">
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae quia nesciunt quae, asperiores, itaque, ad
                      dicta quisquam dolore a perferendis magnam maxime cumque
                      voluptatum aliquid quos ut recusandae est facilis omnis
                      eveniet! Veritatis provident minima reiciendis, ipsam
                    </TableCell>
                  </TableRow>
                </TableBody>
              </ThemeProvider>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Announcement;
