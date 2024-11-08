import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function WelcomePopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Проверяем, показывалось ли окно ранее
        const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
        
        if (!hasSeenPopup) {
            setShow(true);
            // Отмечаем, что пользователь увидел окно
            localStorage.setItem('hasSeenWelcomePopup', 'true');
        }
    }, []);

    const handleClose = () => setShow(false);

    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            centered
            className="welcome-popup"
            animation={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>Welcome to Task Cost Calculator!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="welcome-content">
                    <h4>👋 Hello there!</h4>
                    <p>
                        We are excited to welcome you to our new task cost calculation tool!
                        Please note that this is an alpha version, and the tool is actively being developed and improved. Your feedback is very important to us to make it even better.
                        Thank you for trying Task Cost Calculator at this early stage!
                    </p>
                    <ul>
                        <li>Create and manage project tasks</li>
                        <li>Calculate costs automatically</li>
                        <li>Apply discounts and taxes</li>
                        <li>Generate reports</li>
                    </ul>
                    <p>
                        Get started by adding your first task using the "Add Task" button.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Get Started
                </Button>
            </Modal.Footer>
        </Modal>
    );
} 