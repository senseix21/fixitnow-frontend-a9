'use client'
import React from 'react';

const sampleData = [
    {
        category: 'CATEGORY 1',
        title: 'The Catalyzer',
        description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        imageSrc: 'https://i.ibb.co/phnQFmq/industrial.png',
        learnMoreLink: '#',
        likes: '1.2K',
        comments: '6',
    },
    {
        category: 'CATEGORY 2',
        title: 'The 400 Blows',
        description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        imageSrc: 'https://i.ibb.co/Ssq45ny/stats-hero.png',
        learnMoreLink: '#',
        likes: '1.2K',
        comments: '6',
    },
    {
        category: 'CATEGORY 3',
        title: 'Shooting Stars',
        description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
        imageSrc: 'https://i.ibb.co/z8R0FqW/zmk-hero-img.png',
        learnMoreLink: '#',
        likes: '1.2K',
        comments: '6',
    },
];

const BlogSection: React.FC = () => {
    return (
        <section className=" body-font py-24 lg:px-20">
            <h2 className='text-primary-focus text-4xl font-bold py-5'>See our latest blogs</h2>
            <div className="container px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                    {sampleData.map((item, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={item.imageSrc}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {item.category}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-primary-focus mb-3">{item.title}</h1>
                                    <p className="leading-relaxed mb-3">{item.description}</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            {item.likes}
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            {item.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
