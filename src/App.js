import { useState } from 'react';
import UserInput from './components/Users/UserInput/user-input.component';
import UserList from './components/Users/UserList/user-list.component';

const App = () => {
  const [user, setUser] = useState('');
  
  const addUserHandler = newUser => {
    setUser(prevUser => {
      const updatedUser = [...prevUser];
      updatedUser.push({id: updatedUser.length+1, username: newUser.username, age: newUser.age});
      return updatedUser;
    });
  }

  return ( 
    <div>
        <UserInput onAddUser={addUserHandler} />
      {
        user && <UserList users={user} />
      }
    </div>
  );
}
 
export default App;