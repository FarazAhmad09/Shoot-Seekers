import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const gigData = [
    {
        imgSrc: "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png",
        title: "I will do mobile app ui design professional and creative",
        sellerName: "Soot Seekers",
        level: "Level 2",
        rating: "4.8",
        numRatings: "221",
        price: "30,000"
    },
    {
        imgSrc: "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png",
        title: "I will do mobile app ui design professional and creative",
        sellerName: "Soot Seekers",
        level: "Level 2",
        rating: "4.8",
        numRatings: "221",
        price: "30,000"
    },
    {
        imgSrc: "https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png",
        title: "I will do mobile app ui design professional and creative",
        sellerName: "Soot Seekers",
        level: "Level 2",
        rating: "4.8",
        numRatings: "221",
        price: "30,000"
    },
    // Add more gig data objects as needed
];

const GigCard = ({ gig }) => (
    <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <Link className="" to="/giginfopage">

            <div className="gig-home-card seller-gig-card mb-3">
                <span>
                    <div className="header-gig-card">
                        <a href="/">
                            <div>
                                <figure>
                                    <img src={gig.imgSrc} alt={gig.title} />
                                </figure>
                            </div>
                            <div className="rating-container mb-2 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: "bold" }} className='ml-2'>{gig.sellerName}</span>
                                <span className='mr-2 gig-home-level'>{gig.level}</span>
                            </div>
                            <section className="gig-title">
                                <header>
                                    <h3>{gig.title}</h3>
                                </header>
                            </section>
                            <div className="rating-container mb-2 ml-2 ">
                                <svg style={{ color: "#f3da35" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20}><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill="#f3da35"></path></svg>
                                <span style={{ fontWeight: "bold" }} className='ml-1'>{gig.rating}</span><span className='ml-1'>({gig.numRatings})</span>
                            </div>
                        </a>
                    </div>
                    <a href="/" className="gig-price">
                        <small>From PKR</small>
                        <span className='ml-2'>{gig.price}</span>
                    </a>
                </span>
            </div>
        </Link>
    </Col>

);

export default function Gig() {
    return (
        <>
            <Container style={{ marginTop: 150 }}>
                <Row>
                    <Col>
                        <h1 className='h3 ' style={{ fontWeight: 'normal' }}>Search by <span className='gig-search-text'>Landscape Photography</span></h1>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-4' >
                <Row>
                    {gigData.map((gig, index) => (
                        <GigCard key={index} gig={gig} />
                    ))}
                </Row>
                <Row>
                    {gigData.map((gig, index) => (
                        <GigCard key={index} gig={gig} />
                    ))}
                </Row>
            </Container>
        </>
    );
}
