import React from "react";
import './css/Displays.css';


const UserDetails = ({userInfo}) => {


    return (
        <div className="displayDivOuter">
            <div>Name: {userInfo.name}</div>
            <div>D.O.B: {userInfo.dob}</div>
            <div>Address: {userInfo.address}</div>
            <div>Email: {userInfo.email}</div>
            <div>Phone Number: {userInfo.phone}</div>
        </div>
    )
}


export default UserDetails