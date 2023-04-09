import React, { useState } from "react";

const EducationForm = ({userEdu}) => {

    const [eduInputs, setEduInputs] = useState([
        {
            dates: "",
            grade: "",
            desc: "",
        }
    ])

    const onEduChange = (index, event) => {
        let data = [...eduInputs];
        data[index][event.target.name] = event.target.value;
        setEduInputs(data);
    }

    const addSection = () => {
        let newSection = {dates: "", grade: "", desc: ""};
        setEduInputs([...eduInputs, newSection]);
    }

    const onEduSubmit = (e) => {
        e.preventDefault();
    }

    const removeEdu = (index) => {
        let data = [...eduInputs];
        data.splice(index, 1);
        setEduInputs(data);
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