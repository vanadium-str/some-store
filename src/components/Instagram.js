import React from 'react';
import inst1 from '../images/inst1.jpg';
import inst2 from '../images/inst2.jpeg';
import inst3 from '../images/inst3.jpg';
import inst4 from '../images/inst4.jpg';
import inst5 from '../images/inst5.jpg';

const Instagram = () => {
    return (
        <div className='backColor heightBlock'>
            <p className='head text-center pt-5'>
                Follow BRAND on <a href='https://www.instagram.com/'>Instagram</a>
            </p>
            <div className='container pb-5 mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='imageInstBig' src={inst1} alt='instagram'/>
                    </div>
                    <div className='col-6 row'>
                        <div className='col-6 mb-3'>
                            <img className='imageInstSmall' src={inst2} alt='instagram'/>
                        </div>
                        <div className='col-6 mb-3'>
                            <img className='imageInstSmall' src={inst3} alt='instagram'/>
                        </div>
                        <div className='col-6 mt-3'>
                            <img className='imageInstSmall' src={inst4} alt='instagram'/>
                        </div>
                        <div className='col-6 mt-3'>
                            <img className='imageInstSmall' src={inst5} alt='instagram'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;