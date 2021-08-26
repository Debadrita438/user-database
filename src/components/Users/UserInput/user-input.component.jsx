import { useState } from 'react';
import Button from '../../UI/Button/button.component';
import Card from '../../UI/Card/card.component';
import ErrorModal from '../../UI/ErrorModal/error-modal.component';
import styles from './user-input.module.css';

const UserInput = ({ onAddUser }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newAge, setNewAge] = useState('');
    const [error, setError] = useState();

    const usernameHandler = event => {
        setNewUsername(event.target.value);
    }

    const ageHandler = event => {
        setNewAge(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(!newUsername.trim().length || !newAge.trim().length) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid input (non-empty values).'
            })
            return;
        } else if (+newAge < 1)  {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (i.e. > 0).'
            })
            return;
        } else {
            const newUser = {
                username: newUsername,
                age: +newAge
            }
            onAddUser(newUser);
            setNewUsername('');
            setNewAge('');
        }
    }

    const errorHandler = () => {
        setError(null);
    }

    return ( 
        <div>
            { 
                error && 
                    (<ErrorModal 
                        title={error.title} 
                        message={error.message} 
                        onConfirm={errorHandler}
                    />)
            }
            <Card className={styles.inputForm} >
                <form onSubmit={formSubmitHandler}>
                        <label htmlFor='username'>Username</label>
                        <input 
                            id='username' 
                            type="text" 
                            value={newUsername} 
                            onChange={usernameHandler} 
                        />

                        <label htmlFor='age'>Age(Years)</label>
                        <input 
                            id='id' 
                            type="number" 
                            value={newAge} 
                            onChange={ageHandler}
                        />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}
 
export default UserInput;