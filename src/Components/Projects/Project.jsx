import "./Projects.css"
import { Tilt } from 'react-tilt'
import data from "../Data/Data"
import Header from "../1-Header/Header";
import GitHubIcon from '@mui/icons-material/GitHub';
import AddchartIcon from '@mui/icons-material/Addchart';
import { motion } from "framer-motion";
const Project = () => {
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    return (
        <>
            <Header />
            <motion.div
              initial={{y:"-100vw"}}
              animate={{y:"0"}}
              transition={{duration:"0.5"}}
              exit={{y:"-100vh"}}
            
            
            >
                <div className="container">
                    <div className="content_project top">
                        <div className="desc_project">
                            <h1> <span className="scale" style={{color:"white"}}>My</span> <span className="scale">Recent</span> <span style={{color:"white"}} className="scale">Works</span></h1>
                            <p style={{ fontSize: "20px", marginTop: "20px" }}>Here are a few projects I've worked on recently.</p>
                        </div>
                        <div className="content_project_flex">

                            {data?.length > 1 ?
                                data.map((ele) => (
                                    <Tilt options={defaultOptions} >
                                        <div className="card">
                                            <img src={ele.img} alt="" />
                                            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                                                <h2>{ele.Name}</h2>
                                                <p style={{ marginTop: "10px", marginBottom: "10px", color: "#c672e7" }}>{ele.desc}</p>
                                            </div>
                                            <div className="btn_project">
                                                <a href={ele.repo}><button><GitHubIcon /> Githup</button></a>
                                                <a href={ele.demo}><button>Demo <AddchartIcon /></button></a>
                                            </div>
                                        </div>
                                    </Tilt>

                                ))
                                : "no"}
                        </div>
                    </div>
                </div>
            </motion.div>


        </>
    )
}


export default Project;