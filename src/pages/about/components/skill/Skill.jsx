import React from "react";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";
import skillCss from "/static/img/about/skill_css.png";
import skillHtml from "/static/img/about/skill_html5.png";
import skillVsc from "/static/img/about/skill_vsc.png";
import skillApi from "/static/img/about/skill_api.png";
import skillWireframe from "/static/img/about/skill_wireframe.png";
import skillReact from "/static/img/about/skill_react.png";
import skillJs from "/static/img/about/skill_js.png";
import skillGit from "/static/img/about/skill_github.png";

const skillsData = [
  {
    id: "skill_1",
    icon: skillReact,
    name: "React.js",
    description: "Web development in React",
  },
  {
    id: "skill_2",
    icon: skillHtml,
    name: "HTML5",
    description: "Hypertext Markup",
  },
  {
    id: "skill_3",
    icon: skillCss,
    name: "CSS",
    description: "Attractive Design & Frameworks",
  },
  {
    id: "skill_4",
    icon: skillJs,
    name: "JavaScript",
    description: "Web development in JavaScript",
  },
  {
    id: "skill_5",
    icon: skillGit,
    name: "GitHub",
    description: "Advanced GitHub concepts",
  },
  {
    id: "skill_6",
    icon: skillApi,
    name: "API documentation",
    description: "Creating and developing API documentation",
  },
  {
    id: "skill_7",
    icon: skillWireframe,
    name: "Technical writing",
    description: "Complex technical writing",
  },
  {
    id: "skill_8",
    icon: skillVsc,
    name: "Visual Studio Code",
    description: "Editing & managing code in VSC, developing custom extensions",
  },
];

const Skill = () => {
  // Define skillsData directly inside the component

  return (
    <div className={`${styles.skillSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div className={`${styles.skillContent} ${styles.dottedBorderLeft}`}>
          <Title titleText={"Skills"} />
          <div className={`${styles.skillList} ${styles.grid}`}>
            {skillsData?.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const SkillItem = ({ item }) => {
  return (
    <div
      className={`${styles.skillItem} ${styles.text__Center} ${styles.text__White}`}
      key={item.id}
    >
      <div className={styles.skillIcon}>
        <img src={item.icon} alt={item.name} />
      </div>
      <div className={styles.skillInfo}>
        <h3 className={styles.skillName}>{item.name}</h3>
        <p
          className={`${styles.skillDescription} ${styles.text} ${styles.text__Center}`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};
