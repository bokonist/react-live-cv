import React, { Component } from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
class EditCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExpArray: [{ name: "name" }],
      educationArray: [{}],
    };
  }
  addNewWorkExp(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        workExpArray: [{}, ...prevState.workExpArray],
      };
    });
  }
  addNewEducation(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        educationArray: [{}, ...prevState.educationArray],
      };
    });
  }
  render() {
    return (
      <div className="edit-cv-container">
        <div className="section-heading">
          <h1 className="section-heading-title"> Personal Information</h1>
          <label htmlFor="upload-photo"> Upload Photo</label>
          <input id="upload-photo" type="file" name="Photo" />
        </div>

        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Current Job Title" />
        <input
          type="tel"
          placeholder="Phone #"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <textarea
          rows="5"
          cols="33"
          placeholder="Personal Statement"
          spellCheck="false"
        ></textarea>
        <div className="section-heading">
          <p className="section-heading-title">Work Experience</p>
          <div className="button-container">
            <button onClick={this.addNewWorkExp.bind(this)}>+ new </button>
          </div>
        </div>
        <div id="work-exp-list">
          {this.state.workExpArray.map((item, i) => {
            return <WorkExp key={i} />;
          })}
        </div>
        <div className="section-heading">
          <p className="section-heading-title">Education</p>
          <div className="button-container">
            <button onClick={this.addNewEducation.bind(this)}>+ new </button>
          </div>
        </div>
        <div id="education-list">
          {this.state.educationArray.map((item, i) => {
            return <Education key={i} />;
          })}
        </div>
      </div>
    );
  }
}
export default EditCV;
