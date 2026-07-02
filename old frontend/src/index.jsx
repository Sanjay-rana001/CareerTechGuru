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

import ErrorBoundary from './components/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
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
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
