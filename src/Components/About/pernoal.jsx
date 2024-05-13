
import aboutimg from "../image/about.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";
const pernoal = () => {
    return (
        <>
            <div className="container">
                <div className="personal_flex top">
                    <div className="personal_desc">
                        <h1>
                            <span className="scale"> Know</span>
                            <span className="scale"> Who </span>
                            <span className="scale" style={{color:"white"}}>I'M </span>
                            </h1>
                        <p>Hi Everyone, I am<span> Asmaa Ebrhime</span>from <span>Monufia</span> .</p>
                        <p>I am currently employed as a frontend developer at Juspay.</p>
                        <p>I have completed Eccomarce and linkedin and othe projects</p>
                        <p>Apart from coding, some other activities that I love to do!</p>
                        <p><ArrowForwardIcon style={{ color: "#be45ee" }} /> Playing Games</p>
                        <p><ArrowForwardIcon style={{ color: "#be45ee" }} />  Writing Tech Blogs</p>
                        <p><ArrowForwardIcon style={{ color: "#be45ee" }} />  Travelling</p>
                        <p>"Strive to build things that make a difference!" __ Soumyajit</p>
                    </div>


                   
                    
                        <motion.img 
                        initial={{ y: 0 }}
                        animate={{ y: -40 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        
                        src={aboutimg} alt=""  className="pernol_img"/>
                   


                </div>

            </div>

        </>
    )
}



export default pernoal;