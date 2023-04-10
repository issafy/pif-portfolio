import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getDarkTheme } from '../utils/selectors';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <div className='flex flex-row  justify-center gap-10'>
      {/* {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
      <BallCanvas />
    </div>
  );
};

export default Tech;
