import React from 'react';
import { Card } from 'react-bootstrap';


function NewsCard({data}) {
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body className='text-left'>
        <span className='news-category text-left'>News</span>
          <h3 className='news-excerpt-title'>{data.title}</h3>
        <Card.Text>
            {data.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </a>
  );
}

export default NewsCard;
