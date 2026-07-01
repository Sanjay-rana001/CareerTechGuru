import { element } from "prop-types";
import { AddJobForm, AppliedJobs, CategorySectionTab, ViewCategory } from "../features";
import {AdminHome, EmployeeAppliedJobs} from '../pages'
import ViewJob from "../features/job/components/ViewJob";
import { Dashboard, EmployeeProfile } from "../shared";
import { EmployerProfile } from "../shared/employerPages";

export const employerRoutes = [
    {
        path : '/add-category',
        element : <CategorySectionTab />   
    },
    {
        path : '/add-job',
        element : <AddJobForm />   
    },
    {
        path : '/view-applications',
        element : <ViewCategory />   
    },
    {
        path : '/view-profile',
        element : <EmployerProfile />
    },
    
    // { 
    //     path : '/complete-applications', 
    //     element : <EmployerProfile />
    // },
    { 
        path : '/view-my-applications', 
        element : <ViewJob />
    },
    // { 
    //     path : '/recieved-applications', 
    //     element : <AppliedJobs />
    // },

]

export const employeeRoutes = [
    {
        path : "/view-profile",
        element : <EmployeeProfile />,
    },
    {
        path : "/view-applications",
        element : <EmployeeAppliedJobs />,
    },
    

]

export const adminRoutes = [
    {
        path : "/admin-dashboard",
        element : <AdminHome />
    }
]