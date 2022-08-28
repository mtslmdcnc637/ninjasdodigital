import './App.css'
import TopBar from './components/TopBar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './components/pages/Blog'
import Freelas from './components/pages/Freelas'
import Footer from './components/Footer'
import Jobs from './components/pages/Jobs'
import About from './components/pages/About'


function App() {
  return (
    <Router>
      <TopBar/>

    <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='/components/pages/Freelas' element={<Freelas/>}/>
      <Route path='/components/pages/Jobs' element={<Jobs/>}/>
      <Route path='/components/pages/About' element={<About/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
