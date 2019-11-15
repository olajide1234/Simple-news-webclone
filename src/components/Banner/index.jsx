import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeadlineNews from '../HeadlineNews/index'


function Banner({data}) {
  return (
    <div className='pt-5 pb-3'>
      <div className='extra-top-pad'>          
      <img
        src="https://www.wealthsimple.com/assets/magazine/images/header/logo-010d4e6641c28141d4c88b71646b377a.svg"
        width="200"
        height="50"
        className="large-banner-logo"
        alt="Wealthsimple"
        id='mag-header'
      />
      </div>
      <h1 className='h1-bold'>Magazine</h1>
      <p className='header-subtitle'>STORIES AND IDEAS FROM WEALTHSIMPLE</p>
      <div className='mt-5 mb-4'>
        <Row className="justify-content-center" id='filter'>
          <Col xs={3}>
            <p className="text-right">Even numbered articles</p>
          </Col>
          .
          <Col xs={3}>
            <p className="text-left">Odd numbered articles</p>
          </Col>
        </Row>
      </div>
        <HeadlineNews data={data} />
    </div>
  );
}

export default Banner;
