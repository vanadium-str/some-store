import React from 'react';
import stuff1 from '../images/1.jpg'
import stuff2 from '../images/2.jpg'
import stuff3 from '../images/3.jpg'
import stuff4 from '../images/4.jpg'
import stuff5 from '../images/5.png'
import stuff6 from '../images/6.jpg'

const Goods = () => {
    return(
        <div className='container mt-5 marginGoods'>
            <div className='row'>
            <div className='col-4 text-center'>
                <img src={stuff1} alt='1' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 54.00</p>
            </div>
            <div className='col-4 text-center'>
                <img src={stuff2} alt='2' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 52.00</p>
            </div>
            <div className='col-4 text-center'>
                <img src={stuff3} alt='3' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 44.00</p>
                </div>
            <div className='col-4 text-center'>
                <img src={stuff4} alt='4' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 49.00</p>
            </div>
            <div className='col-4 text-center'>
                <img src={stuff5} alt='5' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 50.00</p>
            </div>
            <div className='col-4 text-center'>
                <img src={stuff6} alt='6' width='300px'/>
                <p className='nameStaff mb-0'>Enim non in sint ad</p>
                <p className='price mb-5'>$ 48.00</p>
            </div>
            </div>
        </div>
    );
};

export default Goods;