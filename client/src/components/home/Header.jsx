import React from 'react';
import CustomButton from '../customs/CustomButton';
import CustomArrow from '../customs/CustomArrow';
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/headerCss.css'

const Header = () => {
    
    const navigate = useNavigate();
    const handleCall=()=>{
        console.log('hello from header')
        navigate('/contact')
    }

    return (
        <div className='headerBackgroundImage h-screen w-full bg-cover -z-10 relative'>
            <div className='flex flex-col gap-4 text-white ml-32 py-32'>
                <h1 className='text-4xl max-w-xl leading-[4.5rem] mt-20 font-bold text-[3.75rem] font-Roboto'>
                    Navigating The Digital Landscape for Success
                </h1>
                <p className='text-lg max-w-sm font-Roboto'>
                    The best Digital Solution Agency in the Market. We are here to build your Dream website on the go.
                </p>
                <div onclick={handleCall} className='flex w-[12rem] ml-10 cursor-pointer'>
                    <CustomButton disabled={true} label={'Book a Call'} />
                    <CustomArrow icon={<FiArrowUpRight />} />
                </div>
            </div>
        </div>
    );
};

export default Header;
