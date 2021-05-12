import React from "react";

function Education(props) {
  let { degree, school, location, startDate, endDate, description } =
    props.data;
  return (
    <div className="education-container">
      <input
        type="text"
        placeholder={"Degree #" + (props.index + 1)}
        value={degree || ""}
        onChange={(event) => {
          props.modifyItem("degree", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="University/School Name"
        value={school || ""}
        onChange={(event) => {
          props.modifyItem("school", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="City/Location"
        value={location || "  "}
        onChange={(event) => {
          props.modifyItem("location", event.target.value);
        }}
      />
      <div className="duration">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate || ""}
          onChange={(event) => {
            props.modifyItem("startDate", event.target.value);
          }}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate || ""}
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
        value={description || ""}
        onChange={(event) => {
          props.modifyItem("description", event.target.value);
        }}
      ></textarea>
      <br />
    </div>
  );
}
export default Education;
