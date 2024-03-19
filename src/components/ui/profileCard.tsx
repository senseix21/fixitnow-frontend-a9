import { User } from '@/types';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface UserProfileCardProps {
    userData: User

}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ userData }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                {userData && userData.profileImg && (
                    <Image src={userData.profileImg} alt="Movie" height={400} width={600} />
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title"> Name: {userData?.name}</h2>
                <p>Email: {userData?.email}</p>
                <p>Contact No.: {userData?.contactNo}</p>
                <p>Address: {userData?.address}</p>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
