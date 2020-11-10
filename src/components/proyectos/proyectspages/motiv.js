import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'react-router-dom'
import Loading from '../../../Loading'
import motivvideo from './motivvideo.gif'
function Motiv() {
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
          <Col xs={12} md={12} lg={12} xl={6}>
            <section >
        <h1 className='sectiontitle'>Motiv</h1>
             <h2>
               
Application to remember and encourage your goals, with music, images and phrases
               </h2>
               <h2>
               
Made with Handlebars, JavaScript, Express, MongoDB, Node.js
               
                </h2>
             

            </section>
          </Col>
          <Col className='' xs={0} md={12} lg={12} xl={6}>
             
          <img className='gif' src={motivvideo} alt='gif'/>
          </Col>
          <Col className='main-buttons'>
          
              
          </Col>
        </Row>

      </Container>
      <section className='whiting'>
      <Link to='/guillermo-Conde-Portfolio/proyects'>Back</Link>

      </section>
      </section>
</Reveal>  : <Loading/>}
    </>
  )
}
    

export default Motiv;