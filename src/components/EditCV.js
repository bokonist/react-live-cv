import React from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import "../styles/Edit.css";
function EditCV(props) {
  return (
    <div className="edit-cv-container">
      <div className="section-heading">
        <h1 className="section-heading-title"> Personal Information</h1>
        <label htmlFor="upload-photo"> Upload Photo</label>
        <input id="upload-photo" type="file" name="Photo" />
      </div>

      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Current Job Title" />
      <input
        type="tel"
        placeholder="Phone #"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <textarea
        rows="5"
        cols="33"
        placeholder="Personal Statement"
        spellCheck="false"
      ></textarea>
      <div className="section-heading">
        <p className="section-heading-title">Work Experience</p>
        <div className="button-container">
          <button onClick={props.addNewWorkExp.bind(this)}>{"+ new"}</button>
        </div>
      </div>
      <div id="work-exp-list">
        {props.workExpArray.map((item, index) => {
          return (
            <WorkExp
              key={index}
              deleteEntry={() => {
                props.deleteWorkExpEntry(index);
              }}
            />
          );
        })}
      </div>
      <div className="section-heading">
        <p className="section-heading-title">Education</p>
        <div className="button-container">
          <button onClick={props.addNewEducation.bind(this)}>{"+ new"}</button>
        </div>
      </div>
      <div id="education-list">
        {props.educationArray.map((item, index) => {
          return (
            <Education
              key={index}
              deleteEntry={() => {
                props.deleteEducationEntry(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default EditCV;
