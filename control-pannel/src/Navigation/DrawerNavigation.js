import React from "react";
import { Link } from "react-router-dom";
import "./DrawerNavigation.css";

const DrawerNavigation = ({ children }) => {
  return (
    <div className="permanent-drawer-layout">
      {/* Drawer */}
      <aside className="permanent-drawer">
        <h2 className="drawer-title">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/Student_List">Student_List</Link>
            </li>
            <li>
              <Link to="/Student_form">Student_Form</Link>
            </li>
            
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DrawerNavigation;
