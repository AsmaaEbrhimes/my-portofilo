import "./Home.css"
import devolep from "../image/home-main.svg"
import { motion } from "framer-motion";
import AnimatedText from "../AnamatatedText/Animated";
import { useState } from "react";
import girldevolep from "../image/female-developer-background_665280-9650.jpg"



const Home = () => {


    const [replay, setReplay] = useState(true);
    const placeholderText = [
        { type: "heading1", text: "i love you programing and I will be work in the speachfecation" },
        {
            type: "heading2",
            text: "I'm Asmaa Ebrhime is a frontend devolper"
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };


    return (
        <>
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: "0" }}
                transition={{ duration: "0.5" }}
                exit={{ y: "-100vh" }}
            >

                <div className="parent">
                    <div className="content_home">
                        <div className="container">
                            <div className="flex_content_home">
                                <div className="section_one" >
                                    <h1>Hi There!
                                        <motion.div
                                            initial={{ rotate: 20 }}
                                            animate={{ rotate: 50 }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                            className="hand"
                                        >
                                            👋🏻
                                        </motion.div>
                                    </h1>


                                    <motion.div
                                        className="App"
                                        initial="hidden"

                                        animate={replay ? "visible" : "hidden"}
                                        variants={container}
                                    >
                                        <div className="container">
                                            {placeholderText.map((item, index) => {
                                                return <AnimatedText {...item} key={index} />;
                                            })}
                                        </div>
                                    </motion.div>

                                    <div className="btn_cv">
                                        <button>Downlod Cv</button>
                                    </div>
                                </div>
                                <div className="section_two">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: -20 }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"

                                        }}
                                    >
                                        <img src={devolep} alt="" />
                                    </motion.div>
                                </div>
                            </div>



                            <div className="flex2_content_home">
                                <div>
                                    <h1>
                                        <span className="scale">LET ME</span>
                                        <span className="scale" style={{ color: "white" }}> INTRODUCE </span>
                                        <span className="scale">MYSELF</span>

                                    </h1>
                                    <p>
                                        I fell  in love with programming  and I have at I think… least least 🤷‍♂️</p>
                                    <p>I am fluent classics  <span style={{ color: "white" }}>Javascript</span> <span style={{ color: "white" }}> and </span></p>
                                    <p>

                                        My field of  Interest's building new <span style={{ color: "white" }}> Web </span>

                                        <span style={{ color: "white" }}> Technologies </span>
                                        <span style={{ color: "white" }}> and </span>
                                        <span style={{ color: "white" }}> Products </span>
                                        and also in areas related to
                                        <span style={{ color: "white" }}> Blockchain . </span>
                                    </p>
                                    <p>
                                        Whenever possible, I also apply my passion for developing products Modern
                                        <span > possible, </span>
                                        <span style={{ color: "white" }}> Javascript </span>
                                        <span style={{ color: "white" }}> Library </span>
                                        <span style={{ color: "white" }}> and </span>
                                        <span style={{ color: "white" }}> Frameworks </span>
                                        like
                                        <span style={{ color: "white" }}> React.js </span>
                                    </p>
                                </div>
                                <div>
                                    <motion.span
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 0.1 }}
                                        transition={{

                                            type: "spring",
                                            steiffness: 300,
                                            demping: 5
                                        }}
                                        whileInView={{ scale: 1.1 }} >
                                        <img className="girl_img" src={girldevolep} alt="" style={{ background: "transparent", width: "250px", borderRadius: "50%" }} />
                                    </motion.span>

                                </div>

                            </div>



                            <div className="flex3_content_home">
                                <h1 style={{color:"white"}}><span  className="scale">FIND</span> <span className="scale">ME</span> <span className="scale">ON</span></h1>
                                <p><span>Feel</span> free to <span>connect</span> with me</p>
                                <ul>
                                    <motion.li
                                     initial={{ scale: 0.5 }}
                                     animate={{ scale: 0.1 }}
                                     transition={{

                                         type: "spring",
                                         steiffness: 300,
                                         demping: 5
                                     }}
                                     whileInView={{ scale: 1.1 }} >
                                    
                                    <a href="https://github.com/"><i class="fa-brands fa-github"></i></a></motion.li>
                                    <motion.li
                                     initial={{ scale: 0.5 }}
                                     animate={{ scale: 0.1 }}
                                     transition={{

                                         type: "spring",
                                         steiffness: 300,
                                         demping: 5
                                     }}
                                     whileInView={{ scale: 1.1 }}
                                    ><a href="https://www.facebook.com/profile.php?id=100094496622857"><i class="fa-brands fa-facebook-f"></i></a></motion.li>
                                    <motion.li
                                     initial={{ scale: 0.5 }}
                                     animate={{ scale: 0.1 }}
                                     transition={{

                                         type: "spring",
                                         steiffness: 300,
                                         demping: 5
                                     }}
                                     whileInView={{ scale: 1.1 }}
                                    ><a href="https://www.linkedin.com/in/asmaa-ebrhime-944b17278/recent-activity/all/"><i class="fa-brands fa-linkedin-in"></i></a></motion.li>
                                </ul>
                            </div>

                        </div>

                    </div>


                </div>
            </motion.div>
        </>
    )
}



export default Home;