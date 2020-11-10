import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Container from 'react-bootstrap/Container'
import * as THREE from 'three'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../../Loading'
import './index.css'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Coding from './Vivus'

function Index() {
  const [loading, setLoading] = useState(true)
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
  

    setTimeout(() => setLoading(false), 500)
    
    if (loading == false)
    {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 280.00,
          minWidth: 280.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xe6e6e6,
          backgroundColor: 0x1D1D1D,
          points: 5.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }
    }, [vantaEffect,loading])

  return (
<>
{loading == false ?  <Reveal>
   
    <section className='main'>
      <Container fluid className='antimoving justify-content-left'>
        

        <Row className="justify-content-left main-letters spacing-index">
          <Col xs={12} md={6} lg={6}>
            <section >
              <h1 className="text-moving">Hello, <br></br>
              I'm Guillermo,<br></br>
              Full Stack web developer.</h1>
              
             

            </section>
          </Col>
          <Col className='' xs={0} md={6} lg={6}>
            <div  className= 'symbol'>
             <Coding/>

            </div>
          <div className='movingg' ref={myRef}>
          </div>
          </Col>
          <Col className='main-buttons' xs={0} md={4} lg={12}>
              <Link to ='/guillermo-Conde-Portfolio/contact'>Contact me</Link>
          </Col>
        </Row>

      </Container>
      </section>

      </Reveal> : <Loading/>}
    </>
  )
}

export default Index;