import React from "react";

const WorkForm = ({workInputs, onWorkChange, removeWork, addWorkSection}) => {

    // const [workInputs, setWorkInputs] = useState([
    //     {
    //         dates: "",
    //         company: "",
    //         desc: "",
    //     }
    // ])

    // const onWorkChange = (index, event) => {
    //     let data = [...workInputs];
    //     data[index][event.target.name] = event.target.value;
    //     setWorkInputs(data);
    // }

    // const removeWork = (index) => {
    //     let data = [...workInputs];
    //     data.splice(index, 1);
    //     setWorkInputs(data);
    // }

    // const addWorkSection = () => {
    //     let newSection = {dates: "", company: "", desc: ""};
    //     setWorkInputs([...workInputs, newSection]);
    // }

    const onWorkSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="workForm" onSubmit={onWorkSubmit}>
            {workInputs.map((input, index) => {
                return (
                    <div key={index}>
                        <input 
                            name="dates"
                            value={input.dates}
                            onChange={event => onWorkChange(index, event)}
                        />
                        <input
                            name="company"
                            value={input.company}
                            onChange={event => onWorkChange(index, event)}
                        />
                        <input
                            name="desc"
                            value={input.desc}
                            onChange={event => onWorkChange(index, event)}
                        />
                        <button onClick={() => removeWork(index)}>Remove Section</button>
                    </div>
                )
            })}
            <button onClick={addWorkSection}>Add another section</button>
            <button onClick={onWorkSubmit}>Submit</button>
        </form>
    )
}

export default WorkForm;