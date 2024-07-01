import { Link } from "react-router-dom"
import "./titulo.css"

function Titulos(prop:any) {
    return (
        <div className="caixa-maior">
            <Link to={"/Html"} className="caixas">
                <div className="temas">
                    <div className="superior">
                        <i className="fa-brands fa-html5 iconeH"></i>
                    </div>
                    <div className="inferior">
                        <h2>{prop.titulo}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Titulos