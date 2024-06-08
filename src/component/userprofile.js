import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_img from '../component/images/potrait-img.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



export default function UserProfile() {




  const [content, setContent] = useState(
    <>

      <Container>

        <Row>
          <Col>
            <Link to="/giginfopage">
              <div className="gig-card-base seller-gig-card mb-3">
                <span>
                  <div className="btn-share-container">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <ul className="gig-menu">
                    <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                    <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                    <li><a href="/" className="activate">Activate</a></li>
                    <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                    <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                    <li><a href="/" className="settings">Advanced</a></li>
                  </ul>
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
            </Link>


          </Col>

          <Col>

            <div className="gig-card-base seller-gig-card mb-3">
              <span>
                <div className="btn-share-container">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                  </svg>
                </div>
                <ul className="gig-menu">
                  <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                  <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                  <li><a href="/" className="activate">Activate</a></li>
                  <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                  <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                  <li><a href="/" className="settings">Advanced</a></li>
                </ul>
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

          <Col>

            <div className="gig-card-base seller-gig-card mb-3">
              <span>
                <div className="btn-share-container">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                  </svg>
                </div>
                <ul className="gig-menu">
                  <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                  <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                  <li><a href="/" className="activate">Activate</a></li>
                  <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                  <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                  <li><a href="/" className="settings">Advanced</a></li>
                </ul>
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




          <Col>
            <Link to="/editgig">
              <div className="gig-card-base seller-gig-card mb-3">
                <span>

                  <p className='add-gig'>Add New Gig</p>
                  <div className="center-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </div>
                </span>
              </div>
            </Link>

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

            <Container>

              <Row>
                <Col>
                  <Link to="/giginfopage">
                    <div className="gig-card-base seller-gig-card mb-3">
                      <span>
                        <div className="btn-share-container">
                          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                          </svg>
                        </div>
                        <ul className="gig-menu">
                          <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                          <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                          <li><a href="/" className="activate">Activate</a></li>
                          <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                          <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                          <li><a href="/" className="settings">Advanced</a></li>
                        </ul>
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
                  </Link>


                </Col>

                <Col>

                  <div className="gig-card-base seller-gig-card mb-3">
                    <span>
                      <div className="btn-share-container">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <ul className="gig-menu">
                        <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                        <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                        <li><a href="/" className="activate">Activate</a></li>
                        <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                        <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                        <li><a href="/" className="settings">Advanced</a></li>
                      </ul>
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

                <Col>

                  <div className="gig-card-base seller-gig-card mb-3">
                    <span>
                      <div className="btn-share-container">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <ul className="gig-menu">
                        <li><a href="/farazuxui/design-ux-ui-website-app-or-landing-page" className="preview" target="_blank">Preview</a></li>
                        <li><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit" className="edit" target="_blank">Edit</a></li>
                        <li><a href="/" className="activate">Activate</a></li>
                        <li><a href="/users/farazuxui/manage_gigs?current_filter=onhold&amp;id=242116942" className="statistics" target="_blank">Statistics</a></li>
                        <li className="update-pricing"><a href="/users/farazuxui/manage_gigs/design-ux-ui-website-app-or-landing-page/edit?step=1" className="update-pricing" target="_blank">Update Pricing</a></li>
                        <li><a href="/" className="settings">Advanced</a></li>
                      </ul>
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

                <Col>

                  <Link to="/editgig">
                    <div className="gig-card-base seller-gig-card mb-3">
                      <span>

                        <p className='add-gig'>Add New Gig</p>
                        <div className="center-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                      </span>
                    </div>
                  </Link>

                </Col>

              </Row>

            </Container>

          </>
        );
        break;
      case 2:
        setContent(
          <>

            <div className="custom-container">
              <div className="row no-gutters">
                <div className="col-md-4 ">
                  <div className="settings-tray">
                    <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img" />
                    <span className="ml-2 mt-2">Shoot Seekers</span>
                  </div>
                  <div className="search-box">
                    <div className="input-wrapper">
                      <input placeholder="Search here" type="text" />
                    </div>
                  </div>
                  <div className='border-right'>
                    <div className="friend-drawer friend-drawer--onhover">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
                      <div className="text ">
                        <h6>Robo Cop</h6>
                        <p className="text-muted">Hey, you're arrested!</p>
                      </div>
                      <span className="time text-muted small">13:21</span>
                    </div>
                    <hr />
                    <div className="friend-drawer friend-drawer--onhover">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg" alt="" />
                      <div className="text">
                        <h6>Optimus</h6>
                        <p className="text-muted">Wanna grab a beer?</p>
                      </div>
                      <span className="time text-muted small">00:32</span>
                    </div>
                    <hr />
                    <div className="friend-drawer friend-drawer--onhover ">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png" alt="" />
                      <div className="text">
                        <h6>Skynet</h6>
                        <p className="text-muted">Seen that canned piece of s?</p>
                      </div>
                      <span className="time text-muted small">13:21</span>
                    </div>
                    <hr />
                    <div className="friend-drawer friend-drawer--onhover">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg" alt="" />
                      <div className="text">
                        <h6>Termy</h6>
                        <p className="text-muted">Hey, you're arrested!</p>
                      </div>

                      <span className="time text-muted small">13:21</span>
                    </div>
                    <hr />
                    <div className="friend-drawer friend-drawer--onhover">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg" alt="" />
                      <div className="text">
                        <h6>Richard</h6>
                        <p className="text-muted">I'm not sure... what he saying</p>
                      </div>
                      <span className="time text-muted small">13:21</span>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="settings-tray">
                    <div className="chat-drawer no-gutters friend-drawer--grey">
                      <img className="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
                      <div className="text">
                        <h6>Robo Cop</h6>
                        <p className="text-muted">Layin' down</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat-panel">
                    <div className="row no-gutters">
                      <div className="col-md-3" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3 offset-6" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3 offset-6" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3 offset-6" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3 offset-6" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-3 offset-6" style={{ width: "45%" }}>
                        <div className="chat-bubble chat-bubble--left">
                          Hello dude!
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Additional chat bubbles go here */}
                  <div className="row">
                    <div className="col-12">
                      <div className="chat-box-tray">
                        <div className="upload">
                          <label className="upload-area">
                            <input type="file" />
                            <span className="upload-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#CACACA" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                              </svg>
                            </span>
                          </label>
                        </div>
                        <input type="text" placeholder="Type your message here..." className='input-wrapper' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#CACACA" className="bi bi-send ml-2" viewBox="0 0 16 16">
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 
                          0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 
                          .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
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
                <button onClick={() => handleButtonClick(1)} className='portfolio'>Portfolio</button>
                <button className='chat' onClick={() => handleButtonClick(2)}>
                  Chat
                </button>
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