import React, {useState} from 'react';
import {About, Footer, Header, Skills, Testimonial, Work, ThreeD} from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <div className={`theme-${theme} app`}>
    //     <Navbar />
    //     <Header />
    //     <About />
    //     <Work />
    //     <Skills />
    //     <Testimonial />
    //     <Footer />
    //   </div>
    // </ThemeContext.Provider>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <ThreeD/>
    </div>
  )
}

export default App;