import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getallFriends ,deleteFriend, editFriend} from '../service/api';
import { useEffect,useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';


  const AllUsers = () =>{
   
    const [users,setUser]=useState([]);
    let history = useHistory();
  
    useEffect(() => {
        getFriends();
        
    }, []);
    const deleteUserData= async (id) => {
        await deleteFriend(id); 
        getFriends();
       
    }
   
    const getFriends = async () => {
        const response = await getallFriends();
        console.log(response.data);
        setUser(response.data);        
    }
  
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Hobbies</th>

        </tr>
      </thead>
      <tbody >
      {users.map((user,index) => (
        <tr >
          <td>{index+1}</td>
          <td>{user.name}</td> 
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.hobbies}</td>
         <Link to={`/edit/${user._id}`}> <Button variant="outline-primary">EDIT</Button></Link>
         
          <Button variant="outline-danger" onClick={ () => deleteUserData(user._id) } style={{margin:'2px'}}>DELETE</Button>

        </tr>
        ) )}
        
      </tbody>
    </Table>
  );
}

export default AllUsers