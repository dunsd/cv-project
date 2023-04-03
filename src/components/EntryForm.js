import React from "react";


const EntryForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <div className="entryForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Enter Name</label>
                <input 
                    type="text"
                    id="nameInput"
                />
                <label htmlFor="dobInput">Enter DOB</label>
                <input 
                    type="date"
                    id="dobInput"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EntryForm