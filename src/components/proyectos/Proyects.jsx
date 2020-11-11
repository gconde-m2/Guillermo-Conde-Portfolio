import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Col from 'react-bootstrap/Col'

import Reveal from 'react-reveal/Reveal'
import buddy from './images/buddy.png'
import Motiv from './images/motiv.png'
import Ninja from './images/jungleninja.png'
import cub3d from './images/cub3d.png'
import printf from './images/printf.png'
import Loading from '../../Loading'
import './proyects.css'
import { Link } from 'react-router-dom'
import portfolio from './images/portfolio.png'
import parallax from './parallax.css'
function Proyects() {
//
    const [proyect, setProyect] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])
    
    return (
        <>
        {loading == false ? <Reveal>
        <section className='todo-all'>
            <Container>
            <div className="wrap">
        <h1 className='sectiontitle margin-title'>My work</h1>
<Row>
<Col md ={12} lg ={4} xl={4}>
<div className="tile"> 
  <img src={buddy}/>
  <div className="text">
  
  <p className="animate-text">One single page application made with React/Node/Express to help dogs to be adopted. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/pro-buddy'>Check it</Link></h2>
  <div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>

  </div>
 </div>

        </Col>
<Col md ={12} lg ={4} xl={4}>
<div className="tile"> 
  <img src={Motiv}/>
  <div className="text">
  
  <h2 className="animate-text"></h2>
  <p className="animate-text">Multi page application made with Handlebars/Node/Express for remember your goals. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/pro-motiv'>Check it</Link></h2>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
  
</Col>

<Col md ={12} lg ={4} xl={4}>
  <div className="tile"> 
  <img src={Ninja}/>
  <div className="text">
 
  <h2 className="animate-text"></h2>
  <p className="animate-text">2D platform game ninja like made in Canvas with full JavaScript. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/pro-ninja'>Check it</Link></h2>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
        </Col>
        </Row>
<Row>
        <Col md ={12} lg ={4} xl={4}>
<div className="tile"> 
  <img src={cub3d}/>
  <div className="text">
  
  <h2 className="animate-text"></h2>
  <p className="animate-text">Wolfestein game like made in C, using Raycasting with minilibx and Makefile. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/pro-cub3d'>Check it</Link></h2>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>

        </Col>
<Col md ={12} lg ={4} xl={4}>
<div className="tile"> 
  <img src={printf}/>
  <div className="text">
  
  <h2 className="animate-text"></h2>
  <p className="animate-text">Recreation in C of printf and libft library using Makefile and no other functions. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/pro-printf'>Check it</Link></h2>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
  
</Col>
<Col md ={12} lg ={4} xl={4}>
  <div className="tile"> 
  <img src={portfolio}/>
  <div className="text">
 
  <h2 className="animate-text"></h2>
  <p className="animate-text">My own Portfolio made with React. </p>
  <h2 className="animate-text"><Link to='/guillermo-Conde-Portfolio/'>Check it</Link></h2>
<div className="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
        </Col>
</Row>
</div>
  
  


            </Container>
</section>

        </Reveal> : <Loading/>}
</>
            
            
            )
}
export default Proyects


{/* <h1 className='sectiontitle margin-title'>My work</h1>
<Row>
<Col md = {4}>
    <div className="card">
        <img src={buddy} alt="Buddy" />
        <div className="card-body">
            <h6>BuddyAPP</h6>
            <p> One single page application made with React/Node/Express to help dogs to be adopted.</p>
            <div>
            <Link to='/guillermo-Conde-Portfolio/pro-buddy'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
<Col md = {4}>
    <div className="card">
        <img src={Motiv} alt="Motiv" />
        <div className="card-body">
            <h6>Motiv</h6>
            <p> Multi page application made with Handlebars/Node/Express for remember your goals.</p>
            <div>
            <Link to='/guillermo-Conde-Portfolio/pro-motiv'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
<Col md = {4}>
    <div className="card">
        <img src={Ninja} alt="ninja" />
        <div className="card-body">
            <h6>Jungle Ninja</h6>
            <p> 2D platform game ninja like made in Canvas with full JavaScript.</p>
            <div>
            <Link to='/guillermo-Conde-Portfolio/pro-ninja'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
</Row>
<Row>
<Col md = {4}>
    <div className="card">
        <img src={cub3d} alt="Cub3d" />
        <div className="card-body">
            <h6>Cub3d</h6>
            <p>Wolfestein game like made in C, using Raycasting with minilibx and Makefile.</p>
            <div>
            <Link to='/guillermo-Conde-Portfolio/pro-cub3d'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
<Col md = {4}>
    <div className="card">
        <img src={printf} alt="Printf" />
        <div className="card-body">
            <h6>Printf & Ft_libft</h6>
            <p>Recreation in C of printf and libft library using Makefile and no other functions.</p>
            <div>
            <Link to='/guillermo-Conde-Portfolio/pro-printf'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
<Col md = {4}>
    <div className="card">
        <img src={portfolio} />
        <div className="card-body">
            <h6>Portfolio</h6>
            <p>My own Portfolio made with React.</p>
            <div>
               <Link to='/guillermo-Conde-Portfolio/'className=''>Check it!</Link>
            </div>
        </div>
    </div>
</Col>
</Row> */}