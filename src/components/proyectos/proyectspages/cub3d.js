import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'react-router-dom'
import Loading from '../../../Loading'
import cubgif from './cub3d.gif'
function Cub3d() {
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
        <h1 className='sectiontitle'>Cub3d</h1>
             <h2>
              
Game made with Ray Casting in C Wolfestein like, simulating 3d environment
               </h2>
               <h2>
              
             Made Using C, minilibx library and Makefile, made from the scratch. Just run in linux and MacOS
                             </h2>

            </section>
          </Col>
          <Col className=''>
          <img className='gif' src={cubgif} alt='gif'/>
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
    

export default Cub3d;