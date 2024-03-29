import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/card.component';
import Button from '../Button/button.component';

import styles from './error-modal.module.css';

const Backdrop = ({ onConfirm }) => (
    <div className={styles.backdrop} onClick={onConfirm} />
);

const ModalOverlay = ({ title, message, onConfirm }) => (
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
);

const ErrorModal = ({ title, message, onConfirm }) => {
    return(
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={onConfirm} />, 
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
                    document.getElementById('overlay-root')
                )
            }
        </Fragment>
    );
}

export default ErrorModal;