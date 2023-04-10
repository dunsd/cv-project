import React from "react";
import './css/EducationForm.css'

const EducationForm = ({eduInputs, onEduChange, removeEdu, addEduSection}) => {

    const onEduSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="eduForm" onSubmit={onEduSubmit}>
            {eduInputs.map((input, index) => {
                return (
                    <div className="formDiv" key={index}>
                        <label htmlFor="datesInput">Enter dates:</label>
                            <input 
                                name='dates'
                                placeholder="Dates"
                                value={input.dates}
                                onChange={event => onEduChange(index, event)}
                            />
                        <label className="schoolInput">Enter school: </label>
                            <input 
                                name="school"
                                placeholder="School"
                                value={input.school}
                                onChange={event => onEduChange(index, event)}
                            />
                        <label className="gradeInput">Enter Grade: </label>
                            <input 
                                name="grade"
                                placeholder="Grade"
                                value={input.grade}
                                onChange={event => onEduChange(index, event)}
                        />
                            <label className="descInput">Enter details: </label>
                            <textarea 
                                id="descInput"
                                name="desc"
                                placeholder="Description"
                                value={input.desc}
                                onChange={event => onEduChange(index, event)}
                            />
                        <button onClick={() => removeEdu(index)}>Remove Section</button>
                    </div>
                )
            })}
            <button onClick={addEduSection}>Add another section</button>
            <button onClick={onEduSubmit}>Submit</button>
        </form>
    )
}

export default EducationForm;