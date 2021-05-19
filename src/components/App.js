import "../styles/App.css";
import React, { useState } from "react";
import EditCV from "./EditCV";
import Preview from "./Preview";

function App(props) {
  let [personalInfo, setPersonalInfo] = useState({});
  let [workExpArray, setWorkExpArray] = useState([{}]);
  let [educationArray, setEducationArray] = useState([{}]);
  const addNewWorkExp = (event) => {
    event.preventDefault();
    let target = event.currentTarget;
    target.classList.add("success");
    setTimeout(() => {
      target.classList.remove("success");
    }, 1000);
    setWorkExpArray([{}, ...workExpArray]);
  };
  const addNewEducation = (event) => {
    event.preventDefault();
    let target = event.currentTarget;
    target.classList.add("success");
    setTimeout(() => {
      target.classList.remove("success");
    }, 1000);
    setEducationArray((prevArray) => {
      return [{}, ...prevArray];
    });
  };
  const deleteWorkExpEntry = (index) => {
    setWorkExpArray((prevArray) => {
      let workExpClone = [...prevArray];
      workExpClone.splice(index, 1);
      return workExpClone;
    });
  };

  const deleteEducationEntry = (index) => {
    setEducationArray((prevArray) => {
      let educationClone = [...prevArray];
      educationClone.splice(index, 1);
      return educationClone;
    });
  };
  const modifyWorkExpEntry = (index, field, val) => {
    setWorkExpArray((prevArray) => {
      let workExpClone = [...prevArray];
      workExpClone[index][field] = val;
      return workExpClone;
    });
  };
  const modifyEducationEntry = (index, field, val) => {
    setEducationArray((prevArray) => {
      let educationClone = [...prevArray];
      educationClone[index][field] = val;
      return educationClone;
    });
  };
  const modifyPersonalInfo = (field, val) => {
    setPersonalInfo((prevObj) => {
      let personalClone = Object.assign({}, prevObj);
      personalClone[field] = val;
      return personalClone;
    });
  };
  const loadSample = () => {
    setPersonalInfo({
      firstName: "Sinus",
      lastName: "Vorvalds",
      jobTitle: "Full Stack CSS Developer",
      company: "Microsoft",
      phone: "+1 918-234-7520",
      email: "vorvalds@sinux-foundation.org",
      image: "sample",
      statement:
        "I like to develop full stack applications for the web with only CSS. Being a CSS maximalist, I look forward to the day I can deploy an entire website from a single CSS file. Meanwhile, although I'm currently exploring opportunities in backend development, I've always had a keen eye for tasteful frontend design with a focus on accessibility and elegant UX design. I love the Windows operating system, as you can see from the smile on my face. My distaste for UNIX is inversely correlated to my ability to grow a full beard.",
    });
    setEducationArray([
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
    ]);
    setWorkExpArray([
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
    ]);
  };
  const reset = () => {
    setWorkExpArray([{}]);
    setPersonalInfo({});
    setEducationArray([{}]);
  };
  const uploadImage = (inputElement) => {
    let oFReader = new FileReader();
    oFReader.readAsDataURL(inputElement.files[0]);
    //let classContext = this;
    oFReader.onload = function (oFREvent) {
      setPersonalInfo((prevObj) => {
        let personalClone = Object.assign({}, prevObj);
        personalClone.image = oFREvent.target.result;
        return personalClone;
      });
    };
  };

  return (
    <div className="App">
      <div className="main-title-container">~ Live C.V. ~</div>

      <div className="main-body-container">
        <EditCV
          workExpArray={workExpArray}
          educationArray={educationArray}
          personalInfo={personalInfo}
          loadSample={loadSample}
          reset={reset}
          uploadImage={uploadImage.bind(this)}
          modifyPersonalInfo={(field, val) => {
            modifyPersonalInfo(field, val);
          }}
          addNewEducation={addNewEducation}
          addNewWorkExp={addNewWorkExp}
          deleteWorkExpEntry={(index) => {
            deleteWorkExpEntry(index);
          }}
          deleteEducationEntry={(index) => {
            deleteEducationEntry(index);
          }}
          modifyWorkExpEntry={(index, field, newVal) => {
            modifyWorkExpEntry(index, field, newVal);
          }}
          modifyEducationEntry={(index, field, newVal) => {
            modifyEducationEntry(index, field, newVal);
          }}
        />
        <Preview
          workExpArray={workExpArray}
          educationArray={educationArray}
          personalInfo={personalInfo}
        />
      </div>
    </div>
  );
}
export default App;
