import "./App.css";
import Landing from "./Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateFormAcad from "./Pages/GenerateFormAcad";
import GenerateFormReg from "./Pages/GenerateFormReg";
import TransactionReg from "./Pages/TransactionReg";
import TransactionAcad from "./Pages/TransactionAcad";

import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Acad head */}
          <Route path="generateform-acad" element={<GenerateFormAcad />} />
          <Route path="transaction-acad" element={<TransactionAcad />} />

          {/* Registrar */}
          <Route path="generateform-reg" element={<GenerateFormReg />} />
          <Route path="transaction-reg" element={<TransactionReg />} />

          {/* Admin */}
          <Route path="admin" element={<Login />} />

          {/* Excess */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
