import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="flex_header_content">
                    <h1>Sb.</h1>
                    <ul className="list_header">
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            <li><i style={{marginRight:"5px"}} class="fa-solid fa-house"></i>Home</li>
                        </Link>

                        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                            <li><i style={{marginRight:"5px"}} class="fa-regular fa-id-badge"></i>Contact</li>
                        </Link>
                        <Link to="/project" style={{ textDecoration: "none", color: "white" }}>
                            <li><i style={{marginRight:"5px"}} class="fa-solid fa-shield-dog"></i>Projects</li>
                        </Link>

                        <Link to="/about" style={{ textDecoration: "none", color: "white" }} >
                            <li><i style={{marginRight:"5px"}} class="fa-regular fa-address-card"></i>About</li>
                        </Link>
                        <Link to="#"style={{ textDecoration: "none", color: "white" }}>
                            <li><i style={{marginRight:"5px"}} class="fa-solid fa-flag"></i>Repo</li>
                        </Link>
                    </ul>
                </div>

            </div>


        </>
    )
}



export default Header;

