import React, { useState, useContext } from 'react';
import styles from '../css/skills.module.css';
import { ResumeContext } from './ResumeContext';

function Skills() {
  const { skillData, setSkillData } = useContext(ResumeContext);
  const [currentSkill, setCurrentSkill] = useState('');

  const addSkill = () => {
    if (currentSkill.trim() !== '') {
      setSkillData([...skillData, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (index) => {
    setSkillData(skillData.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        placeholder="Add skills"
        value={currentSkill}
        onChange={(e) => setCurrentSkill(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addSkill();
          }
        }}
      />

      <div
        id="skillsList"
        style={{
          width: '100%',
          height: '55px',
          padding: '10px',
          border: '1px solid gray',
          marginTop: '5px',
          display: 'flex',
          overflowX: 'scroll',
          overflowY: 'hidden',
        }}
        className={styles.skillDiv}
      >
        {skillData.map((skill, index) => (
          <div key={index} className={styles.skillList}>
            {skill}
            <span
              className="remove"
              onClick={() => removeSkill(index)}
              style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>

      <button onClick={addSkill} className={styles.add}>
        Add Skill
      </button>
    </div>
  );
}

export default Skills;
