import { useState } from 'react';
import Button from '../../UI/Button/button.component';
import Card from '../../UI/Card/card.component';
import styles from './user-input.module.css';

const UserInput = ({ onAddUser }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newAge, setNewAge] = useState('');

    const usernameHandler = event => {
        setNewUsername(event.target.value);
    }

    const ageHandler = event => {
        setNewAge(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(newUsername.trim().length && newAge.trim().length && +newAge > 0) {
            const newUser = {
                username: newUsername,
                age: +newAge
            }
            onAddUser(newUser);
            setNewUsername('');
            setNewAge('');
        } else {
            alert('Please enter valid input');
        }
    }

    return ( 
        <Card className={styles.inputForm} >
            <form onSubmit={formSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type="text" value={newUsername} onChange={usernameHandler} />

                    <label htmlFor='age'>Age(Years)</label>
                    <input id='id' type="number" value={newAge} onChange={ageHandler} />

                <Button type='submit'>Add User</Button>
            </form>

        </Card>
    );
}
 
export default UserInput;