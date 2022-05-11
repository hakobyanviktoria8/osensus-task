import React from 'react'
import usersData from './../jsons/users.json';
import { Link } from "react-router-dom";

function UserComp({scan}) {
  return (
    <Link to={`/users/${scan.id}`} className="user">
        <h2 className={scan.status}>{scan.id}</h2>
        <h3>{usersData[scan.id]?usersData[scan.id].name:"Name"} / {usersData[scan.id]?usersData[scan.id].email:"Email"}</h3>
        <div className="statusAndData">
            <span>{scan.status}</span>
            <span>{scan.createdAt.slice(0,10)}</span>
        </div>
    </Link>
  )
}

export default UserComp