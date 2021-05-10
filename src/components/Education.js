import React from "react";

function Education(props) {
  return (
    <div className="education-container">
      <input type="text" placeholder="Degree" />
      <input type="text" placeholder="University/School Name" />
      <input type="text" placeholder="City/Location" />
      <div className="duration">
        <label>Start Date:</label>
        <input type="date" />
        <label>End Date:</label>
        <input type="date" />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.deleteEntry();
          }}
        >
          Delete Entry
        </button>
      </div>

      <textarea
        rows="5"
        cols="33"
        placeholder="Description/Statement"
        spellCheck="false"
      ></textarea>
      <br />
    </div>
  );
}
export default Education;
