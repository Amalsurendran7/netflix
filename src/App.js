import React from 'react'
import Nav from './components/nav/nav'
import './NavBar.css'
import './App.css'
import Banner from './components/banner/Banner'
import Row from './components/Row/Row'
import Footer from './components/Row/footer/Footer'
import './Row.css'

import './Banner.css'
function App() {
  return (
    <>

   <Nav/>
   <Banner/>
   <Row title="Originals"/>
   <Row title="Action" small/>
   <Row title="Romantic Movies" rom/>
  
      </>
   
  )
}

export default App
