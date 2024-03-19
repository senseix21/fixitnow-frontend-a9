'use client'
import { error, success } from '@/components/ui/toasts';
import { uploadImage } from '@/helpers/funtions/uploadImage';
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { useAddServiceMutation } from '@/redux/api/serviceApi';
import { Service } from '@/types';
import { Router } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
type FormData = {
    title: String;
    description: String;
    price: BigInteger;
    image: String | null;
    categoryId: String;
}

const ServiceForm: React.FC = () => {

    const { data } = useCategoriesQuery({})
    const categories = data?.data
    const [addService] = useAddServiceMutation({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset
    } = useForm<FormData>({

        reValidateMode: 'onBlur',
        criteriaMode: 'all', // Add this line to validate all fields on submit
    });

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const url = await uploadImage(selectedFile);
            setValue('image', url);
        }
    };



    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            console.log(data);
            if (Object.keys(errors).length === 0) {
                // No validation errors, proceed with form submission
                const res: any = await addService({ ...data });
                console.log(res);
                if (res?.data) {
                    success(res.data.message);
                    reset();
                } else {
                    error(res.error);
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
                            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create Service</h3>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                            >
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Title</label>
                                    <input
                                        {...register('title', { required: 'Title is required' })}
                                        className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                    {errors.title && <p className="text-xs italic text-red-500">{errors.title.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Email price</label>
                                    <textarea
                                        {...register('description', {
                                            required: 'Description is required',
                                        })}
                                        className="w-full px-3 py-2 mt-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="description"
                                        rows={5}  // Set the number of rows here
                                        placeholder="Description"
                                    ></textarea>
                                    {errors.description && <p className="text-xs italic text-red-500">{errors.description.message}</p>}
                                </div>
                                <div className='mb-4 md:flex md:justify-between'
                                >
                                    <div className="mb-4">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Image</label>
                                            <input
                                                // {...register('image')}
                                                className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="Image"
                                                type="file"
                                                placeholder="Image"
                                                onChange={handleFileChange}
                                                multiple
                                            />
                                            {errors.image && <p className="text-xs italic text-red-500">{errors.image.message}</p>}
                                        </div>

                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Title</label>
                                        <input
                                            {...register("price", {
                                                valueAsNumber: true,
                                                required: "Price is required"
                                            })} className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="Price"
                                            type="number"
                                            placeholder="Price (i.e) $4590"
                                        />
                                        {errors.title && <p className="text-xs italic text-red-500">{errors.title.message}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Category</label>
                                        <select
                                            {...register('categoryId', {
                                                required: 'Please choose your Category.',
                                            })}
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="category"
                                        >
                                            <option value="" disabled selected>
                                                Select a Category
                                            </option>
                                            {
                                                categories?.map((category: any, index: number) =>
                                                    <option key={index} value={category?.id}>{category?.name}</option>

                                                )

                                            }
                                        </select>
                                        {errors.categoryId && (
                                            <p className="text-xs italic text-red-500">{errors.categoryId.message}</p>
                                        )}
                                    </div>
                                </div>


                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Add Service
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

export default ServiceForm;
