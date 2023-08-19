import React, { useState } from "react";
import "./Navbar.css";
import { BiListUl, BiChevronDown } from "react-icons/bi";
import DropDown from "./DropDown";
const Navbar = () => {
  // Close Modal is a state variable
  const [showModal, setshowModal] = useState(null);
  return (
    // Navbar has only display button
    <div className="navbar-container">
      {/* Display button*/}
      <div className="display-container">
        <div className="icon">
          <BiListUl />
        </div>
        {/* When we click Display button we will set showModal to not null , setshowModal is passed as prop to close the modal */}
        <div
          className="dropdown"
          onClick={() =>
            setshowModal({ btnHandler: () => setshowModal(null) })
          }
          >
          Display
          <BiChevronDown />
        </div>
      </div>
      {/* Whenever show Modal is not null DropDown menu will be shown */}
      {showModal && (
        <div className="dopdown-container" >
          {<DropDown props={showModal} />}
        </div>
      )}
    </div>
  );
};

export default Navbar;
