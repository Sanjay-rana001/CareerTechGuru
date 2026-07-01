import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import { AdminHome, EmployeHome, Home } from '../pages'
import EmployerLayout from './EmployerLayout'
import RequiresAuth from './RequiresAuth'
import { employeeRoutes, employerRoutes } from './privateRoutes'
import EmployeeLayout from './EmployeeLayout'
import { ContentRoutes, authRoutes } from './publicRoutes'
import { useAuthContext } from '../context'
import { Dashboard } from '../shared'
import Error from '../pages/Error'
import AdminLayout from './AdminLayout'

const Index = () => {
  const {token, role} = useAuthContext();

  return (
    <Routes>
      {role === 'admin' && token ? (
        <Route element={<EmployerLayout />}>
          <Route element={<RequiresAuth />}>
            <Route path='/' element={<Dashboard />} />
            {employerRoutes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>
      ) : role === 'user' && token ? (
        <Route element={<EmployeeLayout />}>
          <Route path='/' element={<EmployeHome />} />
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
            <Route path='/' element={<Home />} />
            {ContentRoutes?.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
            </Route>
            {authRoutes?.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
        </>
      )}
      <Route path='*' element={<Error />} />
      <Route element={<AdminLayout />}>
        <Route path='admin-dashboard' element={<AdminHome />} />
      </Route>
    </Routes>
  )
}

export { Index }



