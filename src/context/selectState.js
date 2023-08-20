import React, { useState } from "react";
import selectContext from "./selectContext";

function SelectState(props) {
  const [groupData, setGroupData] = useState('status');
  const [priorityInfo,setPriorityInfo] = useState('Priority');
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);

  return (
    <selectContext.Provider value={{ groupData,setGroupData,priorityInfo,setPriorityInfo,loading,setLoading,data,setData}}>
      {props.children}
    </selectContext.Provider>
  );
}

export default SelectState;