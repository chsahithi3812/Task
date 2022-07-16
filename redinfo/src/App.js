import react from 'react'
import NavvBarr from './components/navbar';
import allUsers from './components/allUsers';
import addUser from './components/addUser';
import editUser from './components/editUser'
import home from './components/addUser';
import { BrowserRouter  ,Route, Switch  } from 'react-router-dom';

const Routing =()=>{
  return(
<Switch>
    <Route exact path='/' component={home} />
   <Route exact path='/add' component={addUser} />
   <Route  exact path='/all' component={allUsers} />
   <Route exact path='/edit/:id' component={editUser} />
    </Switch>
  )
}
function App() {
  return (
    <BrowserRouter>
      <NavvBarr />
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
