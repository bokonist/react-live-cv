import React from "react";
import "../styles/Preview.css";

import sample_photo from "../assets/sample.png";
import placeholder from "../assets/placeholder.png";

function Preview(props) {
  let { workExpArray, educationArray, personalInfo } = props;
  console.log(personalInfo);
  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-name">
          <p>{personalInfo.firstName}</p>
          <p>{personalInfo.lastName}</p>
        </div>
        <p className="preview-current-title">
          {" "}
          {personalInfo.jobTitle}{" "}
          {personalInfo.company ? `@ ${personalInfo.company}` : ""}
        </p>
      </div>
      <div className="preview-body">
        <div className="preview-info">
          <div className="preview-info-statement">
            <quote>
              {personalInfo.statement ? `" ${personalInfo.statement} "` : ""}
            </quote>
          </div>
          <div className="preview-info-photo-container">
            <img
              src={
                personalInfo.image === "sample"
                  ? sample_photo
                  : personalInfo.image || placeholder
              }
              alt="sample"
            />
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.email}</p>
          </div>
        </div>
        <div className="preview-work-exp">
          {workExpArray.map((workexpEntry, index) => {
            <div key={index} className="preview-work-exp-entry"></div>;
          })}
        </div>
        <div className="preview-education"></div>
      </div>
    </div>
  );
}

export default Preview;
