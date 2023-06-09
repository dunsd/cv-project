import React from "react";
import './css/Displays.css';


const WorkDisplay = ({workInputs}) => {

    return (
        <div className="displayDivOuter">
            {workInputs.map((input, index) => {
                return (
                    <div className="displayDivInner" key={index}>
                        <div className="workDates">
                            Dates:<br />{input.dates}
                        </div>
                        <div className="workCompany">
                            Company:<br />{input.company}
                        </div>
                        <div className="workDesc">
                            Description:<br />{input.desc}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkDisplay;