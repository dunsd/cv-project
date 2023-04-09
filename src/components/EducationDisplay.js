import React from "react";

const EducationDisplay = ({eduInputs}) => {

    return (
        <div> test {eduInputs.desc}
            {eduInputs.map((input, index) => {
                return (
                <div key={index}>
                     <div className="eduDates">
                        Dates: {input.dates}
                     </div>
                     <div className="eduSchool">
                        School: {input.school}
                     </div>
                     <div className="eduGrade">
                        Grade: {input.grade}
                     </div>
                     <div className="eduDesc">
                        Description: {input.desc}
                     </div>
                </div>
                )
            })}
        </div>
    )
}

export default EducationDisplay;