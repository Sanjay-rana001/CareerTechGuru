import React from "react";
import TabMenu from "../../components/tabs/TabMenu";
import AddJobForm from "./AddJobForm";
import ViewJob from "./components/ViewJob";
import AppliedJobs from "./components/AppliedJobs";
import { useJobContext } from "../../context";

const JobTab = () => {
  const { Jobs } = useJobContext();
  const tabs = [
    "Add Job",
    `Active Job (${Jobs?.length || 0})`,
    "Job Application",
  ];
  const children = [<AddJobForm />, <ViewJob />, <AppliedJobs />];

  console.log("lenght", Jobs);
  return <TabMenu tabs={tabs} children={children} />;
};

export default JobTab;
