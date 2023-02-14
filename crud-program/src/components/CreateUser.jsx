import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../App.css"

function CreateUser() {
    const [user, setUser] = useState({
        name: null,
        age: null,
        course: null,
        city: null
    })

    async function addUser() {
        await axios.post('http://localhost:3000/users', {
            name: user.name,
            age: user.age,
            course: user.course,
            city: user.city
        })
        // console.log(user)
        alert("User Added")

        // Redirect to Home Page
        setTimeout(()=>{
            document.location.href = "/"
        })
    }

    return (
        <div className="form-container">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Name</Form.Label>
                    <Form.Control type="text" required onChange={(e) => { setUser({ name: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Age</Form.Label>
                    <Form.Control type="text" required onChange={(e) => { setUser({ age: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Course</Form.Label>
                    <Form.Control type="text" required onChange={(e) => { setUser({ course: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email City</Form.Label>
                    <Form.Control type="text" required onChange={(e) => { setUser({ city: e.target.value }) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUser}>
                    Add User
                </Button>
            </Form>
        </div>
    );
}

export default CreateUser;