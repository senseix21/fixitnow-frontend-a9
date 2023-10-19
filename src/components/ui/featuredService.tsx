'use client'
import React, { useState } from 'react';
import ServiceComponent from './service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useServicesQuery } from '@/redux/api/serviceApi';
import LoadingPage from '@/app/laoding';
import { Service } from '@/types';

type FormValues = {
    search: string;
};

const FeaturedService: React.FC = () => {
    const [search, setSearch] = useState('');
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setSearch(data.search);
        console.log(search);
    };

    const { data, isLoading } = useServicesQuery({ search: search });

    if (isLoading) return <LoadingPage />;
    const services: Service[] | undefined = data?.services.slice(0, 6) || []; // Provide a default empty array

    return (
        <div>
            <div>
                <div className="lg:flex justify-around items-center lg:my-10">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-primary-focus">Our Featured Categories</h1>
                    </div>
                    <form className="join" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div>
                                <input {...register('search')} className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">new</span>
                            <button className="btn join-item btn-primary" type="submit">
                                Search
                            </button>
                        </div>
                    </form>
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

export default FeaturedService;
