import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Thêm để điều hướng trang
import { SectionWrapper } from "../hoc";
import { useConstants } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { t } from "i18next";

const Single = ({ index, name, description, image, projectId }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const navigate = useNavigate(); 
  
  return (
    <section className="project-section text-white max-w-7xl mx-auto">
      <div className="project-container">
        <div className="project-wrapper">
          <div className="project-imageContainer" ref={ref}>
            <img src={image} alt={name} className="project-image rounded-3xl" />
          </div>
          <motion.div className="project-textContainer" style={{ y }}>
            <h2 className="font-bold text-[#A56A5C] text-[40px] hover:text-white">{name}</h2>
            <p className="font-medium text-white opacity-70">{description}</p>
            <button
              className="bg-[#A56A5C] cursor-pointer py-3 px-8 rounded-xl w-fit text-white font-bold hover:text-[#151030]"
              onClick={() => navigate(`/project/${projectId}`)} // Chuyển sang trang mới
            >
              {t("project.view")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const { projects } = useConstants();
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="project" ref={ref}>
      <div className={`${styles.sectionHeadText} text-center progress`}>
        <motion.div variants={textVariant()}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className={`${styles.sectionHeadText} text-center progress`}
        >
          <h1 className="" style={{color: "#A56A5C"}}>{t("project.title")}</h1>
          <motion.div style={{ scaleX,  backgroundColor: "#A56A5C"}} className="mt-2 progressBar" ></motion.div>
        </motion.div>
      </div>
      {projects.map((project, index) => (
        <Single
          key={`project-${index}`}
          index={index}
          name={project.name}
          description={project.shortDescription}
          image={project.thumbnail}
          projectId={index} // Truyền ID để điều hướng trang
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Project, "PROJECT");
