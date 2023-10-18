'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
    email: string;
    password: string;
}

const Loginform = () => {
    const success = () => toast(" Yay, user logged in successfully!");
    const error = () => toast(" Meh, user couldn't sign in !");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await fetch('https://fixitnow-backend-a9-e0lz8ew1v-senseix21.vercel.app/api/v1/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                success();
                const data = await response.json();
                console.log(data);
                localStorage.setItem('token', data.token); // Store the token in localStorage
            } else {
                error();
                console.error('Login failed');
            }
        } catch (error: any) {
            console.log(error.messages)

        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
            <ToastContainer />
            <div className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </div>
        </form>
    );
};

export default Loginform;

