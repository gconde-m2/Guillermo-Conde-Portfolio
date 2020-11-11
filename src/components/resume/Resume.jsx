import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './resume.css'
import Reveal from 'react-reveal/Reveal'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ironhack from './ironhack.png'
import ft from './42.png'
import fp from './fp.png'
import femxa from './logo-femxa.png'
import udemy from './udemy.png'
import Graduation from './graduation.png'
import Cased from './case.png'
import Loading from '../../Loading'

function Resume(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])



    return(
      <>

{loading == false ? <Reveal>
        <Container className='main-resume'>

      <VerticalTimeline className='vamos'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    date="2020"
    iconStyle={{ background: 'rgb(128,128,128)', color: '#fff' }}
    icon = {<img className='iconresu' src={Graduation} alt="myLogo" />}
    >
      <img className='logopng' src={ironhack} alt="myLogo" />
    <h3 className="vertical-timeline-element-title">Ironhack</h3>
    <h4 className="vertical-timeline-element-subtitle">Madrid</h4>
    <p>
    Web Development Fullstack Bootcamp
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(128,128,128)', color: '#fff' }}
    icon = {<img className='iconresu' src={Cased} alt="myLogo" />}
    >
    <h3 className="vertical-timeline-element-title">Web developer/designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Madrid, Creativa on Stage</h4>
    <p>
      Main web developer & designer. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - Act."
    iconStyle={{ background: 'rgb(128,128,128)', color: '#fff' }}
    icon = {<img className='iconresu' src={Graduation} alt="myLogo" />}
    >
      <img className='logopng' src={ft} alt="myLogo" />
    <h3 className="vertical-timeline-element-title">42 School</h3>
    <h4 className="vertical-timeline-element-subtitle">Madrid, Telefónica</h4>
    <p>
      Software and web development (C ,Kubernetes, Docker)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(128,128,128)', color: '#fff' }}
    icon = {<img className='iconresu' src={Graduation} alt="myLogo" />}
    >
       <img className='logopng' src={udemy} alt="myLogo" />
    <h3 className="vertical-timeline-element-title">Curses HTML/React/JS</h3>
    <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
    <p>
      HTML,Docker,React,JS,CSS...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(128,128,128)', color: '#fff' }}
    icon = {<img className='iconresu' src={Graduation} alt="myLogo" />}
    >
       <img className='logopng' src={femxa} alt="myLogo" />
      <img src={Graduation} alt="myLogo" />
    <h3 className="vertical-timeline-element-title">C.P. Programacion de sistemas (Java) </h3>
    <h4 className="vertical-timeline-element-subtitle">Madrid, Femxa S.L</h4>
    
    <p>
    Java, PhP, MySQL, HTML, CSS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon = {<img className='iconresu' src={Graduation} alt="myLogo" />}
    >
       <img className='logopng' src={fp} alt="myLogo" />
    <h3 className="vertical-timeline-element-title">F.P Desarrollo de aplicaciones multiplataforma</h3>
    <h4 className="vertical-timeline-element-subtitle">Lázaro Cárdenas</h4>
    <p>
      BBDD, HTML, CSS, C , C++
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
    />
</VerticalTimeline>
    </Container>
    </Reveal> : <Loading/>}
    </>
    )
  }
  export default Resume