import React, { useState, useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Index from './components/index/Index'
import Navbar from './components/layout/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './components/resume/Resume'
import Loading from './Loading'
import About from './components/about/About'
import Proyects from './components/proyectos/Proyects';
import './components/proyectos/proyects.scss'
import Contact from './components/contact/contact'
import Footer from './components/layout/footer';
import Ninja from './components/proyectos/proyectspages/ninja'
import Motiv from './components/proyectos/proyectspages/motiv'
import Buddy from './components/proyectos/proyectspages/buddy'
import Cub3d from './components/proyectos/proyectspages/cub3d'
import Printf from './components/proyectos/proyectspages/printf'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
//
  return (
   <>
    <Navbar/>
    <div className='App'>

    <Switch>
    <Route path="/guillermo-Conde-Portfolio" exact render={() => loading == false ? <Index /> : <Loading/>} />
    <Route path="/guillermo-Conde-Portfolio/resume" render={() => loading == false ?<Resume />: <Loading/> }/>
    <Route path="/guillermo-Conde-Portfolio/aboutme" render={() => loading == false ?<About /> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/proyects" render={() => loading == false ?<Proyects /> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/contact" render={() => loading == false ?<Contact/> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/pro-ninja" render={() => loading == false ?<Ninja/> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/pro-buddy" render={() => loading == false ?<Buddy/> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/pro-cub3d" render={() => loading == false ?<Cub3d/> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/pro-printf" render={() => loading == false ?<Printf/> : <Loading/>}/>
    <Route path="/guillermo-Conde-Portfolio/pro-motiv" render={() => loading == false ?<Motiv/> : <Loading/>}/>
    </Switch>
    
    </div> 
    <Footer/>
    </>
  );
}

export default App;
