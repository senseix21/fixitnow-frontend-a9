import SignupForm from '@/components/form/signupForm';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import React from 'react';

const SignupPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <div>
                    <div>
                        <SignupForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignupPage;