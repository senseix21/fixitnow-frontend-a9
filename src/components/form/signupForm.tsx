'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUserSignupMutation } from '@/redux/api/authApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadImage } from '@/helpers/funtions/uploadImage';
import { error, success } from '../ui/toasts';

type FormData = {
    name: string;
    email: string;
    address: string;
    profileImg: string | null;
    contactNo: string;
    password: string;
    confirmPassword: string;
};



const SignupForm: React.FC = () => {
    const router = useRouter();


    const [signupUser] = useUserSignupMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            address: '',
            profileImg: '',
            contactNo: '',
            password: '',
        },
        reValidateMode: 'onBlur',
        criteriaMode: 'all', // Add this line to validate all fields on submit
    });

    const password = watch('password');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const url = await uploadImage(selectedFile);
            setValue('profileImg', url);
        }
    };

    const onSubmit: SubmitHandler<FormData> = async (data, e) => {
        try {
            const { confirmPassword, ...formData } = data;

            if (Object.keys(errors).length === 0) {
                // No validation errors, proceed with form submission
                const res: any = await signupUser({ ...formData });

                if (res) {
                    success(res.data.message);
                    reset();
                    router.push('/login');
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
        <div className="h-full bg-gray-400 dark:bg-gray-900">
            <div className="mx-auto">
                <div className="flex justify-center px-6 py-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/s05eBMKkxww/600x800')" }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                            >
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Full Name</label>
                                        <input
                                            {...register('name', { required: 'Full Name is required' })}
                                            className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                        {errors.name && <p className="text-xs italic text-red-500">{errors.name.message}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Email Address</label>
                                        <input
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Address</label>
                                    <input
                                        {...register('address', { required: 'Address is required' })}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="Address"
                                    />
                                    {errors.address && <p className="text-xs italic text-red-500">{errors.address.message}</p>}
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Profile Image</label>
                                        <input
                                            // {...register('profileImg',)}
                                            className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="ProfileImage"
                                            type="file"
                                            placeholder="Profile Image"
                                            onChange={handleFileChange}

                                        />
                                        {errors.profileImg && <p className="text-xs italic text-red-500">{errors.profileImg.message}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Phone</label>
                                        <input
                                            {...register('contactNo', { required: 'Phone number is required' })}
                                            className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="contactNo"
                                            type="text"
                                            placeholder="Phone"
                                        />
                                        {errors.contactNo && <p className="text-xs italic text-red-500">{errors.contactNo.message}</p>}
                                    </div>
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Password</label>
                                        <input
                                            {...register('password', { required: 'Please choose a password.' })}
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        {errors.password && <p className="text-xs italic text-red-500">{errors.password.message}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Confirm Password</label>
                                        <input
                                            {...register('confirmPassword', {
                                                required: 'Please confirm your password.',
                                                validate: (value) => value === password || 'Passwords do not match.',
                                            })}
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-xs italic text-red-500">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
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

export default SignupForm;
