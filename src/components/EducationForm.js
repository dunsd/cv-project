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

    return (
        <form className="eduForm" onSubmit={onEduSubmit}>
            {/* <label>Enter Education: </label>
            <input 
                type="textarea"
                rows={5}
            />
            <button>Add Section</button> */}
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
                    </div>
                )
            })}
            <button onClick={addSection}>Add another section</button>
        </form>
    )
}

export default EducationForm;