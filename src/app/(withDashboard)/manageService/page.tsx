'use client'
import { useServicesQuery, useUpdateServiceMutation } from '@/redux/api/serviceApi';
import { Service } from '@/types';
import Link from 'next/link';
import { Router } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const ManageSerive = () => {
    const { data } = useServicesQuery({})
    const services = data?.data



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {services?.map((service: Service, index: number) => (
                            <tr key={index}>
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={service?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{service?.description}</span>
                                </td>
                                <td>
                                    <span className='font-semibold text-primary-focus'>{service?.status}</span>
                                    <br />
                                </td>
                                <td>
                                    <span>${service?.price}</span>
                                </td>
                                <th>
                                    <Link className="btn btn-xs bg-primary text-white" href={`/services/${service.id}`}>
                                        details
                                    </Link>
                                </th>

                            </tr>
                        ))}
                    </tbody>
                    {/* Foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div >
    );
};

export default ManageSerive;