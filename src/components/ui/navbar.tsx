'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '@/assets/logo.png'
import { getUserInfo } from '@/services/auth.services';
import { useCategoriesQuery, useCategoryQuery } from '@/redux/api/categoryApi';
import { Cart, Category, ILoginResponse, ResponseSuccessType } from '@/types';
import { logoutUser } from '@/utils/logout';
import { useCartsQuery, useDeletecartMutation } from '@/redux/api/cartApi';
import LoadingPage from '@/app/laoding';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPersonBadgeFill, BsPersonFill } from 'react-icons/bs';

const Navbar = () => {

    const user: ILoginResponse | unknown = getUserInfo();
    const { data, isLoading } = useCartsQuery({});
    const carts: Cart[] | undefined = data?.carts;





    return (
        <div className="navbar bg-base-100" suppressHydrationWarning>
            <div className="navbar-start" >
                <ToastContainer />
                {/* Dropdown menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/blogs'>Blogs</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        {
                            !user ?
                                <>
                                    <li><a href='/login'>Sign In</a></li>
                                    <li><a href='/signup'>Sign Up</a></li>
                                </> :
                                null
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Image src={logo} alt='logo' width={60} height={50} />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Horizontal menu */}
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/services'>Services</a></li>
                    <li><a href='/blogs'>Blogs</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    {
                        !user ?
                            <>
                                <li><a href='/login'>Sign In</a></li>
                                <li><a href='/signup'>Sign Up</a></li>
                            </> :
                            null
                    }
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end" >
                        {/* Add your custom buttons or links here */}
                        <div className="flex items-center">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow">
                                    <div className="card-body">
                                        {
                                            carts?.map((service, key) =>
                                                <>
                                                    <div className='flex justify-between items-center'>
                                                        <figure><img src={service?.service?.image} alt="" width={50} /></figure>
                                                        <span className="font-bold text-lg">{service?.service?.title}</span>

                                                    </div>
                                                </>

                                            )
                                        }
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <span className='text-4xl '><BsPersonFill />
                                        </span>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/profile' className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a href='/dashboard'>Dashboard</a></li>
                                    <li><a onClick={logoutUser}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
};

export default Navbar;
