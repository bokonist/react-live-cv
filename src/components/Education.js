import React, { Component } from "react";

class Education extends Component {
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
      <div className="education-container">
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="University/School Name" />
        <input type="text" placeholder="City/Location" />
        <div className="duration">
          <label>Start Date:</label>
          <input type="date" />
          <label>End Date:</label>
          <input type="date" />
          <button onClick={this.deleteEntry.bind(this)}>Delete Entry</button>
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
}
export default Education;
