import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navbar, Container, Nav } from 'react-bootstrap';
import profile_menu_img from './images/profile-img.png';
import shoot_seekers_logo from './images/shoot-seekers-logo.png';
import notify_img from './images/discover-img-1.jpg';
import notify_icon from './images/notification-icon.png';




export default function Gignavbar() {


    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const term = event.target.value.trim();
        setSearchTerm(term);

        // For demonstration, let's assume suggestions are hardcoded
        const hardcodedSuggestions = ['Nature Photography', 'Landscape Phototgraphy', 'Wildlife Photography', 'Mountains Photography', 'Product photography', 'Adventure Photography', 'Food Photography'];
        const filteredSuggestions = hardcodedSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(term.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };




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
                            className=" ml-auto mx-auto"
                            navbarScroll
                        >
                            <Nav.Item>
                            </Nav.Item>
                        </Nav>

                        <section className="gig-search-bar">
                            <div className="search-content">
                                <form action="#" className="search-form">
                                    <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." required />
                                    {searchTerm && (
                                        <div className="suggestions">
                                            {suggestions.map((suggestion, index) => (
                                                <div key={index} className="suggestion" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
                                            ))}
                                        </div>
                                    )}
                                    <button className="search-button" type="submit">
                                        <Link to="/gigpage">
                                            Search
                                        </Link>
                                    </button>
                                </form>
                            </div>
                        </section>


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
    )
}
