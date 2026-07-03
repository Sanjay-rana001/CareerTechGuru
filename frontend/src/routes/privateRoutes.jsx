import React from "react";

const CategorySectionTab = React.lazy(
  () => import("../features/category/CategorySectionTab"),
);
const AddJobForm = React.lazy(() => import("../features/job/AddJobForm"));
const ViewCategory = React.lazy(
  () => import("../features/category/components/ViewCategory"),
);
const EmployerProfile = React.lazy(
  () => import("../shared/employerPages/components/EmployerProfile"),
);
const ViewJob = React.lazy(() => import("../features/job/components/ViewJob"));

const EmployeeProfile = React.lazy(
  () => import("../shared/employee/components/EmployeeProfile"),
);
const EmployeeAppliedJobs = React.lazy(
  () => import("../pages/Employee/EmployeeAppliedJobs"),
);
const AdminHome = React.lazy(() => import("../pages/adminPages/AdminHome"));

export const employerRoutes = [
  {
    path: "/add-category",
    element: <CategorySectionTab />,
  },
  {
    path: "/add-job",
    element: <AddJobForm />,
  },
  {
    path: "/view-applications",
    element: <ViewCategory />,
  },
  {
    path: "/view-profile",
    element: <EmployerProfile />,
  },

  // {
  //     path : '/complete-applications',
  //     element : <EmployerProfile />
  // },
  {
    path: "/view-my-applications",
    element: <ViewJob />,
  },
  // {
  //     path : '/recieved-applications',
  //     element : <AppliedJobs />
  // },
];

export const employeeRoutes = [
  {
    path: "/view-profile",
    element: <EmployeeProfile />,
  },
  {
    path: "/view-applications",
    element: <EmployeeAppliedJobs />,
  },
];

export const adminRoutes = [
  {
    path: "/admin-dashboard",
    element: <AdminHome />,
  },
];
