import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/free-mode';

export function mobileSlider(element, breakpoint) { 
    const wrapper = element.firstElementChild;
    const slides = Array.from(wrapper.children);

    let swiper = undefined;

    let wrapperClass = wrapper.className;
    let slideClass = slides[0].className;

    let windowSize = document.documentElement.clientWidth;
    let bpSize = breakpoint.match(/\d+/)[0];

    const sliderInit = () => {
        element.classList.add('mobile-swiper');
        wrapper.className = 'swiper-wrapper';  
        slides.forEach(element => element.className = 'swiper-slide');
        swiper = new Swiper('.mobile-swiper', {
            freeMode: true,
            spaceBetween: 24,
            slidesPerView: 'auto',
            modules: [FreeMode]           
        });
    }

    const sliderDestroy = () => {
        element.classList.remove('mobile-swiper');
        wrapper.className = wrapperClass;  
        slides.forEach(element => element.className = slideClass);
        if (swiper !== undefined) swiper.destroy(true, true);
    }

    const switchSlider = () => {
        windowSize = document.documentElement.clientWidth;

        if (windowSize < bpSize) {           
            sliderInit();
        } else {
            sliderDestroy();
        }
    }
    
    if (windowSize < bpSize) {       
        sliderInit();
    } 

    breakpoint = window.matchMedia(breakpoint);    
    breakpoint.addEventListener('change', switchSlider);
}

export function slider() {
    let swiper = new Swiper('.swiper', {
        freeMode: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        modules: [FreeMode]   
    })
}