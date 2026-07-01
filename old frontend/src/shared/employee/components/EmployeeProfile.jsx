import React, { useEffect, useState } from 'react';
import EmployeeProfileForm from './EmployeeProfileForm';
import { useEmployeeContext } from '../../../context';
import ProfilePage from './ProfilePage';
import { CircularLoader } from '../../../components';

const EmployeeProfile = () => {
  const user = JSON.parse(sessionStorage.getItem('data'));
  const { getEmployeeProfile } = useEmployeeContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfileDetail = async () => {
    try {
      const result = await getEmployeeProfile(user?.email);
      setData(result?.data?.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfileDetail();
  }, []);

  if (loading) {
    return <CircularLoader />;
  }

  return (
    <div>
      {data 
        ? <ProfilePage data={data} /> 
        : <EmployeeProfileForm />
      }
    </div>
  );
};

export default EmployeeProfile;
