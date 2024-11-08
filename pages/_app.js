import WelcomePopup from '../components/WelcomePopup';
import '../styles/components/WelcomePopup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js'; // Добавляем этот импорт
import '../styles/global.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    const [tasks, setTasks] = useState([]);
    const [globalSettings, setGlobalSettings] = useState({
        hourlyRate: 0,
        globalDiscount: 0,
        taxRate: 0,
        includeTaxInCost: true
    });
    const [clientData, setClientData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    // Загрузка данных только на клиенте
    useEffect(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }

            const savedSettings = localStorage.getItem('globalSettings');
            if (savedSettings) {
                setGlobalSettings(JSON.parse(savedSettings));
            }

            const savedClientData = localStorage.getItem('clientData');
            if (savedClientData) {
                setClientData(JSON.parse(savedClientData));
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }, []);

    // Сохранение данных при изменениях
    useEffect(() => {
        if (tasks) localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        if (globalSettings) localStorage.setItem('globalSettings', JSON.stringify(globalSettings));
    }, [globalSettings]);

    useEffect(() => {
        if (clientData) localStorage.setItem('clientData', JSON.stringify(clientData));
    }, [clientData]);

    useEffect(() => {
        // Импортируем Bootstrap JS только на клиенте
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <>
            <Component 
                {...pageProps} 
                tasks={tasks}
                setTasks={setTasks}
                globalSettings={globalSettings}
                setGlobalSettings={setGlobalSettings}
                clientData={clientData}
                setClientData={setClientData}
            />
            <WelcomePopup />
        </>
    );
}
