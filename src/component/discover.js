import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import discover_page_img_1 from './images/discover-img-5.jpg';
import discover_profile_img from './images/profile-img.png';


export default function Discover() {
  return (
    <>
      <Container fluid className='bg-main-discover'>

        <Container>
          <Row className="justify-content-center">
            <Col>

              <section className="" >
                <div className="wrapper">
                  <div className="left-col">
                    <div className="post main-discover">
                      <div className="info">
                        <div className="user">
                          <div className="profile-pic"><img src={discover_profile_img} alt="" width={45} /></div>
                          <p className="username">Romen Dive_official</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" style={{cursor: 'pointer'}} viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </div>
                      <img src={discover_page_img_1} className="options" alt="" />
                      <div className="post-content">
                        <div className="reaction-wrapper mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}}  width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 
                      1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 
                      .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: -5, cursor: 'pointer' }} width="25" height="25" fill="currentColor" className="bi bi-chat-dots ml-2" viewBox="0 0 16 16"> <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" /> </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}}  width="25" height="25" fill="currentColor" className="bi bi-send ml-2" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /> </svg>
                        </div>
                        <p className="likes">Like by David-Roe 1,012 likes</p>
                        <p className="description"><span>Romen Dive_official</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                        <p className="post-time">2 minutes ago</p>
                      </div>
                      <div className="comment-wrapper">
                        <img src="img/smile.PNG" className="icon" alt="" />
                        <input type="text" className="comment-box" placeholder="Add a comment" />
                        <button className="comment-btn">post</button>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>

      </Container>


    </>
  );
}
