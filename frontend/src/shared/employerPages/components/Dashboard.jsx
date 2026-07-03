import React from 'react'
import { TabMenu } from '../../../components'
import EmployerProfile from './EmployerProfile';
import ViewJob from '../../../features/job/components/ViewJob';
import EmployerDash from './EmployerDash';
import AppliedJobs from '../../../features/job/components/AppliedJobs';

const Dashboard = () => {
    const tabs = ['dashboard', 'job posting', 'applicants', 'company profile'];
    const children = [<EmployerDash />,<ViewJob />, <AppliedJobs />, <EmployerProfile />, ]
  return (
    <>
        <div className="container-fluid">
            <div className="container-sm">
                <div className="row py-4">
                    <h3 className="h3 text-center">My Account</h3>
                </div>
                <div className="row">
                    <dov className="col-lg">
                        <TabMenu tabs={tabs} children={children} />
                    </dov>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard