import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Button} from "@nextui-org/button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navbar, Container, Nav } from 'react-bootstrap';
import profile_menu_img from './images/profile-img.png';
import shoot_seekers_logo from './images/shoot-seekers-logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import notify_img from './images/discover-img-1.jpg';
import notify_icon from './images/notification-icon.png';


export default function navbar() {
    return (
        <>
            <Navbar expand="lg" fixed="top" className='main-nav'>
                <Container fluid>
                    <Navbar.Brand style={{ marginLeft: '130px' }}>
                        <Link className="" to="/">
                            <img to="/" src={shoot_seekers_logo} alt="" width={190} />
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ borderColor: 'white' }}>
                        <span className="navbar-toggler-icon" style={{ backgroundColor: 'white' }}></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" ml-auto mz-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item>
                                <Link className="navbar-item" to="/">
                                    Home
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="navbar-item" to="/aboutpage">
                                    About us
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="navbar-item" to="/discoverpage">
                                    Discover
                                </Link>
                            </Nav.Item>
                        </Nav>


                        <Button className='login-btn' >
                            <Link to='/loginpage'>
                                Log in
                            </Link>
                        </Button>


                        <div className="" >
                            <div className="dropdown">
                                <button className="btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"   >
                                    <img src={notify_icon} alt="avatar" className="avatar" style={{ marginTop: 7, }} />
                                </button>
                                <ul className="dropdown-menu notify-menu" role="menu" aria-labelledby="menu1"  >

                                    <li role="presentation">

                                        <Row >
                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>

                                            <Col xs={7}>
                                                <h1 className='h6 notify-name'>Robert Joe</h1>
                                                <p className='h6 notify-p'>Like your portfolio</p>
                                            </Col>

                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>
                                        </Row>

                                        <Row className='mt-3'>
                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>

                                            <Col xs={7}>
                                                <h1 className='h6 notify-name'>Lisa Nor</h1>
                                                <p className='h6 notify-p'>Comment your portfolio</p>
                                            </Col>

                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>
                                        </Row>

                                        <Row className='mt-3'>
                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>

                                            <Col xs={7}>
                                                <h1 className='h6 notify-name'>Nano ja</h1>
                                                <p className='h6 notify-p'>Share your portfolio</p>
                                            </Col>

                                            <Col xs={2}>
                                                <img src={notify_img} alt="" style={{ width: '50px', marginLeft: 10 }} />
                                            </Col>
                                        </Row>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <DropdownButton
                            className="no-arrow-dropdown" // Add custom class
                            style={{ marginRight: 130, marginTop: 5, marginBottom: 5 }}
                            id="profile-dropdown"
                            title={<img src={profile_menu_img} alt="avatar" className="avatar" />}
                        >
                            <Dropdown.Item>
                                <Link className="" to="/profile">
                                    Profile
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link className="" to="/profile">
                                    Portfolio
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link className="" to="/settingpage">
                                    Setting
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link className="" to="/loginpage">
                                    Logout
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
