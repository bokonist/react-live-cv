import React from "react";

function WorkExp(props) {
  return (
    <div className="work-exp-container">
      <input
        type="text"
        placeholder="Job Title"
        onChange={(event) => {
          props.modifyItem("title", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Company"
        onChange={(event) => {
          props.modifyItem("company", event.target.value);
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
export default WorkExp;
