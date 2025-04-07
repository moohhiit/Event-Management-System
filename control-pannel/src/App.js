import React from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DrawerNavigation from "./Navigation/DrawerNavigation";
import StudentForm from "./Pages/Student_Detail";


const App = () => {
  return (
    <Router>
      <DrawerNavigation>
        <Routes>
          <Route path="/Student_Form" element={<StudentForm/>} />
        </Routes>
      </DrawerNavigation>
    </Router>
  );
};

export default App;
