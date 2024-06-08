import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";


import profile_img from '../component/images/potrait-img.png';
// import whatsapp_icon from '../component/images/whatsapp-icon.png';

export default function Setting() {




    const [content, setContent] = useState(
        <>
            <Container >
                <Row>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="text"
                                label="Full Name"

                            />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="text"
                                label="Last Name"

                            />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="text"
                                label="Phone no"

                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="text"
                                label="Email Address"

                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">@gmail.com</span>
                                    </div>
                                }
                            />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="textarea"
                                label="Address"

                            />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="textarea"
                                label="About"

                            />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </Col>
                </Row>


                <Row className='mt-5'>
                    <Col>
                        <div className="input-div">
                            <input className="img-input" name="file" type="file" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                        </div>
                        <h1 className='h6 mt-1 img-upload'>Img Upload</h1>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col>
                        <Button color="" style={{ color: 'white', marginBottom: 10, backgroundColor: "#fdcc0a " }}>
                            Save
                        </Button>
                    </Col>
                </Row>

            </Container>

        </>


    );

    const handleButtonClick = (num) => {
        switch (num) {

            case 1:
                setContent(
                    <>

                        <Container >
                            <Row>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="text"
                                            label="Full Name"

                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="text"
                                            label="Last Name"

                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="text"
                                            label="Phone no"

                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="text"
                                            label="Email Address"

                                            endContent={
                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-default-400 text-small">@gmail.com</span>
                                                </div>
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="textarea"
                                            label="Address"

                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col>
                                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                        <Input
                                            type="textarea"
                                            label="About"

                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </Col>
                            </Row>


                            <Row className='mt-5'>
                                <Col>
                                    <div className="input-div">
                                        <input className="input img-input" name="file" type="file" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                                    </div>
                                    <h1 className='h6 mt-1 img-upload'>Img Upload</h1>
                                </Col>
                            </Row>

                            <Row className='mt-5'>
                                <Col>
                                    <Button color="" style={{ color: 'white', marginBottom: 10, backgroundColor: "#fdcc0a " }}>
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Container>

                    </>
                );
                break;

            default:
                setContent(null);
                break;
        }
    };

    return (
        <>
            <Container fluid className='user-profile-main'>
                {/* <img src={whatsapp_icon} className='whatsapp-icon' alt="" href="https://web.whatsapp.com/" /> */}
                <Container>
                    <Row>
                        <Col lg={4} style={{ display: 'grid', justifyContent: 'center' }}>
                            <div className="card-container">
                                <div className="user-image">
                                    <img src={profile_img} alt="" width={30} />
                                </div>
                                <h2 className="user-name">Shoot Seekers</h2>
                                <h2 className="designation-name">Photographer</h2>
                                <h2 className="email h6">Email address</h2>
                                <p className="user-p mb-2">Shootseekers@gmai.com</p>
                                <h2 className="phone h6">Phone</h2>
                                <p className="user-p mb-2">0303 0303030</p>
                                <h2 className="phone h6">About us</h2>
                                <p className="user-p mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                </p>
                                <h2 className="status h6">Address</h2>
                                <p className="user-p mb-2">
                                    71 Pilgrim Avenue Chevy Chase, MD 20815
                                </p>
                                <h2 className="Status h6">Status</h2>
                                <p className="user-p mb-1">
                                    Online

                                </p>
                            </div>
                        </Col>
                        <Col lg={8} className="main">
                            <div className='bg-user-profile' >
                                <button onClick={() => handleButtonClick(1)} className='portfolio'>Setting</button>
                            </div>
                            <div className='user-content'>
                                <div style={{ marginTop: '20px' }}>{content}</div>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </Container>




        </>
    );
}