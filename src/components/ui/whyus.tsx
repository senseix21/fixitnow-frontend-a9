import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import whyUs from '@/assets/whyUs.png';

const WhyUs = () => {
    return (
        <section className=" body-font">
            <div className="container mx-auto lg:flex px-5 py-5 md:flex-row md:items-center md:justify-between">
                <div className="lg:max-w-lg md:w-2/3 w-full md:items-center">
                    <Image className="md:object-cover object-center rounded block" alt="hero" src={whyUs} width={500} height={500} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl md:text-4xl mb-4 font-bold text-primary-focus">Elevate Your Journey

                        <span className=" inline-block text-base-content">Our with Unrivaled Excellence</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        At Fixitnow, we offer an extensive selection of personalized experiences and services. We pride ourselves on providing exceptional quality,
                        tailored solutions, and unparalleled customer service.
                    </p>
                    <div className="flex justify-center text-accent-content">
                        <Link href={'/book'} className='btn btn-md mr-2 bg-base-300 btn-outline'>Get a quote </Link >

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;