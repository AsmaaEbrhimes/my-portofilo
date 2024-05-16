import "./dashbord.css"
import Header from "../1-Header/Header"
import Char from "./char"
import ApexChart from "./BieChar"
import CustomizedTables from "./tabel"
import Slide from "./slider/App"


const Dashbord = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="zindex" style={{ zIndex: "99999", marginTop: "100px", position: "relative", display: "flex", gap: "20px" }} >
                    <div style={{ width: "70%" }}><Char /> </div>
                    <div style={{ width: "30%", padding: "30px", height: "350px", Top: "-60px", textAlign: "center", borderRadius: "20px", border: "1px solid rgb(69, 66, 66)", boxShadow: "0 0 10px rgb(69, 66, 66),0 0 10px rgb(69, 66, 66) ,0 0 10px rgb(69, 66, 66),0 0 10px white, 0 0 10px white" }}><ApexChart /></div>
                </div>


                <div className="content_dashbord_flex">
                    <div className="char_1">
                        <div style={{width:"20%", marginRight:"20px"}}><Slide /></div>
                        <div style={{width:"80%"}}> <CustomizedTables /></div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Dashbord;
