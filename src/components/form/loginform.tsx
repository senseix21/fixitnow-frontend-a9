'use client'
import { useUserLoginMutation } from '@/redux/api/authApi';
import { getUserInfo, storeUserInfo } from '@/services/auth.services';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IGenericResponse } from '../../../interfaces/common';
import { error, success } from '../ui/toasts';

type Inputs = {
    email: string;
    password: string;
}

const Loginform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const router = useRouter();

    const [loginUser] = useUserLoginMutation();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        getUserInfo()
        try {
            const response: any = await loginUser(data);

            if (response.data) {
                console.log(response);
                success(response?.data?.message);
                console.log(response.data);
                storeUserInfo({ accessToken: response.data?.token });
            } else {

                error(response.error.message);

            }
        } catch (error: any) {
            console.log(error)

        }
    }
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

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Email Address</label>
                                    <input
                                        {...register('email', { required: 'email is required' })}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="mail@Address.com"
                                    />
                                    {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
                                </div>

                                <div className="mb-4">
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

                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Login
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
                                        Dont have an account? Sign Up!
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

export default Loginform;

