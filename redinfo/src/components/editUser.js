import React, { useState ,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./addUser.css"
import { useHistory,useParams,Redirect} from 'react-router-dom'
import { addFriend,getallFriends,editFriend } from '../service/api';


const initialValue = {
    name: '',
    email: '',
    phone: '',
    hobbies:''
}
function EditUser() {
  const [user, setUser] = useState(initialValue);
  const { name,  email, phone ,hobbies} = user;
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
      loadUserDetails();
  }, [id]);

  const loadUserDetails = async() => {
      const response = await getallFriends(id);
      console.log(response.data);
      setUser(response.data);
      console.log(name);
  }

  const editUserDetails = async() => {
      const response = await editFriend(id, user);
      console.log("hii1")
      history.push("/all");
      console.log("hii2")
  }

  const onValueChange = (e) => {
      e.preventDefault()
      console.log(e.target.value);
      setUser({...user, [e.target.name]: e.target.value})
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
      <Button variant="primary" type="submit" onClick={() => editUserDetails()}>
        Update
      </Button>
    </Form>
    </div>
  );
}

export default EditUser;