import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import camera_man from '../component/images/camera-man-img.jpg';

export default function best_part() {
    return (
        <>

            <Container fluid style={{ backgroundColor: '#FFF0B3',marginTop: 70}}>
                <Container >
                    <Row>
                        <Col lg={6} >
                            <h1 className="h2 best-part-text"  >The best part? Everything.</h1>
                            <div className=' mt-3 workflow-list' >


                                <li className='sider-arrow budget-text'>Stick to your budget.</li>
                                <p className='mb-4'>Find the ideal photography services for every price point. With project-based pricing, there are no hourly rates to worry about.</p>
                                <li className='sider-arrow budget-text'>Get quality work done quickly.</li>
                                <p className='mb-4'>Hand your project over to our talented freelancers and get long-lasting results in minutes.</p>
                                <li className='sider-arrow budget-text'>Pay when you're happy.</li>
                                <p className='mb-4'>Say goodbye to surprises with upfront quotes. Your payments are only released when you're completely satisfied with the work.</p>
                                <li className='sider-arrow budget-text'>24/7 support.</li>
                                <p className='mb-4'>Our round-the-clock support team is here to assist you anytime, anywhere.</p>
                                <li className='sider-arrow budget-text'>Ready to capture your vision? Start exploring our services now!</li>
                            </div>

                        </Col>
                        <Col lg={5} style={{ display: 'flex', justifyContent: 'end'}}>
                            <img src={camera_man} alt="" width={380} style={{marginTop: 70, marginBottom: 80}}  />
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
            
        </>
    )
}
