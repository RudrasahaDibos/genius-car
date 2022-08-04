import React from 'react';
import Banner from '../Banner/Banner';
import Expert from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-dark '>
            <Banner></Banner>
           <Services></Services>
          <Expert></Expert>
        </div>
    );
};

export default Home;