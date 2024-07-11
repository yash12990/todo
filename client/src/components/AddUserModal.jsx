import axios from "axios";
import React, { useState } from "react";
import { button, Form, Modal } from "react-bootstrap";

function AddUserModal({ showModal }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAddUser = async() => {
        const userData = {
            name: name,
            email: email,
            password: password,
        }

        const res = await axios.post("http://localhost:5010/users/create-user", userData);
        if (res.status === 200) {
            alert("User added successfully!");
            console.log("Added user!");
            setName("");
            setEmail("");
            setPassword("");
            // setShowModal(false);
        }
    };
  return (
    <Modal className="mt-2 flex flex-col gap-y-8 text-center" show={showModal}>
      <Modal.Header className="">
        <Modal.Title className="text-2xl font-bold">Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="flex flex-col mb-3 text-lg items-center ">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="flex flex-col mb-3 text-lg items-center">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}

            />
          </Form.Group>
          <Form.Group className="flex flex-col mb-3 text-lg items-center">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button className="p-2 bg-slate-400 rounded-xl text-white" onClick={handleAddUser}>Add User</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddUserModal;
