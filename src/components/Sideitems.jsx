import React, {useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "../css/sideItems.module.css";
import Skills from "./Skills";
import { ResumeContext } from "./ResumeContext";
function Sideitems() {
  const {
    skillData,
    setSkillData,
    personalDetails,
    setPersonalDetails,
    professionalExperience,
    setProfessionalExperience,
    education,
    setEducation,
  } = useContext(ResumeContext);


  const handleSkillsData = (skillsData) => {
    setSkillData(skillsData);
  };


  return (
    <section className={styles.input}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Personal Details</Accordion.Header>
          <Accordion.Body>
            <label>
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              required
              value={personalDetails.name}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  name: e.target.value,
                })
              }
            />
             <label>
              Title <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Title: Full Stack Web Developer"
              required
              value={personalDetails.title}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  title: e.target.value,
                })
              }
            />
              <label>
              Summary <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Write short summary about you."
              required
              value={personalDetails.summary}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  summary: e.target.value,
                })
              }
            />
            <label>
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              value={personalDetails.email}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  email: e.target.value,
                })
              }
            />
            <label>
              Address<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              required
              value={personalDetails.address}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  address: e.target.value,
                })
              }
            />
            <label>
              Phone no<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              placeholder="Phone"
              required
              value={personalDetails.phone}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  phone: e.target.value,
                })
              }
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Professional Experience</Accordion.Header>
          <Accordion.Body>
            <label>
              Company Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Company name"
              value={professionalExperience.companyName}
              onChange={(e) =>
                setProfessionalExperience({
                  ...professionalExperience,
                  companyName: e.target.value,
                })
              }
            />
            <label>
              Year<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              placeholder="Experience: 1 Year"
              value={professionalExperience.year}
              onChange={(e) =>
                setProfessionalExperience({
                  ...professionalExperience,
                  year: e.target.value,
                })
              }
            />
            <label>
              Designation<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Designation"
              value={professionalExperience.designation}
              onChange={(e) =>
                setProfessionalExperience({
                  ...professionalExperience,
                  designation: e.target.value,
                })
              }
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <label>
              Institute Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Institute name"
              value={education.instituteName}
              onChange={(e) =>
                setEducation({ ...education, instituteName: e.target.value })
              }
            />
            <label>
              Year<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              placeholder="Complete year: 2019"
              value={education.year}
              onChange={(e) =>
                setEducation({ ...education, year: e.target.value })
              }
            />
            <label>
              Degree<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Degree: Btech"
              value={education.degree}
              onChange={(e) =>
                setEducation({ ...education, degree: e.target.value })
              }
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body>
          <Skills onSkillsData={handleSkillsData} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Sideitems;
