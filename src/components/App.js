import "../styles/App.css";
import React, { Component } from "react";
import EditCV from "./EditCV";
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      workExpArray: [{}],
      educationArray: [{}],
    };
  }
  addNewWorkExp = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        workExpArray: [...prevState.workExpArray, {}],
      };
    });
  };
  addNewEducation = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        educationArray: [...prevState.educationArray, {}],
      };
    });
  };
  deleteWorkExpEntry(index) {
    this.setState((prevState) => {
      let workExpClone = [...prevState.workExpArray];
      workExpClone.splice(index, 1);
      return { workExpArray: workExpClone };
    });
  }

  deleteEducationEntry(index) {
    this.setState((prevState) => {
      let educationClone = [...prevState.educationArray];
      educationClone.splice(index, 1);
      return { educationArray: educationClone };
    });
  }
  modifyWorkExpEntry(index, field, val) {
    this.setState((prevState) => {
      let workExpClone = [...prevState.workExpArray];
      workExpClone[index][field] = val;
      return { workExpArray: workExpClone };
    });
  }
  modifyEducationEntry(index, field, val) {
    this.setState((prevState) => {
      let educationClone = [...prevState.educationArray];
      educationClone[index][field] = val;
      return { educationArray: educationClone };
    });
  }
  modifyPersonalInfo(field, val) {
    this.setState((prevState) => {
      let personalClone = prevState.personalInfo;
      personalClone[field] = val;
      return { personalInfo: personalClone };
    });
  }
  render() {
    console.log(this.state.personalInfo);
    return (
      <div className="App">
        <div className="main-title-container"></div>
        <div className="main-body-container">
          <EditCV
            workExpArray={this.state.workExpArray}
            educationArray={this.state.educationArray}
            personalInfo={this.state.personalInfo}
            modifyPersonalInfo={(field, val) => {
              this.modifyPersonalInfo(field, val);
            }}
            addNewEducation={this.addNewEducation}
            addNewWorkExp={this.addNewWorkExp}
            deleteWorkExpEntry={(index) => {
              this.deleteWorkExpEntry(index);
            }}
            deleteEducationEntry={(index) => {
              this.deleteEducationEntry(index);
            }}
            modifyWorkExpEntry={(index, field, newVal) => {
              this.modifyWorkExpEntry(index, field, newVal);
            }}
            modifyEducationEntry={(index, field, newVal) => {
              this.modifyEducationEntry(index, field, newVal);
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
