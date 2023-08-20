import React, { useEffect, useState } from "react";
import UserCard from "./common/UserCard";
import "./UserContainer.css";
import Header from "./Header";
const UserContainer = ({ props }) => {
  // extract data from props
  const data = props?.data;
  const id =
    props?.grouping === "User" ? "userId" : props?.grouping.toLowerCase();

  const priority = props?.ordering;
  console.log(priority)
  const [items, setItems] = useState(null);

  // get unique items for given id, eg. id=Status , get all unique status that exist
  const fetchData = () => {
    const uniqueItems = [
      ...new Set(data?.tickets?.map((ticket) => ticket[id])),
    ];
    return uniqueItems;
  };


  useEffect(() => {
    let res = fetchData();
    let arr = [];
    // for each item group all tickets that belong to that group. eg. get all items with status-pending, then status-completed
    res?.map((item) => {
      let temp = data?.tickets?.filter((ticket) => {
        return ticket[id] === item;
      });
      arr.push(temp);
      return temp;
    });
    setItems(arr);

  }, [props]);

  return (
    <div className="user-container">
      {items?.map((item, ind) => {
        return (
          <div className="user-column" key={ind}>
            <div className="header-container">
              <Header
                id={id}
                item={JSON.parse(JSON.stringify(items))[ind][0]}
                count={item.length}
              />
            </div>
            <div className="user-column">
              {/* Ordering on basis of priority or title */}
              {(priority === 'Priority') ? item?.sort((a, b) => { return b.priority - a.priority })?.map((curr, i) => {
                return (
                  <div key={i}>
                    <UserCard user={curr} />
                  </div>
                )
              }) : item?.sort((a, b) => a.title.localeCompare(b.title))?.map((curr, i) => {
                return (
                  <div key={i}>
                    <UserCard user={curr} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserContainer;
