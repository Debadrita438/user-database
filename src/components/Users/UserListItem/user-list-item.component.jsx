import styles from './user-list-item.module.css';

const UserListItem = ({ username, age }) => {
    return (
        <li className={styles.userListItem}>
            {`${username} (${age} years old)`}
        </li>
    );
}
 
export default UserListItem;