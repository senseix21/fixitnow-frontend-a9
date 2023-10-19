'use client'
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { Category } from '@/types';
import Link from 'next/link';
import React from 'react';
import categoryIcon from '@/assets/category-icon.png';
import Image from 'next/image';
import LoadingPage from '@/app/laoding';

const Category = () => {
    const { data, isLoading } = useCategoriesQuery({})
    if (isLoading) return <LoadingPage />;

    const categories: Category[] | undefined = data?.categories.slice(0, 6);

    return (
        <div className='bg-base-100 lg:p-10'>
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-primary-focus">Our Featured Categories</h1>
                <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-4 '>
                {
                    categories?.map((category, key) =>
                        <div key={key} className='flex-row items-center justify-center content-center bg-primary-focus text-left  lg:px-32 m-2 rounded-md '>
                            <Image src={categoryIcon} alt="" width={96} height={96} />
                            <Link href={`/category/${category.id}`}><h2 className='text-base '>{category.name}</h2></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;