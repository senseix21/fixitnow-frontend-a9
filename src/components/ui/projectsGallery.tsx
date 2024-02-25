'use client'
import React from 'react';

const ProjectsGallery: React.FC = () => {
    return (
        <div className="text-gray-600 body-font lg:mx-20">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                        Our New Projects
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Any Cardigan, Tot Bag, Tumbler, Hexagon, Brooklyn, Asymmetrical Gentrfy, Subway Tile, Poke Farm-to-table. Franzen, you probably havent heard of them man bun Deep V, selfies Heirloom.
                    </p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/tqDtg4k/residential-electrical0-services.png" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/phnQFmq/industrial.png" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/CnfYbBg/emmergency.png" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/V9rHZt5/automation.png" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/vmxrbRp/air-conditon.png" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/Ssq45ny/stats-hero.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsGallery;
