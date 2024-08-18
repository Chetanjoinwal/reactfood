import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { ThemeProvider } from 'styled-components';
import Services from './pages/Services';



export const App = () => {

const theme = {

  colors:{
    heading :"#460809",
    text :"#1e1e1e",
    white:"#fff",
    black:"#000",
    helper:"#0f208d",
    btn:"#e668b9",

  }
}

  return (
  <ThemeProvider theme={theme}>
<BrowserRouter>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/services" element={<Services />} />
  <Route path="/*" element={<Error />} />
</Routes>
<Footer />
</BrowserRouter>
</ThemeProvider>
  )
};
export default App;