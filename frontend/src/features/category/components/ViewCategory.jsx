import React, { useEffect, useState } from "react";
import { useJobContext, useSectionContext } from "../../../context";
import { getTimeDifference } from "../../../utils/dateFilter/DateFilter";

const ViewCategory = () => {
  const { getAllSections } = useSectionContext();
  const [sections, setSections] = useState([]);
  const getDectionData = async () => {
    try {
      const result = await getAllSections();
      setSections(result?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDectionData();
  }, [sections]);
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <h4>Active Job Application</h4>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="flex gap-2">
                <input type="checkbox" className="" />
                <label htmlFor="selectAll">Select All</label>
              </th>
              <th>Title</th>
              <th>Jobs</th>
              <th>Posted on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sections?.map((category, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" className="" />
                </td>
                <td>{category.title}</td>
                <td>Unknown</td>
                <td>{getTimeDifference(category.createAt)}</td>
                <td className="flex items-center gap-3">
                  <button className="btn-main bg-[#272343] text-light">
                    delete
                  </button>
                  <button className="btn-main bg-[#8dc6ff] text-white">
                    pause
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewCategory;
