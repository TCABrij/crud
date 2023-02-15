import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../App.css"


function CreateUser() {

    const [user, setUser] = useState({
        name: '',
        age: '',
        course: '',
        city: ''
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
        setTimeout(() => {
            document.location.href = "/"
        })
    }

    function setData(e) {
        const currentInput = e.target.id;
        const value = e.target.value;

        setUser(preData => {
            if( currentInput === "name"){
                return { 
                    name: value,
                    age: preData.age,
                    course: preData.course,
                    city: preData.city
                 }
            }
            else if( currentInput === "age"){
                return { 
                    age: value,
                    name: preData.name,
                    course: preData.course,
                    city: preData.city
                 }
            }
            else if( currentInput === "course"){
                return { 
                    course: value,
                    age: preData.age,
                    name: preData.name,
                    city: preData.city
                 }
            }
            else{
                return { 
                    city: value,
                    age: preData.age,
                    course: preData.course,
                    name: preData.name
                 }
            }
        })
    }
    return (
        <div className="form-container">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" required onChange={setData}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Enter Age</Form.Label>
                    <Form.Control type="text" required onChange={setData} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="course">
                    <Form.Label>Enter Course</Form.Label>
                    <Form.Control type="text" required onChange={setData} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Enter City</Form.Label>
                    <Form.Control type="text" required onChange={setData} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUser}>
                    Add User
                </Button>
            </Form>
        </div>
    );
}

export default CreateUser;