import { useRef, useState } from 'react';
import Button from '../../UI/Button/button.component';
import Card from '../../UI/Card/card.component';
import ErrorModal from '../../UI/ErrorModal/error-modal.component';
import Wrapper from '../../Helpers/wrapper.component';

import styles from './user-input.module.css';

const UserInput = ({ onAddUser }) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();
        const newUsername = nameInputRef.current.value;
        const newAge = ageInputRef.current.value;

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
            // Direct manipulation of DOM which shouldn't be done, but in this case it was okay because we are resetting the value in the input field
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        }
    }

    const errorHandler = () => {
        setError(null);
    }

    return ( 
        <Wrapper>
            { 
                error && 
                    <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
            }
            <Card className={styles.inputForm} >
                <form onSubmit={formSubmitHandler}>
                        <label htmlFor='username'>Username</label>
                        <input id='username' type="text" ref={nameInputRef} />

                        <label htmlFor='age'>Age(Years)</label>
                        <input id='id' type="number" ref={ageInputRef} />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}
 
export default UserInput;


// Can use ref when you quickly need to read something from input field only, no other operation is needed to do on them.