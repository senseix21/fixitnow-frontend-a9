'use client'
import React, { useState } from 'react';
import ServiceComponent from '@/components/ui/service';
import LoadingPage from '../laoding';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Service } from '@/types';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { useCategoriesQuery } from '@/redux/api/categoryApi';

type FormValues = {
    search: string;
    categoryId: string;
    minPrice: number;
    maxPrice: number;
};

const ServicesPage = () => {
    const { data: categoriesData, isLoading: isloading } = useCategoriesQuery({});
    const categories = categoriesData?.categories || [];

    const [search, setSearch] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const { register, handleSubmit } = useForm<FormValues>();
    const { data, isLoading } = useServicesQuery({
        search,
        categoryId,
    });

    const services: Service[] | undefined = data?.services || [];

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const categoryId = data.categoryId || ''; // Empty string if no category is selected.
        const minPrice = data.minPrice || 0;
        const maxPrice = data.maxPrice || Number.MAX_VALUE;
        setSearch(data.search);
        setCategoryId(data.categoryId);
        console.log(data);
    };

    return (
        <>
            <Navbar />
            {
                isLoading ? <LoadingPage /> :
                    <>
                        <div className="lg:flex justify-around items-center lg:p-10">
                            <div className="lg:max-w-md">
                                <h1 className="lg:text-4xl text-xl font-bold text-primary-focus">Our Top-notch Services</h1>
                            </div>
                            <form className="join" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div>
                                        <input
                                            {...register('search')}
                                            className="input input-bordered lg:join-item"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                                <select
                                    {...register('categoryId')}
                                    className="select select-bordered join-item"
                                >
                                    <option value="">Filter by Category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-secondary">new</span>
                                    <button className="btn join-item btn-primary" type="submit">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        <ServiceComponent services={services} />
                    </>
            }

            <Footer />
        </>
    );
};

export default ServicesPage;
