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
          <div className='w-5 h-5 rounded-full bg-[#1a5c14]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-green-900' />
        </div>

        

        <div>
          <style>
            {`
            #nameChanger:after{
              content: "";
              animation: spin 20s linear infinite;
            }
             @keyframes spin {
              0% { content: " Issa"; }
              10% { content: ' ' '\\026A' '\\282' 'a'; }
              20% { content: " sit"; }
              30% { content: " amet"; }
              40% { content: " consectetur"; }
              50% { content: " adipisicing"; }
              60% { content: " elit"; }
              70% { content: " Hic"; }
              80% { content: " atque"; }
              90% { content: " fuga"; }
            }
           `}
          </style>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm 
            
            <span id="nameChanger" className="text-[#1aaf51]"></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Until the theme selection is ready and operational!! <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary dark:border-secondary_dark flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary dark:bg-secondary_dark mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
