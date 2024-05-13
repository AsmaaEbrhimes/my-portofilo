import githupimg from "../image/github-6980894_1280.webp"
import visualimg from "../image/visualjpeg.jpeg"
import materialui from "../image/vb6ai56xqgpc0bcfn92y.webp"
import bootstrabimg from "../image/images.png"
import tailwindimg from "../image/G0R0sjHH_400x400.jpg"




const Skills = () => {
    return (
        <>

            <div className="container">

                <div className="content_skills">
                    <h1><span style={{color:"white"}} className="scale">Professional</span><span className="scale">Skiles</span></h1>
                    <div className="content_skill_lang_flex">
                        <div>Html</div>
                        <div>Css</div>
                        <div>Js</div>
                        <div>React</div>
                        <div>Type js</div>
                    </div>
                </div>

                <div className="content_tool_programing">
                <h1><span className="scale" style={{color:"#ff00ff"}}>Tool</span> <span className="scale" style={{color:"white"}}>I</span> <span className="scale">use</span></h1>
                    <div className="tool_programing">
                        <div><img className="tool" src={githupimg} alt="" /></div>
                        <div><img className="tool" src={visualimg} alt="" /></div>
                        <div><img className="tool" src={materialui} alt="" /></div>
                        <div><img className="tool" src={bootstrabimg} alt="" /></div>
                        <div><img className="tool" src={tailwindimg} alt="" /></div>

                    </div>

                </div>
            </div>
        </>
    )
}


export default Skills;