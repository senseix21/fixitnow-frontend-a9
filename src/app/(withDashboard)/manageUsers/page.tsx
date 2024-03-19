'use client'
import { useProfilesQuery } from '@/redux/api/profileApi';
import { User } from '@/types';
import React from 'react';

const ManageUsers = () => {
    const { data } = useProfilesQuery({});
    console.log(data);
    const users: User[] = data?.data;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) =>
                            <tr key={user.id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.contactNo}</td>
                            </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;