import React, { useState,useEffect } from 'react';
import {useSelector} from "react-redux";
import { CartItem } from '../components/CartItem';
import { ToastContainer,toast } from 'react-toastify';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state)=>state.bazar.productData);
  const userInfo=useSelector((state)=>state.bazar.userInfo);
  const [totalAmt,setTotalAmt]= useState("");
  const [payNow, setPayNow]=useState(false);
  useEffect(()=>{
    let price= 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price;
    })
    setTotalAmt(price.toFixed());
  },[productData])

  const handleCheckOut=()=>{
    if(userInfo){
      setPayNow(true);
    }
    else
    {
      toast.error("Please sign in to Checkout");
    }
  };
 const payment= async(token)=>{
  await axios.post("http://localhost:8000/pay",{
    amount:totalAmt * 100,
    token:token,
  });
 }
  return (
    <div>
      <img 
      className='w-full h-60 object-cover'
      src="https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?b=1&s=170667a&w=0&k=20&c=zll8NetKpkVebLipZi-jmAAz56gMvPlRNtnHNVuip_k="
      alt="cartImg" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
      <CartItem />
      <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
    <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
      <h2 className='text-2xl font-medium'>Cart Total</h2>
      <p className='flex items-center gap-4 text-base'>
        Subtotal{" "}
        <span className='font-titleFont font-bold text-lg'>
          $ {totalAmt}
        </span>
      </p>
      <p className='flex items-start gap-4 text-base'>
        Shipping{" "}
        <span>
          Loram Amet cupidatat excepteur amet nostrud ut reprehenderit labore veniam duis. 
          Ipsum sunt non id qui mollit elit officia cillum non. Fugiat ullamco tempor veniam officia consectetur duis eu dolor elit. 
          Laboris ullamco elit ad officia ullamco consectetur. Aute consequat enim non nulla consequat minim velit in irure. 
          Nisi commodo Lorem dolore culpa sit cillum elit duis. Qui in aute duis ad qui occaecat ea sint.
        </span>
      </p>
    </div>
    <p className='font-titleFont font-semibold flex justify-between mt-6'>
      { " "}
      Total <span className='text-xl font-bold'>$ {totalAmt}</span>
    </p>
    <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
      Processed to checkout</button>
      {
        payNow && (
        <div 
        className='w-full mt-6 flex items-center justify-center'>
          <StripeCheckout 
          stripeKey='pk_test_51Mvvp1HifTysHUPPK59ntIVtsq7VfwgmCFPqutgOQ139nhcxf1SrAbDQxVqZK3jJWoz2SCauOlWKVVfKuNWP1SLl005nIlssjY'
          name="Bazar Online Shopping"
          amount={totalAmt * 100}
          label="pay to bazar"
          description={`your Payment amount is $${totalAmt}`}
          token={payment}
          email={userInfo.email}
 /> 
 </div>
     ) }
      
      </div>
      </div>
      <ToastContainer 
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  );
};

export default Cart