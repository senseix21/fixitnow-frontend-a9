/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '@/assets/heroImg.png'


interface CarouselProps {
    images: string[];
    headings: string[];
}

const BannerCarousel: React.FC<CarouselProps> = ({ images, headings }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 4000); // Change slide every 4 seconds

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component unmounts
        };
    }, [activeIndex, nextSlide]);

    return (
        <div className="carousel w-full ">
            {images.map((image, index) => (
                <div key={index} className={`carousel-item relative w-full ${activeIndex === index ? 'block' : 'hidden'}`}>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-primary"> FixItNow: On-Demand
                                    <span className=" inline-block">Home Repair and Maintenance Services</span></h1>
                                <p className="mb-5">
                                    Welcome to a Smoother Home Life. Get Quick, Reliable, and Expert Home Services on Demand with FixItNow.
                                    From Leaky Faucets to Full Renovations, We Have You Covered! Book Now and Enjoy Peace of Mind at Home.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#prev" onClick={prevSlide} className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#next" onClick={nextSlide} className="btn btn-circle">
                            ❯
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default BannerCarousel;
