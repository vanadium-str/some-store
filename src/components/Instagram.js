import React, { useState } from 'react';
import InstagramGallery from './InstagramGallery';
import { Context } from '../utils/context';
import { instaImages } from '../utils/constants';

const Instagram = () => {

   const [isOpen, setIsOpen] = useState(false);
   const [currentPhoto, setCurrentPhoto] = useState('');

   const openGallery = (numOfArray) => {
    setIsOpen(true);
    setCurrentPhoto(numOfArray);
    document.body.style.overflow = 'hidden';
   }

    return (
        <div className='backColor heightBlock'>
            <p className='head text-center pt-5'>
                Follow BRAND on <a href='https://www.instagram.com/'>Instagram</a>
            </p>
            <div className='container pb-5 mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='imageInstBig' src={instaImages[0]} alt='instagram1' onClick={() => {
                                openGallery(0);
                            }}
                        />
                    </div>
                    <div className='col-6 row'>
                        <div className='col-6 mb-3'>
                            <img className='imageInstSmall' src={instaImages[1]} alt='instagram2' onClick={() => {
                                openGallery(1);
                                }}
                            />
                        </div>
                        <div className='col-6 mb-3'>
                            <img className='imageInstSmall' src={instaImages[2]} alt='instagram3' onClick={() => {
                                openGallery(2);
                                }}
                            />
                        </div>
                        <div className='col-6 mt-3'>
                            <img className='imageInstSmall' src={instaImages[3]} alt='instagram4' onClick={() => {
                                openGallery(3);
                                }}
                            />
                        </div>
                        <div className='col-6 mt-3'>
                            <img className='imageInstSmall' src={instaImages[4]} alt='instagram5' onClick={() => {
                                openGallery(4);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Context.Provider value = {
                {isOpen, setIsOpen, currentPhoto, setCurrentPhoto}
            }>
             {isOpen ? <InstagramGallery/> : <div></div>}
            </Context.Provider>

        </div>
    );
};

export default Instagram;