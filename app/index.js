import domready from 'domready';
import TweenMax from 'gsap';
import router from 'brindille-router';
import {verbose} from 'config';

/*
  Sections
 */
import Home from 'sections/home';
import About from 'sections/about';
import Lab from 'sections/lab';

/* 
  Layouts
 */
import header from 'layouts/header';

/* 
  Bootstrap app
 */
domready(() => {

  // Layouts
  header.appendTo(document.querySelector('header'));

  console.log('router init', router, router.TRANSITION_OUT_AND_AFTER_IN);

  // Routing
  router.init({
    el: document.querySelector('#view'),
    debug: verbose,
    hashbang: false,
    routes: {
      '/': {
        section: Home,
        title: 'Brindille - Home',
        description: 'Welcome to Brindille',
        transitionMode: router.TRANSITION_OUT_AND_AFTER_IN
      },
      '/about': {
        section: About,
        title: 'Brindille - About',
        description: 'Welcome to Brindille',
        transitionMode: router.TRANSITION_OUT_AND_AFTER_IN
      },
      '/lab': {
        section: Lab,
        title: 'Brindille - Lab',
        description: 'Welcome to Brindille',
        transitionMode: router.TRANSITION_OUT_AND_AFTER_IN
      }
    }
  });
});
