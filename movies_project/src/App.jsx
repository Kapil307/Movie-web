import './css/App.css'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './component/NavBar'
import { MovieProvider } from './cotext/MovieContent'
import './css/movieCard.css';
function App() {
 

  return (
    <>
    <MovieProvider>
    <NavBar/>
    <main className='mainContain'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
    </>
  )
}

export default App
