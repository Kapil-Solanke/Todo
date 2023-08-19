import React from "react";
import './IconBtn.css'
const IconBtn = ({btnHandler }) => {
  return (
    <div>
      <button onClick={btnHandler} className="btn-style">
        Close
      </button>
    </div>
  );
};

export default IconBtn;
