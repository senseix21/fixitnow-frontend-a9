'use client'
import Image from 'next/image';
import React from 'react';
// https://i.ibb.co/RgmGP0z/icons8-award-96.png
// https://i.ibb.co/PxnSkz9/icons8-mechanic-96.png
// https://i.ibb.co/TcxQZ2G/icons8-money-96.png
// https://i.ibb.co/j88tyGC/icons8-prize-money-96.png


const Stats: React.FC = () => {
    return (
        <div className="text-gray-600 body-font lg:mx-20">
            <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="-mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 ">
                        <h2 className="title-font font-bold text-3xl text-gray-900">
                            <span className='text-primary'>Turning Your  Construction Dreams</span> into Reality
                        </h2>
                        <p className="leading-relaxed">
                            We are here to make your  construction dreams a reality. We provide all the electrical solutions you need and are always by your side. Our dedicated professional team and 24/7 service are ready to assist you with your electrical construction projects.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 justify-center '>
                        <div className="p-4  lg:w-1/2">
                            <img src="https://i.ibb.co/TcxQZ2G/icons8-money-96.png" alt="Affordable Prices" />
                            <p className="leading-relaxed">Affordable Prices</p>
                        </div>

                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/RgmGP0z/icons8-award-96.png" alt="100% Guarantee" />
                            <p className="leading-relaxed">100% Guarantee</p>
                        </div>
                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/PxnSkz9/icons8-mechanic-96.png" alt="24/7 Availability" />
                            <p className="leading-relaxed">24/7 Availability</p>
                        </div>
                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/j88tyGC/icons8-prize-money-96.png" alt="Recognized Institution" />
                            <p className="leading-relaxed">Recognized Institution</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <Image className="object-cover object-center" height={300} width={600} src="https://i.ibb.co/Ssq45ny/stats-hero.png" alt="Stats" />
                </div>
            </div>
        </div>
    );
};

export default Stats;
