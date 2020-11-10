import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import * as THREE from 'three'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import github from '../layout/images/github.png'
import linkedin from '../layout/images/linkedin.png'
import instagram from '../layout/images/instagram.png'
import './contact.css'
import Loading from '../../Loading'
function Contact() {
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
          minHeight: 400.00,
          minWidth: 800.00,
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

        <section className='about-main'>
          <Container fluid className=' justify-content-left'>

            <Row className="justify-content-left main-letters">
              <Col xs={12} md={12} lg={6}>
                <section >
                  <h1 className='sectiontitle'>Contact</h1>
                  <h2>

                    If you are interested in hiring me, contact me via email: <br /><br />
              Guillermocondemagana@gmail.com
              <br />
                    <br />
              You can also see my github profile or contact me through:
              <br />
                    <br />
                  </h2>
                  <section className=''>
                  <a href='https://github.com/gconde-m2'><img  src = {github}/> </a>
                  <a href='https://www.linkedin.com/in/guillermo-conde/'> <img  className='paddin' style={{width:"32px"}} src = {linkedin}/> </a>
                  <a href='https://www.instagram.com/guilleconde23/'> <img  className='paddin' style={{width:"32px"}} src = {instagram}/> </a>
                  </section>

                </section>
              </Col>
              <Col className='symbol' xs={0} md={4} lg={6}>

          <div className='vantax' ref={myRef}>
          </div>

              </Col>
              <Col className='main-buttons'>


              </Col>
            </Row>

          </Container>
        </section>
      </Reveal> : <Loading/>}
    </>
  )
}


export default Contact;