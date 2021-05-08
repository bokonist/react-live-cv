import React, { Component } from "react";
import WorkExp from "./WorkExp";
class EditCV extends Component {
  constructor(props) {
    super(props);
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
        <input type="text" placeholder="Job Title" />
        <input
          type="tel"
          placeholder="Phone #"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <textarea
          rows="5"
          cols="33"
          placeholder="Description/Statement"
          spellCheck="false"
        ></textarea>
        <p className="section-heading-title">Work Experience</p>
        <WorkExp />
      </div>
    );
  }
}
export default EditCV;
