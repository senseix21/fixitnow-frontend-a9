'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUserSignupMutation } from '@/redux/api/authApi';
import Image from 'next/image';
import signupImg from '@/assets/signupImg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupForm: React.FC = () => {
    const router = useRouter();
    const success = () => toast(" Yay, user signed up successfully!");
    const error = () => toast(" Meh, user couldn't signed up !");

    const [signupUser] = useUserSignupMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();
    const onSubmit: SubmitHandler<any> = async (data) => {
        try {
            const res = await signupUser({ ...data }).unwrap();
            console.log(res)
            if (res) {
                success();
                router.push('/');
            } else {
                error();
            }

        } catch (errors: any) {
            console.log(errors.messages)


        }
    }

    return (
        <section className=" body-font">
            <ToastContainer />
            <div className="container mx-auto lg:flex px-5 py-5 md:flex-row md:items-center md:justify-between">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto w-full max-w-sm ">
                        <div className="">
                            <div className='flex  justify-around'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input {...register('name')} type="text" placeholder="Full Name" className="input input-bordered" />
                                </div>
                                <div className="form-control ml-2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register('email')} type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex justify-around'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register('password')} type="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Role</span>
                    </label>
                    <select {...register('role')} className="input input-bordered">
                        <option value={UserRole.USER}>User</option>
                        <option value={UserRole.ADMIN}>Admin</option>
                        <option value={UserRole.SUPER_ADMIN}>Super Admin</option>
                    </select>
                </div> */}
                                <div className="form-control ml-2">
                                    <label className="label">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input {...register('contactNo')} type="text" placeholder="Contact Number" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex justify-around'>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input {...register('address')} type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control ml-2">
                                    <label className="label">
                                        <span className="label-text">Profile Image URL</span>
                                    </label>
                                    <input {...register('profileImg')} type="text" placeholder="Profile Image URL" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lg:max-w-lg md:w-2/3 w-full md:items-center">
                    <h1 className='text-5xl text-primary'>Signup Now to use our services.</h1>
                    <Image className="md:object-cover object-center rounded block" alt="hero" src={signupImg} width={500} height={500} />
                </div>
            </div>
        </section>

    );
};

export default SignupForm;
