'use client'
import React, { useState } from 'react';
import ServiceComponent from './service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { Service } from '@/types';


const UpcomingService: React.FC = () => {

    const { data } = useServicesQuery({ status: 'UPCOMMING' });
    console.log(data, 'upcoming');

    const services: Service[] = data?.data.slice(0, 3) || []; // Provide a default empty array

    return (
        <div>
            <div>
                <div className="lg:flex justify-around items-center lg:my-10">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-primary-focus">Our Upcoming Services</h1>
                    </div>

                </div>
                <div>
                    <div>
                        <ServiceComponent services={services} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingService;
