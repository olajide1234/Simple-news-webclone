import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Footer() {
  return (
  <div className = 'footer'>
      <Row className='footer-content'>
      <Col className='text-left pb-5'>
        <p className='footer-heavy' >ABOUT US</p>
          <p className='footer-sans' >Who we are</p>
      </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>LEARN MORE</p>
          <p className='footer-sans'>The Details</p>
          <p className='footer-sans'>Investing 101</p>
          <p className='footer-sans'>Responsible investing</p>
          <p className='footer-sans'>Halal investing</p>
          <p className='footer-sans'>Wealthsimple Black</p>
          <p className='footer-sans'>Magazine</p>
          <p className='footer-sans'>Financial Portfolio Review</p>
      </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>LEGAL</p>
          <p className='footer-sans'>Terms of use</p>
          <p className='footer-sans'>Privacy policy</p>
          <p className='footer-sans'>Full disclosure</p>
          <p className='footer-sans'>File a complaint</p>
      </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>DOWNLOAD THE APP</p>
          <img 
            src="https://www.wealthsimple.com/assets/magazine/images/modules/icon-apple-340ef8dfa3d4bdcf4acea8543efa41c3.svg"
            height='35'
            width='35'
            alt='ios'
          />

          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/icon-android-0751af4a45e9b35492de887995ad195e.svg'
            height='35'
            width='35'
            alt='android'
          />
      </Col>
    </Row>

      <Row className='footer-content-2'>
        <Col className='text-left pb-5'>
          <p className='footer-heavy'>QUESTIONS?</p>
          <p className='footer-sans'>Support centre</p>
        </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>LANGUAGE</p>
          <p className='footer-sans'>English</p>
          <p className='footer-sans'>Francais</p>
        </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>COUNTRY</p>
          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/flag-gb-5f3786a92af2d6cdad8181b8260e2133.svg'
            height='35'
            width='35'
            alt='UK'
            className='p-1'
          />

          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/flag-us-5f7e923603397e8ae67074e9891d6575.svg'
            height='35'
            width='35'
            alt='US'
            className='p-1'
          />

          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/flag-canada-a9a930599887ad178880cdd48396163b.svg'
            height='35'
            width='35'
            alt='CA'
            className='p-1'
          />
        </Col>

        <Col className='text-left pb-5'>
          <p className='footer-heavy'>SOCIAL</p>
          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/icon-android-0751af4a45e9b35492de887995ad195e.svg'
            height='35'
            width='35'
            alt='android'
          />

          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/icon-android-0751af4a45e9b35492de887995ad195e.svg'
            height='35'
            width='35'
            alt='android'
          />

          <img
            src='https://www.wealthsimple.com/assets/magazine/images/modules/icon-android-0751af4a45e9b35492de887995ad195e.svg'
            height='35'
            width='35'
            alt='android'
          />
        </Col>
    </Row>

      <Row className='text-left footer-content-3'>
        <p className='footer-sans'>Wealthsimple for Advisors . Wealthsimple for Work</p>  
    </Row>

      <Row className='text-left footer-content-3'>
        <p className='footer-sans smaller-text fade-color'>By using this website, you accept our Terms of Use and Privacy Policy. Copyright 2019 Wealthsimple Technologies Inc.</p>
      </Row>

  </div>
  );
}

export default Footer;
