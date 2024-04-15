import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Video from './pages/video/Video'
import { useState } from 'react'

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <div className>
        <Navbar setSidebar={setSidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/> } />
          <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
