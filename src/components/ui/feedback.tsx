'use client'
import React from 'react';
import feedbackImg from '@/assets/feedback.png'
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddfeedbackMutation } from '@/redux/api/feedbackApi';
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackValidationSchema } from '@/yupSchema/yupValidation';

type FormValues = {
    subject: string
    message: string
}

const FeedbackSection: React.FC = () => {
    const success = (msg: string) => toast(msg);
    const error = (msg: string) => toast(msg);

    const [createFeedback] = useAddfeedbackMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValues>({
        resolver: yupResolver(feedbackValidationSchema), // Apply Yup validation schema

    })
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res: any = await createFeedback({ ...data });
            console.log(res);
            success(res?.data?.message);
            reset();

        } catch (errors: any) {
            console.log(errors.messages)
            error(data?.message);


        }
    }

    return (
        <div className="hero bg-base-200">
            <ToastContainer />
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 bg-base-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="text-5xl font-bold">Feedback</h1>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Subject</label>
                        <input
                            {...register("subject")}
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        <p className='text-red-600'>{errors.subject?.message}</p>
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            {...register("message")}
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                        <p className='text-red-600'>{errors.message?.message}</p> {/* Display validation error */}
                    </div>
                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Feedback
                    </button>
                </form>
                <div className="text-center lg:text-left">
                    <Image src={feedbackImg} alt="" width={600} height={500} />
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
