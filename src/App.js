import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import React from 'react';
import HeroSection from './components/HeroSection';
import TedLogo from './components/TedLogo.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { gsap } from 'gsap/index.js';
// import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

const { useRef, useEffect } = React;




gsap.registerPlugin(ScrollTrigger);


function App() {


  return (
    <div className="App relative flex text-center items-center flex-col h-[1500px]">
      <HeroSection className=' relative'/>
      <h1 className=' font-normal  text-[300px]  text-white fixed'>THEME</h1>
      <TedLogo id='logoAnimation' className=''/>
    </div>
  );
}

export default App;
