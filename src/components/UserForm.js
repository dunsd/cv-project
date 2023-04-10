import React from "react";
import './css/Forms.css';


const UserForm = ({userInfo, onUserChange}) => {

    const handleUserSubmit = (e) => {
        e.preventDefault();
    }

    return (
            <form className="userForm" onSubmit={handleUserSubmit}>
                <label htmlFor="nameInput">Enter Name: </label>
                <input 
                    type="text"
                    name="name"
                    id="nameInput"
                    value={userInfo.name || ""}
                    onChange={onUserChange}
                />
                <label htmlFor="dobInput">Enter DOB: </label>
                <input 
                    type="date"
                    id="dobInput"
                    name="dob"
                    value={userInfo.dob || ""}
                    onChange={onUserChange}
                />
                <label htmlFor="addressInput">Enter Address: </label>
                <input 
                    type="text"
                    id="addressInput"
                    name="address"
                    value={userInfo.address || ""}
                    onChange={onUserChange}
                />
                <label htmlFor="emailInput">Enter Email Address: </label>
                <input
                    type="email"
                    id="emailInput"
                    name="email"
                    value={userInfo.email || ""}
                    onChange={onUserChange}
                />
                <label htmlFor="phoneInput">Enter Phone Number: </label>
                <input
                    type="number"
                    id="phoneInput"
                    name="phone"
                    value={userInfo.phone || ""}
                    onChange={onUserChange}
                />                
            </form>
    )
}

export default UserForm