import React, {useContext} from 'react';
import { Context } from '../utils/context'
import { instaImages } from '../utils/constants';

const InstagramGallery = () => {

    const {setIsOpen, currentPhoto, setCurrentPhoto} = useContext(Context);

    const changeImage = (direction) => {
        let changedIndex = currentPhoto + direction;
        if(currentPhoto === 0 && direction === -1){
            changedIndex = instaImages.length - 1;
        }else if(currentPhoto === instaImages.length - 1 && direction === 1){
            changedIndex = 0;
        }
        setCurrentPhoto(changedIndex);
    }

    return (
        <div className='instaGallery'>
            <div className='gallerySwitch gallerySwitchLeft' onClick={() => {
                changeImage(-1);
            }}>
                &#10094;
            </div>
            <img className='w-50' src={instaImages[currentPhoto]} alt='photo'/>
            <div className='gallerySwitch gallerySwitchRight' onClick={() => {
                changeImage(1);
            }}>
                &#10095;
            </div>
            <span className='close' onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = 'unset';
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                    <path d="M14 .7l-.7-.7L7 6.3.7 0 0 .7 6.3 7 0 13.3l.7.7L7 7.7l6.3 6.3.7-.7L7.7 7z"/>
                </svg>
            </span>
        </div>
    );
};

export default InstagramGallery;