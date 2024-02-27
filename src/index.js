import navbar from './navbar';
import scrollEffect from './scrollEffect';
import { mobileSlider, slider } from './slider';
import { ScrollSpy } from 'bootstrap';

import './style.scss';

const MOBILE_SLIDER = document.getElementById('mobileSlider');
const SLIDER_BREAKPOINT = '(min-width: 768px)';
const ELEMENTS_EFFECT = document.querySelectorAll('.animate__animated.hidden')

window.addEventListener('DOMContentLoaded', function() {  
  navbar();
  mobileSlider(MOBILE_SLIDER, SLIDER_BREAKPOINT);
  slider();
  scrollEffect(ELEMENTS_EFFECT, 'animate__fadeInUp')
})










  



















