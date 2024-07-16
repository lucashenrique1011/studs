import "./navbar.css"
import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <div className="navegacao">
            <div className="link">
                <Link to={"/html"} className="dentro" > <i className="fa-brands fa-html5 iconeH"></i> HTML5</Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" > <i className="fa-brands fa-css3 iconeH"></i> CSS3</Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" > <i className="fa-brands fa-js iconeH "></i> javaScript</Link>
            </div>
        </div>
    )
}

export default Navbar