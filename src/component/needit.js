import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import building_icon from '../component/images/building-icon.png';
import nature_icon from '../component/images/nature-icon.png';
import food_icon from '../component/images/food-icon.png';
import product_icon from '../component/images/product-icon.png';
import wildlife_icon from '../component/images/wildlife-icon.png';
import sport_icon from '../component/images/sport-icon.png';
import pet_icon from '../component/images/pet-icon.png';
import adventure_icon from '../component/images/adventure-icon.png';


export default function NeedIt() {
  return (
    <>
      <h1 className='h1 text-center need-it-text'>You need it, we've got it</h1>
      <Container style={{marginTop: 50}}>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <img src={building_icon} alt="" width={60} className='mb-3' />
            <h1 className='h6 needit-text'>Architecture photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={nature_icon} alt="" width={60}  className='mb-3'/>
            <h1 className='h6 needit-text'>Nature photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={food_icon} alt="" width={60}  className='mb-3' />
            <h1 className='h6 needit-text'>Food photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={product_icon} alt="" width={60}  className='mb-3'/>
            <h1 className='h6 needit-text'>Product photography</h1>
          </Col>
        </Row>
        <Row style={{marginTop: 80}}>
          <Col className="d-flex flex-column align-items-center">
            <img src={wildlife_icon} alt="" width={50}  className='mb-3 '/>
            <h1 className='h6 needit-text'>Wildlife photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={sport_icon} alt="" width={60} className='mb-4 ' />
            <h1 className='h6 needit-text'>Sports photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={pet_icon} alt="" width={60} className='mb-3' />
            <h1 className='h6 needit-text'>Pet photography</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <img src={adventure_icon} alt="" width={60} className='mb-3' />
            <h1 className='h6 needit-text'>Adventure photography</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}
