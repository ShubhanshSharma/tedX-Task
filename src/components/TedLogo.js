import React from 'react';
import './TedLogo.css';
// import { gsap } from '../../node_modules/gsap/index.js';
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { useRef, useEffect } = React;



gsap.registerPlugin(ScrollTrigger);

function TedLogo(){

    const logoRef = useRef(null);

   
    useEffect(() =>{
        const el = logoRef.current;
        gsap.fromTo(el, {opacity:0}, 
            
            {opacity: 1, duration: 4, scrollTrigger:{trigger: el, start:"600px 128px", end:"800px 128px", scrub: true }})
    }, []);



    return(
        <div className=' w-96 z-20 fixed top-20'>
            <img id='logoAnimation' ref={logoRef} className=' opacity-0' src={require('./Assets/logo-black.png')}></img>
        </div>
    )
}

export default TedLogo;