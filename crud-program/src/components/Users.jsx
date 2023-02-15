import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let data = await axios.get("http://localhost:3000/users");
    let users = data.data;
    setUsers(users);
  }

  function deleteUser(id) {
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE"
    })
    getUsers()
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users ? users.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.course}</td>
                  <td>{user.city}</td>
                  <td>
                    <span className="action-btns" onClick={() => { }}><AiFillEdit className="clickable"/></span>
                    <span className="action-btns" onClick={() => { deleteUser(user.id) }}><AiFillDelete className="clickable" /></span>
                  </td>
                </tr>
              </>
            );
          }) : <tr>No DATA</tr>}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
