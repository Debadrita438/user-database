import Card from '../../UI/Card/card.component';
import UserListItem from '../UserListItem/user-list-item.component'
import styles from './user-list.module.css'

const UserList = ({ users }) => {
    return ( 
        <Card className={styles.users}>
            <ul>
                { 
                    users.map(user => (
                        <UserListItem 
                            key={user.id}
                            username={user.username}
                            age={user.age}
                        />
                    ))
                }
            </ul>
        </Card>
     );
}
 
export default UserList;