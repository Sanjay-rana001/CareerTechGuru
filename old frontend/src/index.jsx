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
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
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
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
