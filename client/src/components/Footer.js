import React from 'react';
import {graylogo,payment} from "../assets/index";
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaHome,FaGithub}from "react-icons/fa";
import {BsPersonFill,BsPaypal} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
export default function Footer()
{
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
            <img className='w-32 rounded-full' src={graylogo} alt="logolight" />
            <p className="text-white text-sm tracking-wide">© Onlineshopping.com</p>
           <img className="w-56" src={payment} alt="paymentlogo" />
        <div className='flex gap-5 text-lg text-gray-400'>
            <FaGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
        </div>
        </div>
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
        <div className='text-base flex flex-col gap-2'>
            <p>MBD, Ruwi, Muscat-Oman</p>
            <p>Mobile: 403 459 3343</p>
            <p>Phone: 403 483 8492</p>
            <p>e-mail: onlineshopping@gmail.com</p>
        </div>
        </div>
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
        <div className='flex flex-col gap-2 text-base'>
        <p className='flex items-center gap-3 hover:text-white durtion-300 cursor-pointer'><span><BsPersonFill /></span>My account</p>
        <p className='flex items-center gap-3 hover:text-white durtion-300 cursor-pointer'><span><BsPaypal /></span>CheckOut</p>
        <p className='flex items-center gap-3 hover:text-white durtion-300 cursor-pointer'><span><FaHome /></span>Order tracking</p>
        <p className='flex items-center gap-3 hover:text-white durtion-300 cursor-pointer'><span><MdLocationOn /></span>Help & Support</p>
        </div>
        </div> 
        <div className='flex flex-col justify-center'>
            <input className='bg-transparent border px-4 py-2 text-sm' type="text" placeholder="e-mail" />
            <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
        </div>
        </div>
        </div>

  )
}
