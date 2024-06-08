import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Editgig() {



    const handleFileChange = (event) => {
        const files = event.target.files;
        const previewContainer = document.getElementById('imagePreview');

        if (files.length > 3) {
            alert('Please select only up to three image files.');
            event.target.value = null; // Clear the file input
            return;
        }

        // Clear previous previews
        previewContainer.innerHTML = '';

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (event) => {
                const imgElement = document.createElement('img');
                imgElement.src = event.target.result;
                imgElement.classList.add('previewImage');
                imgElement.style.width = '140px'; // Set width to 120px
                imgElement.style.height = '120px';

                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            `;
                deleteButton.style.marginLeft = '10px'; // Add left margin
                deleteButton.style.background = 'none'; // Remove background
                deleteButton.style.border = 'none'; // Remove border
                deleteButton.style.cursor = 'pointer'; // Add cursor pointer
                deleteButton.addEventListener('click', () => {
                    imgElement.parentNode.removeChild(imgElement); // Remove the image
                    deleteButton.parentNode.removeChild(deleteButton); // Remove the delete button
                });



                const container = document.createElement('div');
                container.appendChild(imgElement);
                container.appendChild(deleteButton);
                previewContainer.appendChild(container);
            };

            reader.readAsDataURL(file);
        }
    };





    const [content, setContent] = useState(
        <>


            <Container>

                <Row className="">

                    <Col>

                        <h1 className='h4 edit-gig-title'>Gig Title</h1>
                        <h1 className='h6 edit-gig-title-2'>The most crucial area for you to put keywords that customers are likely to use when looking for a service similar to yours is in the title of your gig shop.</h1>

                    </Col>
                    <Col lg={8}>
                        <textarea className="form-control form-control-sm mb-3" rows="2" placeholder="Title" style={{ fontSize: 25, border: '4px solid #ececec' }}></textarea>
                    </Col>

                </Row>

                <Row className="mt-5">
                    <Col>
                        <h1 className='h4 edit-gig-title'>Gig metedata</h1>
                    </Col>
                    <Col lg={8}>
                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn className='app-type'>App Type</TableColumn>
                                <TableColumn></TableColumn>
                            </TableHeader>
                            <TableBody >
                                <TableRow key="1" className='app-type-body'>
                                    <TableCell> <Checkbox >Nature Photography</Checkbox></TableCell>
                                    <TableCell><Checkbox >Landscape Photography</Checkbox></TableCell>
                                </TableRow>
                                <TableRow key="2" className='app-type-body'>
                                    <TableCell> <Checkbox>Wildlife Photography</Checkbox></TableCell>
                                    <TableCell><Checkbox>Pet Photography</Checkbox></TableCell>
                                </TableRow>
                                <TableRow key="3" className='app-type-body'>
                                    <TableCell> <Checkbox>Archietecture Photography</Checkbox></TableCell>
                                    <TableCell><Checkbox>Landscape Photography</Checkbox></TableCell>
                                </TableRow>
                                <TableRow key="4" className='app-type-body'>
                                    <TableCell> <Checkbox >Waterfall Photography</Checkbox></TableCell>
                                    <TableCell><Checkbox >Landscape Photography</Checkbox></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Col>


                </Row>

                <Row className="mt-5">
                    <Col>
                        <h1 className='h4 edit-gig-title'>Search tags</h1>
                        <h1 className='h6 edit-gig-title-2'>Add buzzwords to your gig that are associated with the services you provide. To be found, use all 5 tags.
                        </h1>

                    </Col>
                    <Col lg={8}>
                        <div className="inputForm">
                            <input type="text" className="input" placeholder="Enter search tag" />
                        </div>
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

                            <Row className="">

                                <Col>

                                    <h1 className='h4 edit-gig-title'>Gig Title</h1>
                                    <h1 className='h6 edit-gig-title-2'>The most crucial area for you to put keywords that customers are likely to use when looking for a service similar to yours is in the title of your gig shop.</h1>

                                </Col>
                                <Col lg={8}>
                                    <textarea className="form-control form-control-sm mb-3" rows="2" placeholder="Title" style={{ fontSize: 25, border: '4px solid #ececec' }}></textarea>
                                </Col>

                            </Row>

                            <Row className="mt-5">
                                <Col>
                                    <h1 className='h4 edit-gig-title'>Gig metedata</h1>
                                </Col>
                                <Col lg={8}>
                                    <Table aria-label="Example static collection table">
                                        <TableHeader>
                                            <TableColumn className='app-type'>App Type</TableColumn>
                                            <TableColumn></TableColumn>
                                        </TableHeader>
                                        <TableBody >
                                            <TableRow key="1" className='app-type-body'>
                                                <TableCell> <Checkbox >Nature Photography</Checkbox></TableCell>
                                                <TableCell><Checkbox >Landscape Photography</Checkbox></TableCell>
                                            </TableRow>
                                            <TableRow key="2" className='app-type-body'>
                                                <TableCell> <Checkbox>Wildlife Photography</Checkbox></TableCell>
                                                <TableCell><Checkbox>Pet Photography</Checkbox></TableCell>
                                            </TableRow>
                                            <TableRow key="3" className='app-type-body'>
                                                <TableCell> <Checkbox>Archietecture Photography</Checkbox></TableCell>
                                                <TableCell><Checkbox>Landscape Photography</Checkbox></TableCell>
                                            </TableRow>
                                            <TableRow key="4" className='app-type-body'>
                                                <TableCell> <Checkbox >Waterfall Photography</Checkbox></TableCell>
                                                <TableCell><Checkbox >Landscape Photography</Checkbox></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>


                            </Row>

                            <Row className="mt-5">
                                <Col>
                                    <h1 className='h4 edit-gig-title'>Search tags</h1>
                                    <h1 className='h6 edit-gig-title-2'>Add buzzwords to your gig that are associated with the services you provide. To be found, use all 5 tags.
                                    </h1>

                                </Col>
                                <Col lg={8}>
                                    <div className="inputForm">
                                        <input type="text" className="input" placeholder="Enter search tag" />
                                    </div>
                                </Col>
                            </Row>


                        </Container>

                    </>
                );
                break;
            case 2:
                setContent(
                    <>


                        <Row className="mt-1">
                            {/* <Col>
                                <h1 className='h4 edit-gig-title'>Gig metedata</h1>
                            </Col> */}
                            <Col lg={12}>
                                <Table aria-label="Example static collection table" className="custom-table">
                                    <TableHeader>
                                        <TableColumn className='app-type'></TableColumn>
                                        <TableColumn className='app-type'>BASIC</TableColumn>
                                        <TableColumn className='app-type'>STANDARD</TableColumn>
                                        <TableColumn className='app-type'>PREMIUM</TableColumn>
                                    </TableHeader>
                                    <TableBody >
                                        <TableRow key="1" className='app-type-body'>
                                            <TableCell>Pakeges</TableCell>
                                            <TableCell>
                                                <div ><textarea className="" maxlength="35" placeholder="Name your package">Silver Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                            </TableCell>
                                            <TableCell>
                                                <div ><textarea className="" maxlength="35" placeholder="Name your package">Standard Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                            </TableCell>
                                            <TableCell>
                                                <div ><textarea className="" maxlength="35" placeholder="Name your package">Premium Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="2" className='app-type-body'>
                                            <TableCell>Gig info</TableCell>
                                            <TableCell>
                                                <div>
                                                    <textarea className="pkg-title-input" maxLength="35" placeholder="Name your package">Silver Package 😊</textarea>
                                                    <span className="icn-pencil">
                                                        <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9">
                                                            <path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                <div ><textarea className="pkg-title-input" maxlength="35" placeholder="Name your package">Standard Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                            </TableCell>
                                            <TableCell>
                                                <div ><textarea className="pkg-title-input" maxlength="35" placeholder="Name your package">Premium Package 😊</textarea><span className="icn-pencil"><svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#C5C6C9"><path d="M15.363 2.301 13.68.619a2.108 2.108 0 0 0-2.983 0L.777 10.472.01 15.128a.75.75 0 0 0 .862.862l4.656-.768 9.854-9.918a2.11 2.11 0 0 0-.02-3.003Zm-9.1 7.435a.685.685 0 0 0 .973 0l3.72-3.72.893.893-5.287 5.321v-1.292h-1.5v-1.5H3.77l5.32-5.286.893.892-3.72 3.72a.688.688 0 0 0 0 .972Zm-3.696 4.58-.884-.882.38-2.3.575-.571h1.3v1.5h1.5v1.3l-.572.575-2.3.379ZM14.41 4.332l-.002.002-.001.002-1.501 1.51-2.751-2.75 1.51-1.501.002-.002.002-.002a.733.733 0 0 1 1.038 0l1.683 1.683c.309.309.31.767.02 1.058Z"></path></svg></span></div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow key="3" className='app-type-body'>
                                            <TableCell>Number of pages or screens</TableCell>
                                            <TableCell className="centered-cell">
                                                <Checkbox>4</Checkbox>
                                            </TableCell>
                                            <TableCell className="centered-cell">
                                                <Checkbox>7</Checkbox>
                                            </TableCell>
                                            <TableCell className="centered-cell">
                                                <Checkbox>15</Checkbox>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow key="4" className='app-type-body'>
                                            <TableCell>Responsive design</TableCell>
                                            <TableCell> <Checkbox ></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                        </TableRow>
                                        <TableRow key="3" className='app-type-body'>
                                            <TableCell>Wireframes</TableCell>
                                            <TableCell> <Checkbox ></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                        </TableRow>
                                        <TableRow key="4" className='app-type-body'>
                                            <TableCell>Prototype</TableCell>
                                            <TableCell> <Checkbox ></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                        </TableRow>
                                        <TableRow key="3" className='app-type-body'>
                                            <TableCell>Source file</TableCell>
                                            <TableCell> <Checkbox ></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                        </TableRow>
                                        <TableRow key="4" className='app-type-body'>
                                            <TableCell>Revision</TableCell>
                                            <TableCell> <Checkbox ></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
                                            <TableCell><Checkbox></Checkbox></TableCell>
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


                    </>

                );
                break;
            case 3:
                setContent(
                    <>

                        <Row className="mt-5">
                            <Col>
                                <h1 className='h4 edit-gig-title'>Gig Discription</h1>
                                <h1 className='h6 edit-gig-title-2'>The most crucial area for you to put keywords that customers are likely to use when looking for a service similar to yours is in the title of your gig shop.</h1>

                            </Col>
                            <Col lg={8}>
                                <textarea className="form-control form-control-lg mb-3" rows="6" placeholder="Discription"></textarea>
                            </Col>



                        </Row>


                    </>
                );
                break;
            case 4:
                setContent(
                    <>

                        <div>
                            <Row>
                                <div id="imagePreview" style={{ display: 'flex', width: 120, height: 120 }}></div>
                            </Row>

                        </div>

                        <Col >
                            <label className="custum-file-upload mt-5" for="file">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                                </div>
                                <div className="text">
                                    <span>Click to upload 3 image</span>
                                </div>
                                <input type="file" id="file" onChange={handleFileChange} accept="image/*" multiple />
                            </label>


                        </Col>


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


            <Container fluid className=' main-edit-gig'>

                <Container fluid style={{ backgroundColor: 'white', }}>
                    <Container style={{ marginTop: 50, padding: 10, borderRadius: 10 }}>
                        <Row >
                            <Col className="main" lg >
                                <div className='bg-user-profile' >
                                    <button onClick={() => handleButtonClick(1)} className='portfolio'>
                                        Overview
                                    </button>
                                    <button className='pakeges' onClick={() => handleButtonClick(2)}>
                                        Pricing
                                    </button>
                                    <button className='chat' onClick={() => handleButtonClick(3)}>
                                        Description
                                    </button>
                                    <button className='chat' onClick={() => handleButtonClick(4)}>
                                        Gallery
                                    </button>
                                </div>



                            </Col>
                            <Col className="d-flex justify-content-end" lg>
                                <button className="save-button">
                                    Save
                                </button>
                                <button className="save-button">
                                    Save & Preview
                                </button>

                            </Col>


                        </Row>
                    </Container>
                </Container>

                <Container className='mt-5 container-edit-gig'>
                    <Row className="">
                        <div className='' >
                            <div style={{ marginTop: '10px' }}>{content}</div>
                        </div>

                    </Row>
                </Container>
            </Container>
        </>
    )
}
