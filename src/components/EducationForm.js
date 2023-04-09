import React from "react";

const EducationForm = ({eduInputs, onEduChange, removeEdu, addSection}) => {

    const onEduSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="eduForm" onSubmit={onEduSubmit}>
            {eduInputs.map((input, index) => {
                return (
                    <div key={index}>
                        <input 
                            name='dates'
                            placeholder="Dates"
                            value={input.dates}
                            onChange={event => onEduChange(index, event)}
                        />
                        <input 
                            name="school"
                            placeholder="School"
                            value={input.school}
                            onChange={event => onEduChange(index, event)}
                        />
                        <input 
                            name="grade"
                            placeholder="Grade"
                            value={input.grade}
                            onChange={event => onEduChange(index, event)}
                        />
                        <input 
                            name="desc"
                            placeholder="Description"
                            value={input.desc}
                            onChange={event => onEduChange(index, event)}
                        />
                        <button onClick={() => removeEdu(index)}>Remove Section</button>
                    </div>
                )
            })}
            <button onClick={addSection}>Add another section</button>
            <button onClick={onEduSubmit}>Submit</button>
        </form>
    )
}

export default EducationForm;