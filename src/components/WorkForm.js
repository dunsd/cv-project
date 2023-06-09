import React from "react";
import './css/Forms.css';

const WorkForm = ({workInputs, onWorkChange, removeWork, addWorkSection}) => {

    const onWorkSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="workForm" onSubmit={onWorkSubmit}>
            {workInputs.map((input, index) => {
                return (
                    <div className="formDiv" key={index}>
                            <label htmlFor="datesInput">Enter dates: </label>
                            <input 
                                type="text"
                                placeholder="Dates"
                                name="dates"
                                id="datesInput"
                                value={input.dates}
                                onChange={event => onWorkChange(index, event)}
                            />
                            <label htmlFor="companyInput">Enter company name: </label>
                            <input
                                placeholder="Company Name"
                                id="companyInput"
                                name="company"
                                value={input.company}
                                onChange={event => onWorkChange(index, event)}
                            />
                            <label htmlFor="descInput">Enter details: </label>
                            <textarea
                                placeholder="Description"
                                id="descInput"
                                name="desc"
                                value={input.desc}
                                onChange={event => onWorkChange(index, event)}
                            />
                        <button onClick={() => removeWork(index)}>Remove Section</button>
                    </div>
                )
            })}
            <button onClick={addWorkSection}>Add another section</button>
        </form>
    )
}

export default WorkForm;