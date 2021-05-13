import React from "react";

function WorkExp(props) {
  let { title, company, location, startDate, endDate, description } =
    props.data;
  return (
    <div className="work-exp-container">
      <input
        type="text"
        placeholder={"Job Title #" + (props.index + 1)}
        value={title || ""}
        onChange={(event) => {
          props.modifyItem("title", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Company"
        value={company || ""}
        onChange={(event) => {
          props.modifyItem("company", event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="City/Location"
        value={location || ""}
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

export default React.memo(WorkExp);
