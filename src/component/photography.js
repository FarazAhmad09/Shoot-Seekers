import React, {Suspense} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'antd';
import photography_img_1 from '../component/images/photography-img-1.jpg';
import photography_img_2 from '../component/images/photography-img-2.jpg';
import photography_img_3 from '../component/images/photography-img-3.jpg';

export default function Photography() {
  return (
    <Container fluid style={{ background: '#38404393 ', marginTop: 70, marginBottom: 70 }}>
      <Container>
        <Row>
          <Col>
            <h1 className="h2 mb-3 photography-text">Photography</h1>
            <p className='mb-3 photography-p'>Obtain the necessary shot. Each and every time.</p>
            <button className="Download-button">
              <span>Explore..</span>
            </button>
          </Col>
          <Col lg>
            <Row gutter={16} style={{ paddingTop: 30, paddingBottom: 30 }}>
              <Col span={8} lg>

              <Suspense fallback={<div className='h2'>Loading...</div>}>
                  <Card className='photo-card'>
                    <img src={photography_img_1} alt="" style={{ borderRadius: 15 }} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={8} lg>
              <Suspense fallback={<div className='h2'>Loading...</div>}>
                  <Card className='photo-card'>
                    <img src={photography_img_2} alt="" style={{ borderRadius: 15 }} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={8} lg>
              <Suspense fallback={<div className='h2'>Loading...</div>}>
                  <Card className='photo-card'>
                    <img src={photography_img_3} alt="" style={{ borderRadius: 15 }} />
                  </Card>
                </Suspense>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
