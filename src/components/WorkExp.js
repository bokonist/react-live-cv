import React from "react";

function WorkExp(props) {
  return (
    <div className="work-exp-container">
      <input type="text" placeholder="Job Title" />
      <input type="text" placeholder="Company" />
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
export default WorkExp;
