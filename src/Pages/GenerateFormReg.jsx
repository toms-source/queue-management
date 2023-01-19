import React from "react";
import { Box } from "@mui/material";
import Appbar from "../Components/Landing/Appbar";
import Form from "../Components/Registrar/Form";
import Usertable from "../Components/Registrar/Usertable";

const GenerateFormReg = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Appbar />
          <Form />
          <Usertable />
        </Box>
      </Box>
    </>
  );
};

export default GenerateFormReg;
