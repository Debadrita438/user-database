import Card from '../Card/card.component';
import Button from '../Button/button.component';

import styles from './error-modal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => {
    return(
        <div>
            <div className={styles.backdrop} onClick={onConfirm} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onConfirm}>I Understand</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;