import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserInput from "./UserInput";
import TaskList from "../TaskList/TaskList";

const Home = () => {
  return (
    <>
      <Header />
      {/* <MainContent /> */}
      {/* <UserInput /> */}
      <TaskList />
      <Footer />
    </>
  );
};

export default Home;
