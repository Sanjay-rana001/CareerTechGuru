import { Aboutus, AllJobs, JobDetailPage, ContactUs } from "../pages";
import { ForgotPassword, Login, ResetPassword,Signup, VerifyOtp } from "../shared";
import EmailVerify from "../shared/auth/signup/EmailVerify";
import FormStepOne from "../shared/auth/signup/FormStepOne";
import FormStepTwo from "../shared/auth/signup/FormStepTwo";
// import ContactUs from "../pages/ContactUs"

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
