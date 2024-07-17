import './linguagens.css'
import { Link } from 'react-router-dom'

function Html() {
    return (
        <div className='titulo'>
            <Link to={"/"} ><i className="fa-solid fa-arrow-left voltar"></i></Link>
            <h1>html</h1>
        </div>
    )
}

export default Html