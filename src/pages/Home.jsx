import React from 'react';
import Slider from '../Component/Slider';
import Main from '../Component/Main';
import Service from '../Component/Service';
import About from './About';

export const Home = () => {
  return <>
  <Slider />
  <Main />
  <Service/>
  <About/>
 
  </>
};
export default Home;