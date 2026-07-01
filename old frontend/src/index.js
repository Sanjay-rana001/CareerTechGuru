import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  AdminContextProvider,
  AuthContextProvider,
  EmployeeContextProvider,
  JobContextProvider,
  SearchContextProvider,
  SectionContextProvider
} from './context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <AdminContextProvider>
          <EmployeeContextProvider>
            <JobContextProvider>
              <SectionContextProvider>
                <Router>
                  <App />
                </Router>
              </SectionContextProvider>
            </JobContextProvider>
          </EmployeeContextProvider>
        </AdminContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
reportWebVitals();
