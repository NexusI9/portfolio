import './sheets/sheet.scss';
import './sheets/projects_sheet.scss';
import './sheets/midscreen.scss';
import './sheets/smallscreen.scss';

import PROJECTS from './lib/projects.js';

import { useRoutes } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import React from 'react';
import Loader from './components/loader';
import { getColorOfCategory, setFaviconColor } from './lib/utils';

import { Menu, Footer, Filter, Socials } from './components/statics';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';

const Project = React.lazy(() => import('./pages/project') );
const Map = React.lazy(() => import('./pages/map') );
const Showreel = React.lazy(() => import('./pages/showreel') );
const Home = React.lazy(() => import('./pages/home') );
const Resume = React.lazy(() => import('./pages/resume') );
const Contact = React.lazy(() => import('./pages/contact') );

function App() {

  const routes = [
    {path: '*', element: <Home projects={PROJECTS} onLoad={ () => { setTheme({skin:'default'}); setHomebutton(false); }}/>},
    {path:'/', element: <Home projects={PROJECTS} onLoad={ () => { setTheme({skin:'default'}); setHomebutton(false); }} /> },
    {path:'/project/:title', element: <Project onLoad={ obj => { setTheme({color:obj.color, skin:obj.skin}); setHomebutton(true) } }  /> },
    {path:'/resume', element: <Resume onLoad={ () => { setTheme({color:'red'}); setHomebutton(false);  }} /> },
    {path:'/contact', element: <Contact onLoad={ () => { setTheme({color:'purple'}); setHomebutton(false);  }} /> },
    {path:'/showreel', element: <Showreel onLoad={ () => { setTheme({skin:'dark'}); setHomebutton(true); }} /> },
    {path:'/map', element: <Map projects={PROJECTS} /> }
  ]

  const location = useLocation();

//  const element = useRoutes(routes);
  const [theme, setTheme] = useState({
    color: getColorOfCategory('initial'),
    skin: 'default',
    customColor: null
  });
  const [homebutton, setHomebutton] = useState(false);


  useEffect( () => {

    //switch body attribute for CSS change to take effects
    const body = document.querySelector("body");
    body.setAttribute('data-color',theme.color || getColorOfCategory('initial') );
    body.setAttribute('data-skin',theme.skin || 'default');

    const favicon = document.getElementById('favicon');
    setFaviconColor(favicon, theme.color);

  },[theme]);


  return (
      <div id='wrapper'>
        <Suspense fallback={ <Loader /> }>
          <AnimatePresence exitBeforeEnter initial={false}>
              <Routes location={location} key={location.pathname}>
                { routes.map( (route,i) => <Route key={'route'+route.path+i} path={route.path} element={route.element} /> ) }
              </Routes>
          </AnimatePresence>
        </Suspense>
        <Menu projects={PROJECTS} homebutton={homebutton} />
        <Filter />
      </div>
  );
}

export default App;
