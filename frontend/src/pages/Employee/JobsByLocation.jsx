import React, { useEffect, useState } from "react";
import { useEmployeeContext, useJobContext } from "../../context";
import { JobCard } from "../../shared";
import { filterByLocation } from "../../utils/filters/Filters";
import { Link } from "react-router-dom";
import { MultiCarousal } from "../../components";

const JobsByLocation = ({ data }) => {
  const user = JSON.parse(sessionStorage.getItem("data"));
  const { getAllApplications } = useJobContext();
  const { getEmployeeProfile } = useEmployeeContext();
  const [location, setLocation] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fetchUserProfileDetail = async () => {
    try {
      const result = await getEmployeeProfile(user?.email);
      setFilterData(result?.data?.data);
      setLocation(result?.data?.data?.interests?.location);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  useEffect(() => {
    fetchUserProfileDetail();
  }, []);

  return (
    <div className="container-fluid py-6">
      <div className="container-sm">
        <h4 className="capitalize flex h4 items-center justify-between text-light">
          <span>Jobs according to your preffered locations</span>
          <Link className="">see more</Link>
        </h4>
        <p className="text-light">
          Here are a few of the jobs that matches your skills and interests at
          Career Techguru talent pool.
        </p>
      </div>
      <MultiCarousal>
        {location?.map((loc, idx) => (
          <JobCard data={filterByLocation(data, loc)} />
        ))}
      </MultiCarousal>
    </div>
  );
};

export default JobsByLocation;
