'use client'
import { useAddReviewMutation } from '@/redux/api/reviewApi';
import { getUserInfo } from '@/services/auth.services';
import { ILoginResponse } from '@/types';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type review = {
    comment: string
}
type IProps = {
    serviceId: string
}

const ReviewPost = ({ serviceId }: IProps) => {
    const [addReview] = useAddReviewMutation({})

    const success = () => toast(" Yay, review added successfully!");
    const error = () => toast(" Meh, user couldn't add  review  !");

    //Set up user rating 
    const [newRating, setRating] = useState(0);
    let maxRating = 5;
    const handleRatingClick = (index: number) => {
        setRating(index + 1);
    }
    console.log(`rating`, newRating);
    const user: ILoginResponse | any = getUserInfo();


    const {
        register,
        handleSubmit,
    } = useForm<review>()
    const onSubmit: SubmitHandler<review> = async (data) => {
        const reviewData = {
            comment: data.comment,
            rating: newRating,
            serviceId: serviceId,
            userId: user?.userId!
        }
        console.log(reviewData, data);
        // Additional logic to handle the form data
        const res = await addReview(reviewData)
        if (res !== undefined) {
            success();
        } else {
            error();
        }

    }


    return (

        <div>
            <ToastContainer />

            <h3 className='text-2xl font-bold text-primary text-left mt-5'>Post your review:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex font-bold'>
                    <p className='font-bold'></p>
                </div>
                <div className='p-5 flex items-center '>
                    <div className='flex'>
                        {[...Array(maxRating)].map((_, index) => (
                            <FaStar
                                key={index}
                                style={{ color: index < newRating ? 'red' : '#e4e5e9' }}
                                onClick={() => handleRatingClick(index)}
                            />
                        ))}
                    </div>
                </div>

                <input {...register("comment")} name="comment" placeholder="Write your Review..." className="textarea textarea-bordered textarea-lg w-full flex justify-start" />

                <button type='submit' className='btn btn-outline mt-5 flex justify-start'> Submit your review</button>

            </form>
        </div>

    );
};

export default ReviewPost;