import React from "react";
import { useState } from 'react';
import './EntryForm.css';


const EntryForm = ({userInfo, handleSubmit, onChange}) => {

    return (
        <div className="entryForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Enter Name: </label>
                <input 
                    type="text"
                    name="name"
                    id="nameInput"
                    value={userInfo.name || ""}
                    onChange={onChange}
                />
                <label htmlFor="dobInput">Enter DOB: </label>
                <input 
                    type="date"
                    id="dobInput"
                    name="dob"
                    value={userInfo.dob || ""}
                    onChange={onChange}
                />
                <label htmlFor="addressInput">Enter Address: </label>
                <input 
                    type="text"
                    id="addressInput"
                    name="address"
                    value={userInfo.address || ""}
                    onChange={onChange}
                />
                <label htmlFor="emailInput">Enter Email Address: </label>
                <input
                    type="email"
                    id="emailInput"
                    name="email"
                    value={userInfo.email || ""}
                    onChange={onChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EntryForm