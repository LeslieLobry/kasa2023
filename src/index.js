import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/about'
import Header from './components/Header/header'
import Error from './components/Error/error'
import Logement from './pages/Logement/logement'


// import Logement from './components/Logements/logements'
import Footer from './components/Footer/footer'
import '../src/style/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Logement/:id" element={<Logement />}/>
      </Routes>
      <Footer/> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)