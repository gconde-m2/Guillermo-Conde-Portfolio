import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import foto from './foto2.png'
import './about.css'
import Loading from '../../Loading'
function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
     <> 
{loading == false ? <Reveal>

<section className='about-main'>
      <Container fluid className=' justify-content-left'>
        
        <Row className="justify-content-left main-letters">
          <Col xs={12} md={12} lg={6}>
            <section >
        <h1 className='sectiontitle'>About me</h1>
             <h2>
               My name is Guillermo Conde, I am a web programmer and C developer.<br></br><br></br> Currently living in Madrid, looking for a web developer junior job.<br></br>
               Problem solver, enthusiastic, decisive, dynamic and with great social and communication skills.<br></br> 42 school && Ironhack Bootcamp
               </h2>
             

            </section>
          </Col>
          <Col className='myimage' xs={0} md={6} lg={6}>
             
        <img className='image' src={foto}/>
          </Col>
          <Col className='main-buttons'>
          
              
          </Col>
        </Row>

      </Container>
      </section>
</Reveal>  : <Loading/>}
    </>
  )
}
    

export default About;