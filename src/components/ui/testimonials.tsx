/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react';

interface TestimonialData {
    name: string;
    role: string;
    content: string;
    imageSrc: string;
}

interface TestimonialsSectionProps {
    testimonials: TestimonialData[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 5 seconds

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component unmounts
        };
    }, [activeIndex, nextSlide]);


    return (
        <div className="bg-primary-focus text-base-100 px-2 sm:px-5 py-10 sm:py-24 mx-auto">
            <h1 className="text-3xl sm:text-5xl font-medium mb-3 sm:mb-6 text-center">Feedback About Us</h1>
            <div className="carousel grid  p-4 space-x-4 rounded-box">
                {testimonials.map((testimonial, index) => (


                    <div key={index} className={`carousel-item relative w-full ${activeIndex === index ? 'block' : 'hidden'}`}>
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">{testimonial.content}</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                            <h2 className="font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                            <p className="">{testimonial.role}</p>
                        </div>

                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                            <a href="#prev" onClick={prevSlide} className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#next" onClick={nextSlide} className="btn btn-circle">
                                ❯
                            </a>
                        </div> */}

                    </div>
                ))}
            </div>
        </div>

    );
};

export default TestimonialsSection;
