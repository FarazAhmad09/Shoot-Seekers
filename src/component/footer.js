import React from 'react'
import shoot_seekers_footer_logo from './images/shoot-seekers-footer-logo.png';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function footer() {
    return (
        <>

            <MDBFooter  className='text-center text-lg-start text-muted ' bgColor='light' style={{ marginTop: 70 }}>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5 '>
                        <MDBRow className='mt-3'>

                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <img src={shoot_seekers_footer_logo} alt="" width={50} />
                                </h6>
                                <p className="footer-p">
                                    Welcome to Shoot Seekers, where moments become memories. With our passion and precision, we craft timeless images that speak volumes. Thank you for letting us be part of your story.
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 footer-h6'>Categories</h6>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Portrait Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Wedding Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Landscape Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Wildlife Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Fashion Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        Commercial Photography
                                    </a>
                                </p>
                            </MDBCol>

                          
                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 footer-h6'>Categories</h6>

                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                    Commercial Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-resetfooter-p'>
                                    Fine Art Photography
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-resetfooter-p'>
                                    Event Photograph
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                    Street Photography
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset footer-p'>
                                    Astro photography
                                    </a>
                                </p>
                            </MDBCol>


                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 footer-h6 '>Pages</h6>
                                <p className='mb-3'>
                                    <a href='#!' className='text-resetfooter-p'>
                                        Home
                                    </a>
                                </p>
                                <p className='mb-3'>
                                    <a href='#!' className='text-reset footer-p'>
                                        About us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset footer-p'>
                                        Discover
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 footer-h6'>Contact</h6>
                                <p className='mb-3 footer-p'>

                                    New York, NY 10012, US
                                </p>
                                <p className='mb-3 footer-p'>

                                    info@example.com
                                </p>
                                <p className='mb-3 footer-p'>
                                    + 01 234 567 88
                                </p>
                                <p className='footer-p'>
                                    + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4 footer-p' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold footer-h6' href='https://mdbootstrap.com/'>
                        Shoot Seekers
                    </a>
                </div>
            </MDBFooter>


        </>
    )
}
