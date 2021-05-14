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
    let target = event.currentTarget;
    target.classList.add("success");
    setTimeout(() => {
      target.classList.remove("success");
    }, 1000);
    this.setState((prevState) => {
      return {
        workExpArray: [{}, ...prevState.workExpArray],
      };
    });
  };
  addNewEducation = (event) => {
    event.preventDefault();
    let target = event.currentTarget;
    target.classList.add("success");
    setTimeout(() => {
      target.classList.remove("success");
    }, 1000);
    this.setState((prevState) => {
      return {
        educationArray: [{}, ...prevState.educationArray],
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
  loadSample() {
    this.setState({
      personalInfo: {
        firstName: "Sinus",
        lastName: "Vorvalds",
        jobTitle: "Full Stack CSS Developer",
        company: "Microsoft",
        phone: "+1 918-234-7520",
        email: "vorvalds@sinux-foundation.org",
        image: "sample",
        statement:
          "I like to develop full stack applications for the web with only CSS. Being a CSS maximalist, I look forward to the day I can deploy an entire website from a single CSS file. Meanwhile, although I'm currently exploring opportunities in backend development, I've always had a keen eye for tasteful frontend design with a focus on accessibility and elegant UX design. I love the Windows operating system, as you can see from the smile on my face. My distaste for UNIX is inversely correlated to my ability to grow a full beard.",
      },
      workExpArray: [
        {
          title: "Fullstack Developer",
          company: "Microsoft",
          location: "Los Angeles",
          startDate: "2020-04-01",

          description:
            "Friendship ended with Bezos, Satya is my new best friend now. Equally shiny dome, again, too distracted. Such is life when you got a mug like mine.",
        },
        {
          title: "Junior Frontend Developer",
          company: "Amazon",
          location: "Seattle",
          startDate: "2019-04-01",
          endDate: "2020-04-01",
          description:
            "I met Bezos in an elevator on my first day at work, I stared right into his shiny dome and was too distracted by my own beautiful reflection to say anything. Rest of my time here has been pretty uneventful. Learned a lot about CSS positioning.",
        },
      ],
      educationArray: [
        {
          degree: "Undergraduate",
          major: "Computer Science",
          minor: "Sociology",
          gpa: 3.89,
          school: "Harvard University",
          location: "Massachusetts, USA",
          startDate: "2013-04-01",
          endDate: "2017-04-01",
          description:
            "I learned a lot at Harvard. Had to clean the dean's pool for 4 summers straight to bump my grades up to C's. Very friendly wife.",
        },
        {
          degree: "High School Diploma",
          school: "Sand Valley Highschool",
          location: "Minnesota, USA",
          startDate: "2009-04-01",
          endDate: "2013-04-01",
          description:
            "I had fun being in high school, as technology nerds historically always have.",
        },
      ],
    });
  }
  reset() {
    this.setState({
      personalInfo: {},
      workExpArray: [{}],
      educationArray: [{}],
    });
  }
  uploadImage(inputElement) {
    let oFReader = new FileReader();
    oFReader.readAsDataURL(inputElement.files[0]);
    let classContext = this;
    oFReader.onload = function (oFREvent) {
      classContext.setState((prevState) => {
        let personalClone = prevState.personalInfo;
        personalClone.image = oFREvent.target.result;
        return { personalInfo: personalClone };
      });
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="main-title-container">~ Live C.V. ~</div>

        <div className="main-body-container">
          <EditCV
            workExpArray={this.state.workExpArray}
            educationArray={this.state.educationArray}
            personalInfo={this.state.personalInfo}
            loadSample={this.loadSample.bind(this)}
            reset={this.reset.bind(this)}
            uploadImage={this.uploadImage.bind(this)}
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
            personalInfo={this.state.personalInfo}
          />
        </div>
      </div>
    );
  }
}
export default App;
