'use client'
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { ICategory } from '@/types';
import Link from 'next/link';
import React from 'react';
import categoryIcon from '@/assets/category-icon.png';
import Image from 'next/image';
import LoadingPage from '@/app/laoding';

const Category = () => {
    const { data, isLoading } = useCategoriesQuery({})

    const categories: ICategory[] | undefined = data?.data.slice(0, 6);

    return (
        <div className='bg-base-100 lg:p-10'>
            <div className=" text-center">
                <h1 className="text-5xl font-bold text-neutral">Our Featured Categories</h1>
                <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-4 '>
                {
                    categories?.map((category, key) =>
                        <div key={key} className='flex-row items-center justify-center content-center text-left bg-neutral  lg:px-32 m-2 rounded-md '>
                            <Image src={categoryIcon} alt="" width={96} height={96} />
                            <Link href={`/services?categoryId=${category.id}`}>
                                <h2 className='text-base-100'>{category.name}</h2>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;