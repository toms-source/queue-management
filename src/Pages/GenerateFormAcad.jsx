import React from "react";
import Box from "@mui/material/Box";
import Form from "../Components/Acadhead/Form";
import Appbar from "../Components/Landing/Appbar";
import Usertable from "../Components/Acadhead/Usertable";
const GenerateFormAcad = () => {
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

export default GenerateFormAcad;
