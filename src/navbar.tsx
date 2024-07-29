import "./navbar.css"
import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <div className="navegacao">
            <div className="link">
                <Link to={"/html"} className="dentro" >
                    <i className="fa-brands fa-html5 iconeH" style={{ color: 'red' }}></i> HTML5
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-css3 iconeH" style={{ color: 'blue' }}></i> CSS3
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-js iconeH " style={{ color: "yellow" }} ></i> javaScript
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-bootstrap iconeH " style={{ color: "rgb(167, 61, 216)" }} ></i> bootstrap
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-java iconeH " style={{ color: "white" }} ></i>
                    java
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-python iconeH " style={{ color: "yellow" }} ></i> python
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-Ruby iconeH " style={{ color: "red" }} ></i> ruby
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >
                    <i className="fa-brands fa-c iconeH " style={{ color: "blue" }} ></i> C#
                </Link>
            </div>
        </div>
    )
}

export default Navbar