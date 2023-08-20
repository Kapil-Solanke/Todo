import React, { useContext, useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import selectContext from "../context/selectContext";
const priorityMapping = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
};
const Header = ({ id, item, count }) => {
    const { data } = useContext(selectContext);
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    useEffect(() => {
        data?.users.filter((curr) => {
            if (curr.id === item[id]) setName(curr.name);
        })

    }, [id,item])

    useEffect(() => {
        switch (id) {
            case "status":
                switch (item[id]) {
                    case "Backlog":
                        setIcon("circle-exclamation");
                        break;
                    case "Todo":
                        setIcon("circle-notch");
                        break;
                    case "In progress":
                        setIcon("circle-half-stroke");
                        break;
                    case "Done":
                        setIcon("circle-check");
                        break;
                    case "Cancelled":
                        setIcon("circle-xmark");
                        break;

                    default:
                        break;
                }
                break;

            case "priority":
                switch (item[id]) {
                    case 0:
                        setIcon("circle-exclamation");
                        break;
                    case 1:
                        setIcon("circle-notch");
                        break;
                    case 2:
                        setIcon("circle-half-stroke");
                        break;
                    case 3:
                        setIcon("circle-check");
                        break;
                    case 4:
                        setIcon("circle-xmark");
                        break;

                    default:
                        break;
                }
                break;
            case "userId":
                setIcon("circle-user");
                break;

            default:
                break;
        }
    }, [id, item]);
    
    return (
        <>
            <div className=" header-container">
                {/* changes according to id */}
                <div className="left">
                    {/* img */}
                    <div>
                        {
                            <i className={`fa-solid fa-${icon}`}></i>
                        }
                    </div>
                    <div>

                        {/* text */}
                        {id === "status" ? (
                            <div>{item[id]}</div>
                        ) : id === "priority" ? (
                            <div>{priorityMapping[item[id]]}</div>
                        ) : (
                            <div>{name}</div>
                        )}
                    </div>
                    {/* count */}
                    <div>{count}</div>
                </div>

                {/* remains same*/}
                <div className="right">
                    <GrAdd />
                    <BiDotsHorizontalRounded />
                </div>
            </div>
        </>
    );
};

export default Header;
