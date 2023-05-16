import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsltter-heading'>
      <SubHeading title="Newsletter" />
      <h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And never miss latest Updates !</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your email' />
      <button className='custom__button'>Suscribe</button>
    </div>
  </div>
);

export default Newsletter;
