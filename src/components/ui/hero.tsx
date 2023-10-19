import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { RxResume } from 'react-icons/rx'
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '@/assets/heroImg.png'

export default function HeroBanner(): React.JSX.Element {
    return (
        <section className=" body-font">
            <div className="container mx-auto lg:flex px-5 py-5 md:flex-row md:items-center md:justify-around">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-5xl md:text-5xl mb-4 font-bold text-primary">FixItNow: On-Demand
                        <span className=" inline-block text-base-content">Home Repair and Maintenance Services</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Welcome to a Smoother Home Life. Get Quick, Reliable, and Expert Home Services on Demand with FixItNow.
                        From Leaky Faucets to Full Renovations, We Have You Covered! Book Now and Enjoy Peace of Mind at Home.
                    </p>
                    <div className="flex justify-center text-base-content">
                        <Link href={''} className='btn btn-md mr-2 bg-primary btn-outline'><FaGithub /> Book Now </Link >

                    </div>
                </div>
                <div className="lg:max-w-lg md:w-2/3 w-full md:items-center">
                    <Image className="md:object-cover object-center rounded block" alt="hero" src={heroImg} width={600} height={600} />
                </div>
            </div>
        </section>
    )
}
