import React, { useContext, useRef } from "react";
import Sideitems from "../components/Sideitems";
import styles from "../css/buildresume.module.css";
import { ResumeContext } from "../components/ResumeContext";
import html2pdf from "html2pdf.js";
const BuildResume = () => {
  const { skillData, personalDetails, professionalExperience, education } =
    useContext(ResumeContext);
  const div2Ref = useRef(null);

  const handleDownload = () => {
    const opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(div2Ref.current).save();
  };
  return (
    <div className={styles.main}>
      <div className={styles.div1}>
        <Sideitems />
        <div className={styles.button}>
          <button
            onClick={handleDownload}
            style={{
              width: "auto",
              height: "auto",
              border: "none",
              backgroundColor: "#6f00ff",
              color: "white",
              fontSize: "15px",
              fontWeight: 400,
              padding: "5px 20px",
              borderRadius: "20px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            Download
          </button>
        </div>
      </div>
      <div className={styles.div2} ref={div2Ref}>
        <div className={styles.resume}>
          {/* personalDetails  */}
          <h1>{personalDetails.name}</h1>
          <h6>{personalDetails.title}</h6>
          <div className={styles.pers}>
            <p>{personalDetails.address}</p><p>{personalDetails.email}</p>
            <p>{personalDetails.phone} </p>
          </div>
          <h2>Summary</h2>
          <p>{personalDetails.summary}</p>
          {/* Experience */}
          <h2>Professional Experience</h2>
          <div className={styles.expr}>
            <h5>{professionalExperience.companyName}</h5>
            <p>{professionalExperience.year} Year</p>
            <p>{professionalExperience.designation}</p>
          </div>
          {/* education */}
          <h2>Education</h2>
          <div className={styles.education}>
            <h5>{education.instituteName}</h5>
            <p>Year: {education.year}</p>
            <p>{education.degree}</p>
          </div>

          <h2>Skills</h2>
          <ul>
            {skillData?.map((el) => {
              return <li key={el}>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
