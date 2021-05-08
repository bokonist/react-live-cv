import React, { Component } from "react";

class WorkExp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="work-exp-container">
        <input type="text" placeholder="Job Title" />
        <div className="work-duration">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="work-duration">
          <label>End Date</label>
          <input type="date" />
        </div>
        <textarea
          rows="5"
          cols="33"
          placeholder="Description/Statement"
          spellCheck="false"
        ></textarea>
      </div>
    );
  }
}
export default WorkExp;
