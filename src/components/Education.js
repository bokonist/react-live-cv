import React from "react";

function Education(props) {
  return (
    <div className="education-container">
      <input
        type="text"
        placeholder="Degree"
        onChange={(event) => {
          props.modifyItem("degree", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="University/School Name"
        onChange={(event) => {
          props.modifyItem("school", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="City/Location"
        onChange={(event) => {
          props.modifyItem("location", event.target.value);
        }}
      />
      <div className="duration">
        <label>Start Date:</label>
        <input
          type="date"
          onChange={(event) => {
            props.modifyItem("startDate", event.target.value);
          }}
        />
        <label>End Date:</label>
        <input
          type="date"
          onChange={(event) => {
            props.modifyItem("endDate", event.target.value);
          }}
        />
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
        onChange={(event) => {
          props.modifyItem("description", event.target.value);
        }}
      ></textarea>
      <br />
    </div>
  );
}
export default Education;
