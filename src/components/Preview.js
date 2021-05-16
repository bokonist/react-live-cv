import React from "react";
import "../styles/Preview.css";

import sample_photo from "../assets/sample.png";
import placeholder from "../assets/placeholder.png";

function Preview(props) {
  let { workExpArray, educationArray, personalInfo } = props;
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
        <div className="preview-section-title">Work Experience</div>
        <div className="preview-work-exp">
          {workExpArray.map((workexpEntry, index) => {
            return (
              <div key={index} className="preview-work-exp-entry">
                <div className="preview-work-exp-entry-header">
                  <p className="preview-work-exp-entry-title">
                    {workexpEntry.title}{" "}
                  </p>
                  <p className="preview-work-exp-entry-company">
                    {workexpEntry.company ? `@ ${workexpEntry.company}` : ""}
                  </p>
                  <p className="preview-work-exp-entry-location">
                    {workexpEntry.location ? `, ${workexpEntry.location}` : ""}
                  </p>
                </div>

                <p className="preview-work-exp-entry-duration">
                  {workexpEntry.startDate
                    ? workexpEntry.startDate
                    : workexpEntry.title
                    ? "Since forever"
                    : ""}{" "}
                  {workexpEntry.endDate
                    ? ` to ${workexpEntry.endDate}`
                    : workexpEntry.title
                    ? "to present"
                    : ""}
                </p>
                <quote className="preview-work-exp-entry-description">
                  {workexpEntry.description}
                </quote>
              </div>
            );
          })}
        </div>
        <div className="preview-section-title">Education</div>
        <div className="preview-education">
          {educationArray.map((educationEntry, index) => {
            return (
              <div key={index} className="preview-education-entry">
                <div className="preview-education-entry-header">
                  <p className="preview-education-entry-degree">
                    {educationEntry.degree}{" "}
                  </p>
                  <p className="preview-education-entry-school">
                    {educationEntry.school ? `${educationEntry.school}` : ""}
                  </p>
                  <p className="preview-education-entry-location">
                    {educationEntry.location
                      ? `${educationEntry.location}`
                      : ""}
                  </p>
                </div>
                <div className="preview-education-entry-degree-details">
                  <p className="type">
                    {educationEntry.major ? `Major in ` : ""}
                  </p>
                  <p className="subject">
                    {educationEntry.major ? `${educationEntry.major}` : ""}
                  </p>
                  <p className="type">
                    {educationEntry.minor ? `Minor in ` : ""}
                  </p>
                  <p className="subject">
                    {educationEntry.minor ? `${educationEntry.minor}` : ""}
                  </p>
                  <p className="gpa">
                    {educationEntry.gpa ? ` GPA: ${educationEntry.gpa}` : ""}
                  </p>
                </div>
                <p className="preview-education-entry-duration">
                  {educationEntry.startDate
                    ? educationEntry.startDate
                    : educationEntry.degree
                    ? "Since forever"
                    : ""}{" "}
                  {educationEntry.endDate
                    ? ` to ${educationEntry.endDate}`
                    : educationEntry.degree
                    ? "to present"
                    : ""}
                </p>
                <quote className="preview-education-entry-description">
                  {educationEntry.description}
                </quote>
              </div>
            );
          })}
        </div>
        <div className="preview-education"></div>
      </div>
    </div>
  );
}

export default Preview;
