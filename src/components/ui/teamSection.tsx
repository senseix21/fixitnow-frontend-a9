'use client'
import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    socialLinks: { icon: string; url: string }[];
    imageSrc: string;
}

const sampleTeam: TeamMember[] = [
    {
        name: 'Holden Caulfield',
        role: 'UI Developer',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        socialLinks: [
            { icon: 'twitter', url: 'https://twitter.com/' },
            { icon: 'linkedin', url: 'https://linkedin.com/' },
            { icon: 'github', url: 'https://github.com/' },
        ],
        imageSrc: 'https://i.ibb.co/XZKQD88/profile.png',
    },
    {
        name: 'Alper Kamu',
        role: 'Designer',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        socialLinks: [
            { icon: 'twitter', url: 'https://twitter.com/' },
            { icon: 'linkedin', url: 'https://linkedin.com/' },
            { icon: 'github', url: 'https://github.com/' },
        ],
        imageSrc: 'https://i.ibb.co/XZKQD88/profile.png',
    },
    {
        name: 'Atticus Finch',
        role: 'UI Developer',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        socialLinks: [
            { icon: 'twitter', url: 'https://twitter.com/' },
            { icon: 'linkedin', url: 'https://linkedin.com/' },
            { icon: 'github', url: 'https://github.com/' },
        ],
        imageSrc: 'https://i.ibb.co/XZKQD88/profile.png',
    },
    {
        name: 'Henry Letham',
        role: 'Designer',
        description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
        socialLinks: [
            { icon: 'twitter', url: 'https://twitter.com/' },
            { icon: 'linkedin', url: 'https://linkedin.com/' },
            { icon: 'github', url: 'https://github.com/' },
        ],
        imageSrc: 'https://i.ibb.co/XZKQD88/profile.png',
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 lg:px-20 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl font-medium title-font mb-4 text-primary tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                        you probably havent heard of them.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {sampleTeam.map((member, index) => (
                        <div key={index} className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img
                                    alt={member.name}
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                    src={member.imageSrc}
                                />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-primary">{member.name}</h2>
                                    <h3 className="text-gray-500 mb-3">{member.role}</h3>
                                    <p className="mb-4">{member.description}</p>
                                    <span className="inline-flex">
                                        {member.socialLinks.map((link, i) => (
                                            <a key={i} className="text-primary" href={link.url}>
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
