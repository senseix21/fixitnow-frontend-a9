import Loginform from '@/components/form/loginform';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import { useUserLoginMutation } from '@/redux/api/authApi';
import React from 'react';

const LoginPage = (): React.JSX.Element => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Loginform />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default LoginPage;
