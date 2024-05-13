import "./About.css"
import Pernoal from "./pernoal"
import Skills from "./skills"
import { motion } from "framer-motion"
import Header from "../1-Header/Header"
const About = () => {
    return (
        <>
         <Header/>
        <motion.div
          initial={{x:"-100vw"}}
          animate={{x:"0"}}
          transition={{duration:"0.5"}}
          exit={{y:"-100vh"}}
        >
       
        <Pernoal/>
        <Skills/>
        </motion.div>
      
        </>
    )
}



export default About;