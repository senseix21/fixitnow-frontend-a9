'use client'
import DatePickerComp from '@/components/ui/datePicker';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import ReviewItem from '@/components/ui/review';
import ReviewPost from '@/components/ui/reviewPost';
import { useAddTocartMutation } from '@/redux/api/cartApi';
import { useServiceQuery } from '@/redux/api/serviceApi';
import { Service } from '@/types';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useAddTobookingMutation } from '@/redux/api/bookingApi';



const ServicePage = ({ params }: { params: { slug: string } }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [createBooking] = useAddTobookingMutation({})

    const success = () => toast("Yay, service added to cart successfully!");
    const bookingSuccess = () => toast("Yay, Booking scheduled successfully!");

    const [addTocartService] = useAddTocartMutation();
    const id: string = params.slug;
    const { data, isLoading } = useServiceQuery(id);

    const service: Service | undefined = data?.services;

    const addTocart = async () => {
        const res = await addTocartService({
            serviceId: params.slug,
        });
        console.log(res);
        if (res !== undefined) {
            success();
        }
    }

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleBookClick = async () => {
        if (selectedDate) {
            // Format the selected date
            const formattedDate = format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

            const res = await createBooking({
                date: formattedDate,
                serviceId: params.slug,
            });
            console.log(res);
            if (res) {
                bookingSuccess();
            }
        }


    };



    return (
        <>
            <Navbar />
            <ToastContainer />

            <div className='grid lg:grid-cols-5 lg:mx-auto lg:m-10'>
                <div className="lg:col-span-3">
                    <h1 className='lg:text-4xl text-primary font-bold text-left'>{service?.title}</h1>
                    <p className='text-left mt-5 px-2'>{service?.description}</p>

                    <p className='font-semibold text-left lg:mt-5'>Category: <span className='text-primary'>{service?.category?.name}</span></p>
                    <div className='lg:mt-10'>
                        <h3 className='text-xl text-secondary text-left my-2'>Reviews:</h3>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            {service?.Review?.map((review, index) => (
                                <ReviewItem key={index} review={review} />
                            ))}
                        </div>

                        {/* review post */}
                        <ReviewPost serviceId={params.slug} />
                    </div>
                </div>

                <div className="lg:col-span-2  mx-auto">
                    <div className="card lg:w-96 bg-base-100 shadow-xl sticky top-15 ">
                        <figure><img src={service?.image} alt="Shoes" height={500} width={500} /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-left"> ${service?.price}</h2>
                            <div className="card-actions mt-2">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select a Date"
                                    className='input select input-secondary text-xl'
                                />
                                <button onClick={handleBookClick} className="btn btn-primary w-full">
                                    Book Now
                                </button>
                                <button onClick={addTocart} className="btn btn-outline w-full">Add to cart</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ServicePage;