import React, { Component } from "react";

class WorkExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
  }
  deleteEntry(event) {
    event.preventDefault();
    this.setState({
      deleted: true,
    });
  }
  render() {
    if (this.state.deleted === true) {
      return <div></div>;
    }
    return (
      <div className="work-exp-container">
        <input type="text" placeholder="Job Title" />
        <div className="work-duration">
          <label>Start Date</label>
          <input type="date" />
          <label>End Date</label>
          <input type="date" />
          <button onClick={this.deleteEntry.bind(this)}>Delete Entry</button>
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
