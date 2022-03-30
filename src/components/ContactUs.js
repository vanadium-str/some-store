import React from 'react';
import avatar from '../images/avatar.jpg'
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className='heightBlock d-flex flex-column justify-content-center align-items-center'>
            <p className='head mb-5'>Contact us</p>
            <img className='rounded-circle avatar mb-3' src={avatar} alt='avatar'/>
            <p className='name mb-5'>Your name</p>
            <p className='mb-0 contact'><b>
                Phone: </b>+1-123-456-77-88
            </p>
            <p className='contact mb-5'><b>
                E-mail: </b>yourbrand@email.com
            </p>
            <div className='contactIcon'>
                <FaTwitter className='me-2'/><FaInstagram className='me-2'/><FaFacebookF/>
            </div>
        </div>
    );
};

export default ContactUs;