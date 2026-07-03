import React from "react";
import { useAuthContext } from "../../../context";
import EmployeeProfile from "./EmployeeProfile";
import EmployerProfile from "./EmployerProfile";

const Profile = () => {
  const { role } = useAuthContext();
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-2">
          <h3 className="h2 font-semibold">Complete your profile</h3>
          <div className="row">
            <div className="col-lg">
              {role === "Employee" ? <EmployeeProfile /> : <EmployerProfile />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
