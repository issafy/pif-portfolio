import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary dark:bg-tertiary' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary dark:from-yellow-1000' />
        </div>

        

        <div>
          <style>
            {`
            #nameChanger:after{
              content: "";
              animation: spinname 5s linear infinite;
            }
             @keyframes spinname {
              0% { content: " Issa"; }
              100% { content: ' ' '\\026A' '\\282' 'a'; }
            }
           `}
          </style>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm 
            
            <span id="nameChanger" className="text-secondary dark:text-primary"></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            I currently develop web applications, <br className='sm:block hidden' />3D visuals, 
            user interfaces and efficient <br className='sm:block hidden' />
            software solutions.
          </p>
          <span className="font-bold text-tertiary dark:text-secondary" id="changejob">#</span>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-quaternary dark:border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-quaternary dark:bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
