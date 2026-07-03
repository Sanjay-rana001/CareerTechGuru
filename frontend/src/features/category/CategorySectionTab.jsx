import React from "react";
import AddCategory from "./components/AddCategory";
import ViewCategory from "./components/ViewCategory";
import TabMenu from "../../components/tabs/TabMenu";

const CategorySectionTab = () => {
  const tabs = ["Add Category", "Active Category"];
  const children = [<AddCategory />, <ViewCategory />];
  return <TabMenu tabs={tabs} children={children} />;
};

export default CategorySectionTab;
