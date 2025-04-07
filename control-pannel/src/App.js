import React from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DrawerNavigation from "./Navigation/DrawerNavigation";
import StudentForm from "./Pages/Student_Detail";
import Student_list from "./Pages/Student_list";


const App = () => {
  return (
    <Router>
      <DrawerNavigation>
        <Routes>
          <Route path="/Student_Form" element={<StudentForm/>} />
          <Route path="/Student_List" element={<Student_list/>} />
        </Routes>
      </DrawerNavigation>
    </Router>
  );
};

export default App;
