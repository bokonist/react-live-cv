import "../styles/App.css";
import React, { Component } from "react";
import EditCV from "./EditCV";
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExpArray: [{}],
      educationArray: [{}],
    };
  }
  addNewWorkExp = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        workExpArray: [{}, ...prevState.workExpArray],
      };
    });
  };
  addNewEducation = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        educationArray: [{}, ...prevState.educationArray],
      };
    });
  };
  render() {
    return (
      <div className="App">
        <div className="main-title-container"></div>
        <div className="main-body-container">
          <EditCV
            workExpArray={this.state.workExpArray}
            educationArray={this.state.educationArray}
            addNewEducation={this.addNewEducation}
            addNewWorkExp={this.addNewWorkExp}
          />
          <Preview
            workExpArray={this.state.workExpArray}
            educationArray={this.state.educationArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
