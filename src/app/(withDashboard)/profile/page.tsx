'use client'
import LoadingPage from '@/app/laoding';
import UserProfileCard from '@/components/ui/profileCard';
import { useProfilesQuery } from '@/redux/api/profileApi';
import { User } from '@/types';
import React from 'react';

const ProfilePage = () => {
    const { data } = useProfilesQuery({});
    const userData = data?.data || {} as User;
    console.log(userData)
    return (
        <div>
            <UserProfileCard userData={userData} />
        </div>
    );
};

export default ProfilePage;