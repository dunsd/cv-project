import React from "react";
import { Component } from "react";
import EntryForm from "./EntryForm";

const UserDetails = ({userInfo}) => {


    return (
        <div className="userDetails">
            <div>Name: {userInfo.name}</div>
            <div>D.O.B: {userInfo.dob}</div>
            <div>Address: {userInfo.address}</div>
            <div>Email: {userInfo.email}</div>
            <div>Phone Number: {userInfo.phone}</div>
        </div>
    )
}


export default UserDetails