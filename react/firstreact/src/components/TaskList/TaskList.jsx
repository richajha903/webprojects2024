import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    "Complete Assignment",
    "Complete Project",
    "Office Work",
    "Trip",
    "Househole Works",
  ];
  return (
    <>
      <h1>Task Lists:</h1>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} taskName={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
