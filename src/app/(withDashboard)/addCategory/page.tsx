'use client'
import { error, success } from '@/components/ui/toasts';
import { uploadImage } from '@/helpers/funtions/uploadImage';
import { useAddCategoryMutation } from '@/redux/api/categoryApi';
import { Service } from '@/types';
import { Router } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

type FormData = {
    name: String;

}

const AddCategory: React.FC = () => {

    const [addCategory] = useAddCategoryMutation({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({

        reValidateMode: 'onBlur',
        criteriaMode: 'all', // Add this line to validate all fields on submit
    });



    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            console.log(data);
            if (Object.keys(errors).length === 0) {
                // No validation errors, proceed with form submission
                const res: any = await addCategory({ ...data });
                console.log(res);
                if (res?.data) {
                    success(res.data.message);
                    reset();
                } else {
                    error(res.error.message);
                }
            } else {
                // Validation errors exist, display or handle accordingly
                console.log('Form has validation errors');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };


    return (
        <div className="h-full bg-gray-400 dark:bg-gray-900" data-theme="light">
            <div className="mx-auto">
                <div className=" px-6 py-12">
                    <div className="w-full  flex">

                        <div className="w-full  bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create Category</h3>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                            >
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Category Name</label>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="Name"
                                        type="text"
                                        placeholder="Category Name"
                                    />
                                    {errors.name && <p className="text-xs italic text-red-500">{errors.name.message}</p>}
                                </div>


                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Add Category
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddCategory;
