import React, {useContext } from "react";
import "./Home.css";
import { useEffect } from "react";
import UserContainer from "../components/UserContainer";
import selectContext from "../context/selectContext";
import Navbar from "../components/Navbar";

const Home = () => {
  const { groupData, priorityInfo } = useContext(selectContext);
  const { loading, setLoading } = useContext(selectContext);
  const {data,setData}=useContext(selectContext);

  useEffect(() => {
    // function getData() -> gets data from api
    async function getData(){
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        let d=await res.json();
        // console.log("The data is", d);
        setData(d);
      } catch (error) {
        console.log("Could not fetch data", error);
      }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    // Home has two components Navbar and User Container
    <div className="home">
      {/* Navbar */}
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="usercontainer">
        {!loading ? (
          <UserContainer
            props={{ data: data, grouping: groupData, ordering: priorityInfo }}
          />
        ) : (
          <div className="spinner">Loading</div>
        )}
      </div>
    </div>
  );
};

export default Home;
