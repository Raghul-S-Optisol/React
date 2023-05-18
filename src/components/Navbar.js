import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const Navbar = () => {
  const {state} = useContext(TasksContext)
  return (
    <>
      <h1 className="text-center my-2 text-color">Employee Management</h1>
      <p className="text-center lead">{`Total employees - ${state.tasksList.length}`}</p>
    </>
  );
};

export default Navbar;
