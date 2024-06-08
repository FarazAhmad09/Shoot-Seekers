import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import about_us_img from '../component/images/about-us-img.png';


export default function aboutus() {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#f1fdf7', marginTop: 70 }}>
                <Container >
                    <Row>
                        <Col lg={5} >
                            <h1 className="h2 best-part-text"  >About us</h1>
                            <div className=' mt-3 workflow-list' >
                                <p className='mb-4'>Welcome to Shoot Seekers, a platform born from a profound love for the art of photography. Our journey began with a 
                                simple vision: to capture the essence of life's most precious moments and transform them into timeless memories. With years of experience
                                 and a keen eye for detail, we specialize in a myriad of photography styles, from portraits to landscapes, events to artistic compositions. 
                                 Every click of our camera is infused with passion and dedication, as we strive to not just take photographs, but to craft stories that resonate
                                  with authenticity and emotion. At Shoot Seekers, we believe that each image holds a unique narrative, waiting to be unveiled and 
                                  cherished. Join us as we embark on this visual odyssey, where every frame tells a tale, and every picture paints a thousand words.</p>
                            </div>

                        </Col>
                        <Col lg={7} style={{display: 'flex', justifyContent: 'center'}} >
                            <img src={about_us_img} alt=""  style={{ marginTop: 140, marginBottom: 80, width: "95%" }} />
                        </Col>
                    </Row>
                </Container>
            </Container>


        </>
    )
}
