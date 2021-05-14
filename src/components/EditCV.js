import React from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import "../styles/Edit.css";
function EditCV(props) {
  let { firstName, lastName, jobTitle, phone, statement, email, company } =
    props.personalInfo;
  return (
    <div className="edit-cv-container">
      <div className="section-heading">
        <h1 className="section-heading-title"> Personal Information</h1>

        <label htmlFor="upload-photo"> Upload Photo</label>
        <input
          id="upload-photo"
          type="file"
          name="Photo"
          onInput={(event) => {
            event.preventDefault();
            props.uploadImage(event.target);
          }}
        />
      </div>
      <div className="options-container">
        <button
          id="load-sample-button"
          onClick={(event) => {
            event.preventDefault();
            props.loadSample();
          }}
        >
          Load Sample
        </button>
        <button
          id="reset-button"
          onClick={(event) => {
            event.preventDefault();
            props.reset();
          }}
        >
          Reset
        </button>
      </div>

      <input
        type="text"
        placeholder="First Name"
        value={firstName || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("firstName", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("lastName", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Current Job Title"
        value={jobTitle || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("jobTitle", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Current Employer"
        value={company || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("company", event.target.value);
        }}
      />
      <input
        type="tel"
        placeholder="Phone # (optional)"
        value={phone || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("phone", event.target.value);
        }}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <input
        type="email"
        placeholder="Email"
        value={email || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("email", event.target.value);
        }}
      />
      <textarea
        rows="5"
        cols="33"
        placeholder="Personal Statement"
        value={statement || ""}
        onChange={(event) => {
          props.modifyPersonalInfo("statement", event.target.value);
        }}
        spellCheck="false"
      ></textarea>
      <div className="section-heading">
        <p className="section-heading-title">Work Experience</p>
        <div
          className="button-container"
          onClick={props.addNewWorkExp.bind(this)}
        >
          <button>{"+ new"}</button>
        </div>
      </div>
      <div id="work-exp-list">
        {props.workExpArray.map((item, index) => {
          return (
            <WorkExp
              data={item}
              key={index}
              index={index}
              deleteEntry={() => {
                props.deleteWorkExpEntry(index);
              }}
              modifyItem={(field, newValue) => {
                props.modifyWorkExpEntry(index, field, newValue);
              }}
            />
          );
        })}
      </div>
      <div className="section-heading">
        <p className="section-heading-title">Education</p>
        <div
          className="button-container"
          onClick={props.addNewEducation.bind(this)}
        >
          <button>{"+ new"}</button>
        </div>
      </div>
      <div id="education-list">
        {props.educationArray.map((item, index) => {
          return (
            <Education
              data={item}
              key={index}
              index={index}
              deleteEntry={() => {
                props.deleteEducationEntry(index);
              }}
              modifyItem={(field, newValue) => {
                props.modifyEducationEntry(index, field, newValue);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(EditCV);
