import React from 'react';

const Login = React.lazy(() => import('../shared/auth/Login'));
const Signup = React.lazy(() => import('../shared/auth/signup/Signup'));
const ForgotPassword = React.lazy(() => import('../shared/auth/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../shared/auth/ResetPassword'));
const VerifyOtp = React.lazy(() => import('../shared/auth/VerifyOtp'));

const Aboutus = React.lazy(() => import('../pages/Aboutus'));
const AllJobs = React.lazy(() => import('../pages/AllJobs'));
const JobDetailPage = React.lazy(() => import('../pages/JobDetailPage'));
const ContactUs = React.lazy(() => import('../pages/ContactUs'));

export const authRoutes = [
    {path : "/login", element : <Login />},
    {path : "/register", element : <Signup />},
    {path : "/forgot-password", element : <ForgotPassword />},
    {path : "/reset-password", element : <ResetPassword />},
    {path : "/verify-otp", element : <VerifyOtp />},
]

export const ContentRoutes = [
    {
        path : "/view-jobs",
        element : <AllJobs />
    },
    {
        path : "/view-jobs/:category",
        element : <AllJobs />
    },
    {
        path : "/search-product/:category/:location/:experience",
        element : <AllJobs />
    },
    {
        path : "/view-jobs-detail/:title",
        element : <JobDetailPage />
    },
    {
        path : "/about-us",
        element : <Aboutus />
    },
    {
        path : "/contact-us",
        element : <ContactUs />
    },
]
