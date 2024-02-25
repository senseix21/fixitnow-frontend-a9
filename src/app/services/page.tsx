'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { useServicesQuery } from '@/redux/api/serviceApi';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import ServiceComponent from '@/components/ui/service';
import { ICategory, Service } from '@/types';
import { useSearchParams } from 'next/navigation';

type FormValues = {
    search: string;
    categoryId: string;
    minPrice: string;
    maxPrice: string;
    size: number;
    page: number;
};


const ServicesPage: React.FC = () => {
    const { data: categoriesData } = useCategoriesQuery({});
    const categories = categoriesData?.data || [];
    const [page, setPage] = useState<number>(1);
    const searchParams = useSearchParams();
    const query = searchParams.get('categoryId');

    const { register, watch, setValue } = useForm<FormValues>();
    const { data } = useServicesQuery({
        search: watch('search') || '',
        categoryId: watch('categoryId') || query || '',
        minPrice: parseFloat(watch('minPrice')) || 0,
        maxPrice: parseFloat(watch('maxPrice')) || 1000,
        size: watch('size') || '',
        page: page || 1
    });

    // pagination handler functions
    const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (page < meta.totalPage) {
            setPage((prevPage) => prevPage + 1);
        }
    };



    const { data: services, meta } = data || { data: [], meta: {} };




    return (
        <div data-theme='light'>
            <Navbar />

            <div className="hero mb-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Choose from our extra-ordinary services</h1>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-12'>
                {/* Left Sidebar */}
                <div className='lg:col-span-3 bg-gray-200'>
                    <div className="p-4 ">
                        <h2 className="text-xl font-semibold mb-4">Filters</h2>

                        {/* Sorting */}
                        <form className='flex items-center justify-between'>


                            <select {...register('size')} className="select w-full max-w-xs">
                                <option disabled selected value={''} >Show</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </form>

                        {/* Category Filter */}
                        <form className="mb-4" >
                            <label className="block text-sm font-medium text-gray-600">Category</label>
                            <select
                                {...register('categoryId')}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            >
                                <option value="">All Categories</option>
                                {categories.map((category: ICategory) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </form>

                        {/* Price Range Filter */}
                        <form className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Price Range</label>
                            <div className="flex items-center">
                                <span className="mr-2">$</span>
                                <input
                                    {...register('minPrice')}
                                    type="number"
                                    className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
                                />
                                <span className="mr-2">to</span>
                                <input
                                    {...register('maxPrice')}
                                    type="number"
                                    className="w-1/2 p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </form>

                        <div className="flex justify-between">
                            <span>${watch('minPrice')}</span>
                            <span>${watch('maxPrice')}</span>
                        </div>

                        {/* Search */}
                        <form className="mt-4">
                            <label className="block text-sm font-medium text-gray-600">Search</label>
                            <input
                                {...register('search')}
                                type="text"
                                placeholder="Search products..."
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </form>
                    </div>
                </div>

                {/* Main Content */}
                <div className='lg:col-span-9 mb-10'>
                    <ServiceComponent services={services} />

                    {/* Pagination controls */}
                    <form className="join flex items-center justify-center ">
                        <button
                            className="join-item btn btn-outline px-5"
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                        >
                            Previous page
                        </button>
                        <span className="px-2">
                            Page {page} of {meta.totalPage}
                        </span>
                        <button
                            className="join-item btn btn-outline px-5"
                            onClick={handleNextPage}
                            disabled={page === meta.totalPage}
                        >
                            Next
                        </button>
                    </form>
                </div>


            </div>

            <Footer />
        </div>
    );
};

export default ServicesPage;