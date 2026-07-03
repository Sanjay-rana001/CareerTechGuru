import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import EmployerLayout from "./EmployerLayout";
import RequiresAuth from "./RequiresAuth";
import { employeeRoutes, employerRoutes } from "./privateRoutes";
import EmployeeLayout from "./EmployeeLayout";
import { ContentRoutes, authRoutes } from "./publicRoutes";
import { useAuthContext } from "../context";
import AdminLayout from "./AdminLayout";
import { CircularLoader } from "../components";

const Home = React.lazy(() => import("../pages/Home"));
const EmployeHome = React.lazy(() => import("../pages/Employee/EmployeHome"));
const AdminHome = React.lazy(() => import("../pages/adminPages/AdminHome"));
const BrandSettings = React.lazy(() => import("../pages/Admin/BrandSettings"));
const Dashboard = React.lazy(
  () => import("../shared/employerPages/components/Dashboard"),
);
const Error = React.lazy(() => import("../pages/Error"));

const Index = () => {
  const { token, role, isCheckingAuth } = useAuthContext();

  if (isCheckingAuth) {
    return <CircularLoader />;
  }

  return (
    <Suspense fallback={<CircularLoader />}>
      <Routes>
        {role === "admin" && token ? (
          <Route element={<EmployerLayout />}>
            <Route element={<RequiresAuth />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<Navigate to="/" replace />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              {employerRoutes.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
              ))}
            </Route>
          </Route>
        ) : role === "user" && token ? (
          <Route element={<EmployeeLayout />}>
            <Route path="/" element={<EmployeHome />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            {ContentRoutes?.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
            <Route element={<RequiresAuth />}>
              {employeeRoutes?.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
              ))}
            </Route>
          </Route>
        ) : (
          <>
            <Route element={<SharedLayout />}>
              <Route path="/" element={<Home />} />
              {ContentRoutes?.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
              ))}
            </Route>
            {authRoutes?.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </>
        )}
        <Route path="*" element={<Error />} />
        {role === "superadmin" && token ? (
          <Route element={<AdminLayout />}>
            <Route path="admin-dashboard" element={<AdminHome />} />
            <Route path="brand-settings" element={<BrandSettings />} />
          </Route>
        ) : null}
      </Routes>
    </Suspense>
  );
};

export { Index };
