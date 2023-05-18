import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TasksContext } from "../context/TasksContext";

const AddTask = () => {

  const {dispatch} = useContext(TasksContext)

    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')


    const addTask = (e) => {
        e.preventDefault()
        console.log({id,name,number})
        dispatch({type:'ADD_TASK',payload:{id,name,number}})
        setId('')
        setName('')
        setNumber('')
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee ID" value={id}
         onChange={(e) => setId(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" value={name}
        onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" value={number}
         onChange={(e) => setNumber(e.target.value)}/>
      </Form.Group>

      <div className="text-end submit-color">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          Add Employee
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;
