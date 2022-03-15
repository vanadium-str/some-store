import React from 'react';
import {FaTree} from "react-icons/fa";
import {FaTools} from "react-icons/fa";
import {FaTruck} from "react-icons/fa";

const Products = () => {
    return (
        <div className='heightBlock d-flex flex-column justify-content-center'>
            <h3 className='head text-center productsMargin'>
                We are proud of our products
            </h3>
            <div className='container'>
                <div className='row text-center'>
                <div className='col-4'>
                <FaTree className='iconProducts mb-5'/>
                <p className='productsName'>
                    Materials
                    </p>
                <p className='productsTitle'>
                    Tempor ullamco aliqua amet consectetur tempor do ea ad aliquip ipsum occaecat
                     consequat duis velit</p>
                </div>
                <div className='col-4'>
                <FaTools className='iconProducts mb-5'/>
                <p className='productsName'>
                    Assembling
                    </p>
                <p className='productsTitle'>
                    Tempor ullamco aliqua amet consectetur tempor do ea ad aliquip ipsum occaecat</p>
                </div>
                <div className='col-4'>
                <FaTruck className='iconProducts mb-5'/>
                <p className='productsName'>
                    Delivery
                    </p>
                <p className='productsTitle'>
                    Tempor ullamco aliqua amet consectetur tempor do ea ad aliquip ipsum occaecat
                     consequat</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Products;