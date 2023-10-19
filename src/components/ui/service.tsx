'use client'
import LoadingPage from '@/app/laoding';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { Service, Service as ServiceType } from '@/types'; // Rename the import
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';


const ServiceComponent = ({ services }: { services: Service[] }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 lg:mx-12'>
            {
                services?.map((service, key) =>
                    <div key={key} className='mx-auto bg-primary text-black mb-10 rounded-md'>
                        <Image className='rounded-md h-60' src='https://i.ibb.co/phnQFmq/industrial.png' width={300} height={200} alt="" />
                        <small className='flex px-2 py-1'>
                            <span className='flex items-center' >
                                <span className='text-red-600 font-bold mx-1'>{service?.Review[0]?.rating}</span><span className='text-orange-600 flex'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></span>
                            </span>
                        </small>
                        <Link href={`/category/`}><h2 className='text-left font-bold px-2'>{service.title}</h2></Link>
                        <div className='flex items-center justify-between font-medium px-2'>
                            <small className='flex items-center'> {service?.category.name}</small>
                            <small></small>
                        </div>
                        <div className='flex items-center justify-between bg-primary px-2 py-1 rounded-md'>
                            <div className='flex items-center justify-between mx-1 font-medium' >
                                <p>Price</p>
                            </div>
                            <p className='font-bold'>${service.price}</p>
                        </div>
                        <Link href={`/services/${service.id}`} className="btn btn-block btn-outline text-black">See Details</Link>
                    </div>
                )
            }
        </div>
    );
};

export default ServiceComponent; // Export the renamed component
