import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import discover_img_1 from '../component/images/discover-img-1.jpg';
import discover_img_2 from '../component/images/discover-img-2.jpg';
import discover_img_3 from '../component/images/discover-img-3.jpg';
import discover_img_4 from '../component/images/discover-img-4.jpg';
import discover_img_5 from '../component/images/discover-img-5.jpg';

export default function Discover() {
  return (
    <Container fluid className='mb-4' style={{ backgroundColor: '#FFF0B3', paddingTop: 50, paddingBottom: 50, marginTop: 70 }}>
      <h1 className='h1 discover-text mb-5'>Discover</h1>
      <Container>
        <Row>
          <Col sm={8}>
            <Suspense fallback={<div>Loading...</div>}>
              <img src={discover_img_1} alt="" style={{ width: '100%' }} />
            </Suspense>
          </Col>
          <Col sm={4}>
            <Suspense fallback={<div>Loading...</div>}>
              <img src={discover_img_2} alt="" style={{ width: '100%' }} />
            </Suspense>
          </Col>
        </Row>
        <Row className='mt-3 '>
          <Col sm>
            <Suspense fallback={<div>Loading...</div>}>
              <img src={discover_img_3} alt="" style={{ width: '100%' }} />
            </Suspense>
          </Col>
          <Col sm>
            <Suspense fallback={<div>Loading...</div>}>
              <img src={discover_img_4} alt="" style={{ width: '100%' }} />
            </Suspense>
          </Col>
          <Col sm>
            <Suspense fallback={<div>Loading...</div>}>
              <img src={discover_img_5} alt="" style={{ width: '100%' }} />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
