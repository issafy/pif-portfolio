import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary rounded-full -left-3 ring-8 ring-tertiary dark:ring-primary dark:bg-secondary">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-4 h-4"
          />
      </span>
      <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">{experience.company_name}<span className="bg-tertiary dark:bg-secondary text-primary dark:text-tertiary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{experience.title}</span></h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-quaternary">{experience.date}</time>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-tertiary dark:text-primary text-[14px] pl-1'
          >
            {point}
          </li>
        ))}
      </ul>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        
        
        <ol className="relative border-l border-tertiary dark:border-quaternary">                  
          
          {experiences.map((experience, index) => (
            <li className="mb-10 ml-6" key={`experience-${index}`}>
              <ExperienceCard
                experience={experience}
              />
            </li>
          ))}
        </ol>

      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
