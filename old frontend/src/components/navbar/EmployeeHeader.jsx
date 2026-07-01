import React, { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context';
import Dropdown from '../dropdown/Dropdown';
import logoImg from '../../assets/logo.jpeg'


const EmployeeHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const {logoutUser} = useAuthContext();
  const data = JSON.parse(sessionStorage.getItem('data'))
console.log("this is ", data?.role)

  const handleSidebarLinkClick = () => {
    setIsSidebarOpen(true); // Close sidebar after clicking any link
  };
  const Logout = () => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => logoutUser()
        },
        {
          label: 'No',
          onClick: () => ({})
        }
      ]
    });
  }
  const options = [
    { label: 'Add Application', path: 'add-job' },
    { label: 'View Application', path: '/view-applications' },
    { label: 'Application Recieved', path: 'recieved-applications' },
  ];
  const ProfileOptions = [
    { label: 'My Profile', path: 'view-profile' },
    { label: 'Notification', path: '/' },
    { label: 'My Application', path: '/view-applications' },
  ];
  return (
    <>
      <nav className='navbar mx-2 navbar-expand-lg bg-body-tertiary sticky-top'>
        <Link to="/" className="font-bold text-primary text-xl">
          <img src={logoImg} alt="" className="w-44"/>        
        </Link>        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ms-3 offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Careertech Guru</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          <div className="offcanvas-body items-center">
            <ul className="navbar-nav items-center ms-auto gap-2 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas" >
                <Link className="nav-link font-semibold"></Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas" >
                <Link to='view-jobs' className='nav-link'>Jobs</Link>
              </li>
              <li className="nav-item" >
                <Dropdown options={ProfileOptions} placeholder="My Profile" dismiss={`offcanvas`} />
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas" >
                <button onClick={Logout} className='btn-main bg-[#0E42A8] text-light text-[14px]'>Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default EmployeeHeader