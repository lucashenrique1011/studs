import Topo from './components/topo'
import './App.css'
import '../fontea/css/all.min.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    
        <div className="topo "><Topo /></div>
          <Outlet/>
      
    </>
  )
}

export default App
