import React from "react";
import { Component } from "react";

const UserDetails = (props) => {


    return (
        <div className="userDetails">
            <div>{props.name}</div>
            <div>{props.dob}</div>
            <div>{props.address}</div>
        </div>
    )
}


export default UserDetails