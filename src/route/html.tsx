import './html.css'
import { Link } from 'react-router-dom'

function Html() {
    return (
        <div className='corpo-do-html'>
            <Link to={"/"} ><i className="fa-solid fa-arrow-left"></i></Link>
            <h1>html</h1>
        </div>
    )
}

export default Html