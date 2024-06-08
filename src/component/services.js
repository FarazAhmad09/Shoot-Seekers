import React from 'react';
import potrait_img from '../component/images/potrait-img.png';
import event_img from '../component/images/event-img.jpeg';
import commercial_img from '../component/images/commercial-img.jpg';
import fashion_img from '../component/images/fashion-img.png';
import real_estate_img from '../component/images/real-estate-img.jpg';
import fine_art_img from '../component/images/fine-art-img.jpg';


const Card = (props) => (
  <div className="card" style={{ position: 'relative' }}>
    <img src={props.imgUrl} alt={props.alt || 'Image'} style={{ width: '100%' }} />
    <div className="card-content" >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container ">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
);

export default function Services() {
  const cardsData = [
    { id: 1, content: 'Potrait Photograpgy', imgUrl: potrait_img },
    { id: 2, content: 'Fashion Photography', imgUrl: fashion_img },
    { id: 3, content: 'Event Photography', imgUrl: event_img },
    { id: 4, content: 'Commercial Photography', imgUrl: commercial_img },
    { id: 5, content: 'Fine Art Photography', imgUrl: fine_art_img },
    { id: 6, content: 'Real Estate Photography', imgUrl: real_estate_img },
  ];

  return (
    <>
      <div className="container-fluid main-services">
        <h1 className='h1 mt-5 service-text'>Popular Services</h1>
        <CardContainer cards={cardsData} />
      </div>
    </>
  );
}
