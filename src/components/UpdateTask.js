import React,{useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { TasksContext } from "../context/TasksContext";

const MyVerticallyCenteredModal = (props) => {
  const{state,dispatch} = useContext(TasksContext);
  const {selectedTask} = state
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [no,setNo] = useState(0)

    useEffect(() =>{
      if(Object.keys(selectedTask).length !==0){
      
      setId(selectedTask.id)
      setName(selectedTask.name)
      setNumber(selectedTask.number)
      setNo(selectedTask.no)  
    }
    },[selectedTask])

    const updateTask = () => {
        props.onHide()
        dispatch({type:'UPDATE_TASK',payload:{id,name,number,no}})
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Employee ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
            <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
              Update Employee
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
