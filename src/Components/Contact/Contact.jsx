import "./Contact.css"
import spacemanimg from "../image/spaceman.5ec7fcfa9a803ead726c.png"
import Header from "../1-Header/Header";
import { motion } from "framer-motion";
import { useState } from "react";
const Contact = () => {

    const [Message, setMessage] = useState("")
    const [aleart, setaleart] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


    const supmituser = (e) => {
        e.preventDefault();
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: "zerowepschool@gmail.com",
                subject: "Trying SendMail",
                message: Message,
            })
        }).then((res) => {
            setIsLoading(false)
            setaleart(true)
            setTimeout(() => {
                setaleart(false)
            }, 4000);
        })
    }

    const addLoding=()=>{
        setIsLoading(true)
    }
    return (
        <>
            <Header />

            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: "0" }}
                transition={{ duration: "0.5" }}
                exit={{ y: "-100vh" }}
            >
                <div className="container">
                    
                    <h1 style={{marginTop:"140px",textAlign:"center",fontSize:"55px"}}><span className="scale">C</span><span style={{color:"#4dff03"}} className="scale">o</span><span style={{color:"#ff0058"}} className="scale">n</span><span style={{color:"#ffbc00"}} className="scale">t</span><span style={{color:"#e6fb04"}} className="scale">a</span><span style={{color:"#6fb046"}} className="scale">C</span><span style={{color:"#ff0058"}} className="scale">t</span></h1>
                    <div className="cotent_contact_flex ">
                        <form onSubmit={supmituser}>
                            <input type="text" />
                            <div>Enter Your UserNamr</div>
                            
                            <input onChange={(e) => setMessage(e.target.value)} type="text" />
                            <div>Enter Your Message</div>
                            <button onClick={addLoding} className= {isLoading ? "loding" :""} type="submit">Send Your Message</button>
                        </form>

                        <motion.div
                            initial={{ y: 1}}
                            animate={{ y: -100 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}

                            className="img_man">
                            <motion.img
                                initial={{ y: 20 }}
                                animate={{ y: -20 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"

                                }}
                                src={spacemanimg} alt="" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {aleart &&
                <motion.div
                    initial={{ right: 40 }}
                    animate={{ right: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 1,

                    }}
                    className="fixed">👧👏لقد قمت ارسال الرساله بنجاح</motion.div>
            }
        </>
    )
}

export default Contact;






