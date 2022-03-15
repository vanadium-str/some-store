import React from 'react';
import about from '../images/about.jpg'

const AboutBrand = () => {
    return (
        <div className='container-fluid backColor'>
            <div className='row heightBlock'>
            <div className='col-6 d-flex flex-column justify-content-center px-5'>
                <h3 className='head'>About BRAND</h3>
                <p className='aboutTitle'>Sunt ut nulla pariatur irure culpa voluptate commodo culpa cillum 
                    nisi nisi in magna est. Velit eu reprehenderit voluptate aute mollit
                     aute do elit excepteur mollit occaecat quis laborum. Non nulla nulla
                      cupidatat consequat dolor cupidatat deserunt.</p>
            </div>
            <div className='col-6'>
                <img src={about} alt='about' width='100%' height='100%'/>
            </div>
            </div>
        </div>
    );
};

export default AboutBrand;