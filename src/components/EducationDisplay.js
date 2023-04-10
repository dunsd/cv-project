import React from "react";
import './css/Displays.css';

const EducationDisplay = ({eduInputs}) => {

    return (
        <div className="displayDivOuter">
            {eduInputs.map((input, index) => {
                return (
                <div className="displayDivInner" key={index}>
                     <div className="eduDates">
                        Dates:<br />{input.dates}
                     </div>
                     <div className="eduSchool">
                        School:<br />{input.school}
                     </div>
                     <div className="eduGrade">
                        Grade:<br />{input.grade}
                     </div>
                     <div className="eduDesc">
                        Description:<br />{input.desc}
                     </div>
                </div>
                )
            })}
        </div>
    )
}

export default EducationDisplay;