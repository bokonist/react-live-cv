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
  deleteWorkExpEntry(index) {
    console.log("delete works for workexp!", index);

    this.setState((prevState) => {
      let workExpClone = [...prevState.workExpArray];
      workExpClone.splice(index, 1);
      return { workExpArray: workExpClone };
    });
  }
  deleteEducationEntry(index) {
    console.log("delete works for education!", index);
    this.setState((prevState) => {
      let educationClone = [...prevState.educationArray];
      educationClone.splice(index, 1);
      return { educationArray: educationClone };
    });
  }
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
            deleteWorkExpEntry={(index) => {
              this.deleteWorkExpEntry(index);
            }}
            deleteEducationEntry={(index) => {
              this.deleteEducationEntry(index);
            }}
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
