import React from 'react';
import { getStoredCart } from '../../utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobData=useLoaderData()
    let cart=[]
    const savedCart=getStoredCart()
    for(const id in savedCart){
        const foundProduct=jobData.find(product=>product.id===id)
        if(foundProduct){
            cart.push(foundProduct)
        }
    }
    console.log(cart);
    // const cartData=localStorage.getItem('shopping-cart')
    // const cart= getLocalData()
    // // if(cartData){
    // //     const cart=JSON.parse(cartData)
    // // } 
    // console.log(cartData);
    return (
        <div>
            Cart
        </div>
    );
};

export default AppliedJobs;