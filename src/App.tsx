import Topo from './components/topo'
import './App.css'
import '../fontea/css/all.min.css'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

function App() {
  return (
    <>

      <div className="topo "><Topo /></div>
      <aside>
        <Navbar />
      </aside>
      <div className='local'>
        <Outlet />
      </div>


    </>
  )
}

export default App
