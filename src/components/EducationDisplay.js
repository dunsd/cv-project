import React from "react";

const EducationDisplay = ({eduInputs}) => {

    return (
        <div>
            {eduInputs.map((input, index) => {
                return (
                <div key={index}>
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