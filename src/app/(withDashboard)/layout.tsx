'use client'
import Menu from '@/components/ui/menu';
import Navbar from '@/components/ui/navbar';
import { adminMenuItems, superAdminMenuItems, userMenuItems } from '@/constants/menuItmes';
import { getUserInfo } from '@/services/auth.services';
import { ILoginResponse, UserRole } from '@/types';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const user: ILoginResponse | any = getUserInfo();
    console.log(user)

    return (
        <div data-theme='dark'>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify-items-start">
                    {/* Page content here */}
                    {children}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            user?.role === "USER" ? < Menu items={userMenuItems} />
                                : user?.role === "ADMIN" ? < Menu items={adminMenuItems} />
                                    : user?.role === "SUPER_ADMIN" ? <Menu items={superAdminMenuItems} /> : null
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;