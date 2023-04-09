import React from "react";


const WorkDisplay = ({workInputs}) => {

    return (
        <div>
                {workInputs.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className="workDates">
                                Dates: {input.dates}
                            </div>
                            <div className="workCompany">
                                Company: {input.company}
                            </div>
                            <div className="workDesc">
                                Description: {input.desc}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default WorkDisplay;