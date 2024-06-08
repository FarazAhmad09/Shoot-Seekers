import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gig_info_profile from './images/shoot-seekers-logo-icon.png';
import Carousel from 'react-bootstrap/Carousel';
import portfolio_img from '../component/images/about-us-img.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Modal, Button } from 'react-bootstrap';
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";


import { notification } from 'antd';

export default function Giginfo() {

    const openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'Your Message was send',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };


    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);


    const [content, setContent] = useState(
        <>

            <Row className='mt-1'>
                <Col>
                    <h1 className='h4 gig-info-user-info' style={{ marginLeft: 10 }}>Silver Packege</h1>

                </Col>
                <Col className="d-flex justify-content-end">
                    <h1 className='h4 gig-info-user-info' style={{ marginRight: 30 }}>69,34</h1>
                </Col>

                <Row className='mt-4'>
                    <Col>
                        <h1 className='h6 gig-info-user-gig-about' style={{ marginLeft: 10 }}>1-hour photo session at a location of choice</h1>
                        <div className="rating-container mb-2 mt-4">
                            <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                            <span className='ml-2 day-delivery'> 1 Day Delivery </span>
                            <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{ width: '16px', height: '16px', marginLeft: 15 }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                            <span className='ml-2 day-delivery'> Revision</span>
                        </div>

                    </Col>
                </Row>
                <Col className="mb-4">
                    <li className="qSePHwK flex flex-items-center mb-2 mt-3">
                        <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                            </svg>
                        </span>
                        <span className='ml-2 day-delivery'>1 photography</span>
                    </li>
                    <li className="qSePHwK flex flex-items-center mb-2">
                        <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                            </svg>
                        </span>
                        <span className='ml-2 day-delivery'>Responsive design</span>
                    </li>
                    <li className="qSePHwK flex flex-items-center mb-2">
                        <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                            </svg>
                        </span>
                        <span className='ml-2 day-delivery '>Prototype</span>
                    </li>
                    <li className="qSePHwK flex flex-items-center ">
                        <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                            </svg>
                        </span>
                        <span className='ml-2 day-delivery'>Include source file</span>
                    </li>
                    <button className="countione">
                        <span>Continue</span>
                    </button>
                    <div>
                        <button className="custom" onClick={handleModalShow}>
                            <span>Custom Offer</span>
                        </button>
                    </div>
                </Col>
            </Row>


        </>


    );

    const handleButtonClick = (num) => {
        switch (num) {

            case 1:
                setContent(
                    <>

                        <Row className='mt-1'>
                            <Col>
                                <h1 className='h4 gig-info-user-info' style={{ marginLeft: 10 }}>Silver Packege</h1>

                            </Col>
                            <Col className="d-flex justify-content-end">
                                <h1 className='h4 gig-info-user-info' style={{ marginRight: 30 }}>57,10</h1>
                            </Col>

                            <Row className='mt-4'>
                                <Col>
                                    <h1 className='h6 gig-info-user-gig-about' style={{ marginLeft: 10 }}>1-hour photo session at a location of choice</h1>
                                    <div className="rating-container mb-2 mt-4">
                                        <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> 1 Day Delivery </span>
                                        <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{ width: '16px', height: '16px', marginLeft: 15 }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> Revision</span>
                                    </div>

                                </Col>
                            </Row>
                            <Col className="mb-4">
                                <li className="qSePHwK flex flex-items-center mb-2 mt-3">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>1 photography</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Responsive design</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery '>Prototype</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center ">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Include source file</span>
                                </li>
                                <button className="countione">
                                    <span>Continue</span>
                                </button>
                                <div>
                                    <button className="custom" onClick={handleModalShow}>
                                        <span>Custom Offer</span>
                                    </button>
                                </div>
                            </Col>
                        </Row>

                    </>
                );
                break;
            case 2:
                setContent(
                    <>

                        <Row className='mt-1'>
                            <Col>
                                <h1 className='h4 gig-info-user-info' style={{ marginLeft: 10 }}>Gold Packege</h1>

                            </Col>
                            <Col className="d-flex justify-content-end">
                                <h1 className='h4 gig-info-user-info' style={{ marginRight: 30 }}>19,34</h1>
                            </Col>

                            <Row className='mt-4'>
                                <Col>
                                    <h1 className='h6 gig-info-user-gig-about' style={{ marginLeft: 10 }}>1-hour photo session at a location of choice</h1>
                                    <div className="rating-container mb-2 mt-4">
                                        <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> 1 Day Delivery </span>
                                        <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{ width: '16px', height: '16px', marginLeft: 15 }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> Revision</span>
                                    </div>

                                </Col>
                            </Row>
                            <Col className="mb-4">
                                <li className="qSePHwK flex flex-items-center mb-2 mt-3">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>1 photography</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Responsive design</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery '>Prototype</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center ">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Include source file</span>
                                </li>
                                <button className="countione">
                                    <span>Continue</span>
                                </button>
                                <div>
                                    <button className="custom" onClick={handleModalShow}>
                                        <span>Custom Offer</span>
                                    </button>
                                </div>
                            </Col>
                        </Row>

                    </>

                );
                break;
            case 3:
                setContent(
                    <>
                        <Row className='mt-1'>
                            <Col>
                                <h1 className='h4 gig-info-user-info' style={{ marginLeft: 10 }}>VIP Packege</h1>

                            </Col>
                            <Col className="d-flex justify-content-end">
                                <h1 className='h4 gig-info-user-info' style={{ marginRight: 30 }}>30,00</h1>
                            </Col>

                            <Row className='mt-4'>
                                <Col>
                                    <h1 className='h6 gig-info-user-gig-about' style={{ marginLeft: 10 }}>1-hour photo session at a location of choice</h1>
                                    <div className="rating-container mb-2 mt-4">
                                        <span className="glAQDp5 delivery-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> 1 Day Delivery </span>
                                        <span className="glAQDp5 revisions-icon" aria-hidden="true" style={{ width: '16px', height: '16px', marginLeft: 15 }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                                        <span className='ml-2 day-delivery'> Revision</span>
                                    </div>

                                </Col>
                            </Row>
                            <Col className="mb-4">
                                <li className="qSePHwK flex flex-items-center mb-2 mt-3">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>1 photography</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Responsive design</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center mb-2">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery '>Prototype</span>
                                </li>
                                <li className="qSePHwK flex flex-items-center ">
                                    <span className="glAQDp5 bvg2_O1 ZbQv8bb C7W1J6j mt-1" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                                        <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#00000">
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 day-delivery'>Include source file</span>
                                </li>
                                <button className="countione">
                                    <span>Continue</span>
                                </button>
                                <div>
                                    <button className="custom" onClick={handleModalShow}>
                                        <span>Custom Offer</span>
                                    </button>
                                </div>

                            </Col>
                        </Row>


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



            <Container style={{ marginTop: 100 }}>
                <Row className="">
                    <Col>
                        <div className="d-flex justify-content-end">
                            <button id="hire-me">Hire me</button>
                        </div>
                    </Col>

                    <Col lg={1}>
                        <Link className="d-flex justify-content-end" to="/editgig">
                            <button className="edit-button">
                                <svg className="edit-svgIcon" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>
                        </Link>
                    </Col>

                </Row>
                <Row>
                    <Col lg={8} style={{ backgroundColor: 'white' }}>
                        <h1 className='h3 gig-search-text'>I'll take pictures of the outdoors, of nature, etc.</h1>
                        <div className="rating-container mb-2 mt-2">
                            <svg style={{ color: "#f3da35" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20}><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill="#f3da35"></path></svg>
                            <span style={{ fontWeight: "bold" }} className='ml-1'> 4.8  </span><span className='ml-1'>(221)</span>
                        </div>

                        <Row className='mt-3'>
                            <Col lg={2}>
                                <div className="user-profile-image">
                                    <label className="profile-pict" style={{ width: "100px", height: "100px" }}>
                                        <img src={gig_info_profile} alt="" style={{ borderRadius: "50%" }} />
                                    </label>
                                </div>

                            </Col>
                            <Col>
                                <h1 className='h4 gig-info-user-name mt-3'>Shoot Seekers</h1>
                            </Col>
                        </Row>



                        <Row className='mt-5'>
                            <Col >

                                <Carousel>
                                    <Carousel.Item >
                                        <img src={portfolio_img} alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <img src={portfolio_img} alt="" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={portfolio_img} alt="" />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                        </Row>

                        <Row className='mt-5'>
                            <Col >
                                <h1 className='h4 gig-info-user-about mt-2 mb-4'>About the gig</h1>
                                <h1 className='h4 gig-info-user-gig-about mt-2'>
                                    <div className="mb-3">
                                        📸 CAPTURING MOMENTS, CREATING MEMORIES! 📸
                                    </div>
                                    <br></br>
                                    <div className="mb-4">
                                        Hi, I'm Shoot Seekers, a passionate photographer dedicated to immortalizing your special moments. With an eye for detail and a knack for creativity, I strive to craft stunning visuals that tell your unique story.
                                    </div>

                                    <div className="mb-4">
                                        My Photography Services:<br></br>
                                        🌟 Portraits<br></br>
                                        🌟 Events<br></br>
                                        🌟 Landscapes<br></br>
                                        🌟 Weddings<br></br>
                                        🌟 Product Photography<br></br>
                                    </div>

                                    <div className="mb-4">
                                        Why Choose Me:<br></br>
                                        ✨ Attention to Detail<br></br>
                                        ✨ Creativity and Innovation<br></br>
                                        ✨ Professionalism and Reliability<br></br>
                                    </div>

                                    <div className="mb-4">
                                        What I Offer:<br></br>
                                        ➡️ High-Quality Images<br></br>
                                        ➡️ Personalized Service<br></br>
                                        ➡️ Quick Turnaround Time<br></br>
                                        ➡️ Competitive Pricing<br></br>
                                    </div>
                                    <div className="mb-4">
                                        Let's Capture Your Memories:<br></br>
                                        Whether it's a special event, a professional headshot, or simply celebrating life's everyday moments, I'm here to ensure your memories are beautifully preserved for years to come.
                                    </div>
                                    <div className="mb-4">
                                        Ready to elevate your visual storytelling? Let's collaborate and create magic together! 🌟📷✨
                                    </div>
                                </h1>
                            </Col>




                            <Row className='mt-5'>
                                <Col>
                                    <h1 className='h4 gig-info-user-app-type mt-2'>App Type</h1>
                                    <h1 className='h6 gig-info-user-info'>Beauty, Food & drink,<br></br> Graphics & design</h1>

                                </Col>
                            </Row>






                            <Row className='mt-5' >
                                <h1 className='h4 gig-info-user-about mt-2 mb-4'>About the Seller</h1>

                                <Col lg={2}>
                                    <div className="user-profile-image">
                                        <label className="profile-pict" style={{ width: "110px", height: "110px", fontSize: "" }}>
                                            <img src={gig_info_profile} alt="" style={{ borderRadius: "50%" }} />
                                        </label>
                                    </div>

                                </Col>
                                <Col>
                                    <h1 className='h4 gig-info-user-name mt-1'>Shoot Seekers</h1>
                                    <h1 className='h6 gig-info-user-info'>Professional Photographer</h1>
                                    <div className="rating-container mb-2 mt-2">
                                        <svg style={{ color: "#f3da35" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20}><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill="#f3da35"></path></svg>
                                        <span style={{ fontWeight: "bold" }} className='ml-1'> 4.8  </span><span className='ml-1'>(221)</span>
                                    </div>


                                </Col>
                            </Row>


                            <Row className='mt-5' style={{ border: '1px solid rgba(129, 129, 129, 0.5)', padding: '10px', }}>
                                <Col xs={5}>
                                    <h1 className='h4 gig-info-user-app-type mt-1'>From</h1>
                                    <h1 className='h6 gig-info-user-info mt-1'>Pakistan</h1>
                                </Col>
                                <Col xs={5} >
                                    <h1 className='h4 gig-info-user-app-type mt-1'>Member since</h1>
                                    <h1 className='h6 gig-info-user-info mt-1'>Jan 2022</h1>
                                </Col>
                                <Row className='mt-5' >
                                    <Col xs={5}>
                                        <h1 className='h4 gig-info-user-app-type mt-1'>Avg. response time</h1>
                                        <h1 className='h6 gig-info-user-info mt-1'>1 hour</h1>
                                    </Col>
                                    <Col xs={5}>
                                        <h1 className='h4 gig-info-user-app-type mt-1'>Last delivery</h1>
                                        <h1 className='h6 gig-info-user-info mt-1'>3 day ago</h1>
                                    </Col>
                                </Row>
                                <hr className='mt-4'></hr>
                                <Row className='mt-2' >
                                    <Col >
                                        <h1 className='h6 gig-info-user-info mt-1' style={{ fontWeight: 'normal' }}>
                                            Greetings! I'm Shoot Seekers, a passionate photographer committed to transforming fleeting moments into everlasting memories. With a camera in hand and a heart full of creativity, I embark on a journey to capture the beauty of life through my lens.
                                            <br></br>
                                            <br></br>
                                            🌟 About Me:
                                            <br></br>
                                            <br></br>
                                            I'm more than just a photographer; I'm a storyteller. Every click of the shutter is an opportunity to narrate a unique tale, whether it's the joy of a wedding day, the excitement of a milestone event, or the serenity of nature's landscapes.
                                        </h1>
                                    </Col>
                                </Row>
                            </Row>



                            <Row className='mt-5 mb-5 recomended-for-you-gig-main'>
                                <h1 className='h5 recomended-for-you-gig mt-1 pt-4'>Recommended for you</h1>
                                <Col lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="gig-card-base seller-gig-card mb-3 mt-4" style={{ marginLeft: 40 }}>
                                        <span>
                                            <div className="header-gig-card">
                                                <a href="/farazuxui/design-ux-ui-website-app-or-landing-page">
                                                    <div>
                                                        <figure>
                                                            <img src="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png" alt="do mobile app ui design professional and creative" srcSet="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 1x, https://fiverr-res.cloudinary.com/images/t_medium7_x2,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 2x" />
                                                        </figure>
                                                    </div>
                                                    <section className="gig-title">
                                                        <header>
                                                            <h3>I will do mobile app ui design professional and creative</h3>
                                                        </header>
                                                    </section>
                                                </a>
                                            </div>
                                            <a href="#!" className="btn-gig-menu hint--top" data-hint="Gig Actions">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 42 10">
                                                    <path fill="#C6C6C6" d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"></path>
                                                </svg>
                                            </a>
                                            <a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="gig-price">
                                                <small>Starting at</small>
                                                <span>$30</span>
                                            </a>
                                        </span>
                                    </div>
                                </Col>

                                <Col lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="gig-card-base seller-gig-card mb-3 mt-4" style={{ marginLeft: 40 }}>
                                        <span>
                                            <div className="header-gig-card">
                                                <a href="/farazuxui/design-ux-ui-website-app-or-landing-page">
                                                    <div>
                                                        <figure>
                                                            <img src="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png" alt="do mobile app ui design professional and creative" srcSet="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 1x, https://fiverr-res.cloudinary.com/images/t_medium7_x2,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 2x" />
                                                        </figure>
                                                    </div>
                                                    <section className="gig-title">
                                                        <header>
                                                            <h3>I will do mobile app ui design professional and creative</h3>
                                                        </header>
                                                    </section>
                                                </a>
                                            </div>
                                            <a href="#!" className="btn-gig-menu hint--top" data-hint="Gig Actions">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 42 10">
                                                    <path fill="#C6C6C6" d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"></path>
                                                </svg>
                                            </a>
                                            <a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="gig-price">
                                                <small>Starting at</small>
                                                <span>$30</span>
                                            </a>
                                        </span>
                                    </div>
                                </Col>

                                <Col lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="gig-card-base seller-gig-card mb-3 mt-4" style={{ marginLeft: 40 }}>
                                        <span>
                                            <div className="header-gig-card">
                                                <a href="/farazuxui/design-ux-ui-website-app-or-landing-page">
                                                    <div>
                                                        <figure>
                                                            <img src="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png" alt="do mobile app ui design professional and creative" srcSet="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 1x, https://fiverr-res.cloudinary.com/images/t_medium7_x2,q_auto,f_auto,q_auto,f_auto/gigs/242116942/original/bd0765fdf5d0febda3cd5ce9ff9d61e38044fa2d/design-ux-ui-website-app-or-landing-page.png 2x" />
                                                        </figure>
                                                    </div>
                                                    <section className="gig-title">
                                                        <header>
                                                            <h3 >I will do mobile app ui design professional and creative</h3>
                                                        </header>
                                                    </section>
                                                </a>
                                            </div>
                                            <a href="#!" className="btn-gig-menu hint--top" data-hint="Gig Actions">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 42 10">
                                                    <path fill="#C6C6C6" d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"></path>
                                                </svg>
                                            </a>
                                            <a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="gig-price">
                                                <small>Starting at</small>
                                                <span>$30</span>
                                            </a>
                                        </span>
                                    </div>
                                </Col>

                            </Row>

                            <Row className='mt-3 mb-5'>
                                <Col>
                                    <h1 className='h5 gig-info-user-info mt-1'>Related Tags</h1>
                                    <h1 className='h6 gig-info-user-app-type' style={{ fontSize: 17 }}>Nature Photography, Landscape Photography, Wildlife Photography</h1>

                                </Col>

                            </Row>
                        </Row>
                    </Col>
                    <Col className="main"  >
                        <div className='bg-user-profile' >
                            <button onClick={() => handleButtonClick(1)} className='portfolio'>
                                Basic
                            </button>
                            <button className='pakeges' onClick={() => handleButtonClick(2)}>
                                Standard
                            </button>
                            <button className='chat' onClick={() => handleButtonClick(3)}>
                                Premium
                            </button>
                        </div>
                        <div className='' style={{ border: '1px solid rgba(129, 129, 129, 0.5)', padding: '10px', backgroundColor: 'white' }}>
                            <div style={{ marginTop: '10px' }}>{content}</div>
                        </div>
                    </Col>




                </Row>
            </Container>


            <Modal show={showModal} onHide={handleModalClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Custom Pricing</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className="mt-1">
                        {/* <Col>
                                <h1 className='h4 edit-gig-title'>Gig metedata</h1>
                            </Col> */}
                        <Col lg={12}>
                            <Table aria-label="Example static collection table" className="custom-table">
                                <TableHeader>
                                    <TableColumn className='app-type'></TableColumn>
                                    <TableColumn className='app-type'>BASIC</TableColumn>
                                </TableHeader>
                                <TableBody >
                                    <TableRow key="1" className='app-type-body'>
                                        <TableCell>Pakeges</TableCell>
                                        <TableCell>
                                            <div ><textarea className="" maxlength="35" placeholder="Name your package" style={{ width: 400 }}>Silver Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="2" className='app-type-body'>
                                        <TableCell>Gig info</TableCell>
                                        <TableCell>
                                            <div>
                                                <textarea className="pkg-title-input" maxLength="35" placeholder="Name your package" style={{ width: 400 }}>Silver Package 😊</textarea>
                                                <span className="icn-pencil">
                                                    <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9">
                                                        <path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="3" className='app-type-body'>
                                        <TableCell>Number of pages or screens</TableCell>
                                        <TableCell className="centered-cell">
                                            <Checkbox>4</Checkbox>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow key="4" className='app-type-body'>
                                        <TableCell>Responsive design</TableCell>
                                        <TableCell>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">

                                                    </div>
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="3" className='app-type-body'>
                                        <TableCell>Wireframes</TableCell>
                                        <TableCell>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">

                                                    </div>
                                                }
                                            />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow key="4" className='app-type-body'>
                                        <TableCell>Prototype</TableCell>
                                        <TableCell>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">

                                                    </div>
                                                }
                                            />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow key="3" className='app-type-body'>
                                        <TableCell>Source file</TableCell>
                                        <TableCell>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">

                                                    </div>
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="4" className='app-type-body'>
                                        <TableCell>Revision</TableCell>
                                        <TableCell>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">

                                                    </div>
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="4" className='app-type-body'>
                                        <TableCell>Price</TableCell>
                                        <TableCell>

                                            <Input
                                                type="number"
                                                placeholder="0.00"
                                                labelPlacement="outside"
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-default-400 text-small">$</span>
                                                    </div>
                                                }
                                            />

                                        </TableCell>



                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Col>


                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: '#fdcc0a', color: 'white', border: "none" }} onClick={openNotification}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
