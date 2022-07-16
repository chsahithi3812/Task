import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./addUser.css"
import { useHistory ,Redirect} from 'react-router-dom'
import { addFriend } from '../service/api';
import axios from 'axios';



const initialValue = {
    name: '',
    email: '',
    phone: '',
    hobbies:''
}
function AddUser() {
    const [user, setUser] = useState(initialValue);
    const { name, email,phone,hobbies} = user;
    let history = useHistory();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)

    }
    const addUserDetails = () => {
        axios.post(`http://localhost:7000/add`, user).then(res=>{
          console.log(res)
        });
       
        
        
    }
  return (
    <div className="strap">
    <Form  >
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"   onChange={(e) => onValueChange(e)} name='name' value={name} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => onValueChange(e)} name='email' value={email}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={(e) => onValueChange(e)} name='phone' value={phone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Hobbies</Form.Label>
        <Form.Control type="text" placeholder="Enter Hobbies" onChange={(e) => onValueChange(e)} name='hobbies' value={hobbies}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => addUserDetails()}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddUser;