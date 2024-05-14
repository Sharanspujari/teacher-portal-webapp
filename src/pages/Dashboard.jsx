import React from "react";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Main />
    </div>
  );
};

export default Dashboard;
