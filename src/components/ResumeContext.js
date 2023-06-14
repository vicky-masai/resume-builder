import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [skillData, setSkillData] = useState(["Mongodb","Express js", "React js", "Node js","Next js","Typescript","Javascript","Css","Html5"]);
  const [personalDetails, setPersonalDetails] = useState({
    name: "Vicky Kumar",
    title: "Full Stack Web Developer",
    summary: "An Aspiring Full Stack Web Developer, With A Solid Foundation In Web Development Technologies Such As The React, Mongodb, Nextjs, React-Router, Express Js, Node Js, Redux, Typescript, Javascript, Css, Talwind Css, Chakra-Ui Html, As Well As Expertise In SEO And Online Advertising. Confident And Ability To Deliver High-Quality, User-Friendly, Seo-Friendly Websites And Digital Marketing Campaigns.",
    email: "iamvickyorg@gmail.com",
    address: "Bihar",
    phone: "8298262107",
  });

  const [professionalExperience, setProfessionalExperience] = useState({
    companyName: "Masai School",
    year: "1.3",
    designation: "SDE I",
  });

  const [education, setEducation] = useState({
    instituteName: "D.C College Hajipur",
    year: "2022",
    degree: "B.A(Psychology)",
  });

  return (
    <ResumeContext.Provider
      value={{
        skillData,
        setSkillData,
        personalDetails,
        setPersonalDetails,
        professionalExperience,
        setProfessionalExperience,
        education,
        setEducation,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
