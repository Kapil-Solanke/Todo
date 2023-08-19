import React, { useContext } from "react";
import "./DropDown.css";
import { sortingData, groupingData } from "../data/selectiondata";
import selectContext from "../context/selectContext";
import { AiFillCloseCircle } from 'react-icons/ai'

const DropDown = ({ props }) => {
  // We will set groupData and priorityInfo based on the user's preference
  const { groupData, setGroupData, priorityInfo, setPriorityInfo } = useContext(selectContext);
  // console.log("The group data is->",groupData);
  // console.log("The priority data is->",priorityInfo);
  return (
    <div className="dropdown-container">
      {/* Select Grouping Criteria */}
      <div className="item-container">
        <div className="item">
          <span>Grouping:</span>
          <span>
            {/* set grouping based on user's selction  */}
            <select name="grouping" id="grouping" className="form-style select" onChange={(e) => { setGroupData(e.target.value) }}>
              {groupingData.map((item, ind) =>
              (<option key={ind}>{item}</option>
              )
              )}
            </select>
          </span>
        </div>

        {/* Select Ordering Criteria */}
        <div className="item">
          <span>Ordering:</span>
          <span>
            {/* set ordering based on user's selction  */}
            <select name="ordering" id="ordering" type="text" className="form-style select" onChange={e => setPriorityInfo(e.target.value)}>
              {sortingData.map((item, ind) => {
                return <option key={ind}>{item}</option>;
              })}
            </select>
          </span>
        </div>
      </div>
      {/* Button to close the Dropdown */}
      <div className="close">
        <button onClick={props?.btnHandler}><AiFillCloseCircle /></button>
      </div>
    </div>
  );
};

export default DropDown;
