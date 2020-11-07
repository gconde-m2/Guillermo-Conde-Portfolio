import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'react-router-dom'
import Loading from '../../../Loading'
import ninjavideo from './ninjavideo.gif'
function Ninja() {
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
          <Col xs={12} md={4} lg={6}>
            <section >
        <h1 className='sectiontitle'>Ninja</h1>
             <h2>
             2d platformer game hecho con Canvas and full JS. Jump, Attack, Second attack and move, survive until the end.
               </h2>
               <h2>
             Made with full JavaScript from the scratch and Canvas
               </h2>

            </section>
          </Col>
          <Col className='' xs={0} md={4} lg={6}>
             
          <img className='gif' src={ninjavideo} alt='gif'/>
          </Col>
          <Col className='main-buttons'>
          
              
          </Col>
        </Row>

      </Container>
      <section className='whiting'>
      <Link to='/proyects'>Back</Link>

      </section>
      </section>
</Reveal>  : <Loading/>}
    </>
  )
}
    

export default Ninja;