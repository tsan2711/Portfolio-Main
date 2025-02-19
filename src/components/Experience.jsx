import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { useConstants } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TechElement from "./TechElement";
import { t } from "i18next";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#fff",
        color: "#100d25",
        border: "3px solid #FF662D",
        borderRadius: "10px",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #FF662D" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#FF662D] text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#100D25] text-[16px] font-semibold opacity-70" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-black-100 text-[14px] pl-1 tracking-wider font-medium">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { experiences, technologies } = useConstants();

  return (
    <section className="w-full flex flex-col items-center">
      {/* Phần Experience giữ nguyên */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("experience.title")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("experience.subtitle")}.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col w-full">
        <VerticalTimeline lineColor="#FF662D">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Công nghệ lơ lửng tại chỗ */}
      <div className="relative w-full flex flex-wrap justify-center gap-6 mt-20">
        {technologies.map((technology, index) => (
          <TechElement key={technology.name} icon={technology.icon} label={technology.name} floating={index % 2 === 0} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "EXPERIENCE");
