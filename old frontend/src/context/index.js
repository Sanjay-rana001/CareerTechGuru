import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { SectionContext } from "./sectionContext/SectionContext";
import { JobContext } from "./jobContext/JobContext";
import { AdminContext } from "./adminContext/AdminContext";
import { EmployeeContext } from "./employeeContext/EmployeeContext";
import { SearchContext } from "./searchContext/SearchContext";

export { default as AuthContextProvider } from './authContext/AuthContext';
export { default as SectionContextProvider } from './sectionContext/SectionContext'
export { default as JobContextProvider } from './jobContext/JobContext';
export { default as AdminContextProvider } from './adminContext/AdminContext';
export { default as EmployeeContextProvider } from './employeeContext/EmployeeContext'
export { default as SearchContextProvider } from './searchContext/SearchContext'


export const useAuthContext = () => useContext(AuthContext);
export const useSectionContext = () => useContext(SectionContext);
export const useJobContext = () => useContext(JobContext);
export const useAdminContext = () => useContext(AdminContext);
export const useEmployeeContext = () => useContext(EmployeeContext);
export const useSearchContext = () => useContext(SearchContext);


