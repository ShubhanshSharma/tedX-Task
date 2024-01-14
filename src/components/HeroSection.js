import './HeroSection.css';
import { gsap } from '../../node_modules/gsap/index.js';
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";


// import './Assets/Web_Photo_Editor.jpg'
function HeroSection(){
    gsap.registerPlugin(ScrollTrigger);

    return(
        <div className=''>
            <img src={require('./Assets/transpbg.png')} alt='image'
              className=' w-screen'></img>
        </div>
    )
}

export default HeroSection;