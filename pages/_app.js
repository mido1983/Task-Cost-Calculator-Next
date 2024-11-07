import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'; // Ваши глобальные стили, если есть
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    const [globalSettings, setGlobalSettings] = useState({
        hourlyRate: '',
        globalDiscount: '',
        taxRate: '',
        includeTaxInCost: true,
    });

    const [tasks, setTasks] = useState([]);
    
    const [clientData, setClientData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    // Загрузка всех данных при старте приложения
    useEffect(() => {
        // Загрузка настроек
        const savedSettings = localStorage.getItem('globalSettings');
        if (savedSettings) {
            setGlobalSettings(JSON.parse(savedSettings));
        }

        // Загрузка задач
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }

        // Загрузка данных клиента
        const savedClientData = localStorage.getItem('clientData');
        if (savedClientData) {
            setClientData(JSON.parse(savedClientData));
        }
    }, []);

    // Сохранение при изменениях
    useEffect(() => {
        localStorage.setItem('globalSettings', JSON.stringify(globalSettings));
    }, [globalSettings]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('clientData', JSON.stringify(clientData));
    }, [clientData]);

    return (
        <Component 
            {...pageProps} 
            globalSettings={globalSettings} 
            setGlobalSettings={setGlobalSettings}
            tasks={tasks}
            setTasks={setTasks}
            clientData={clientData}
            setClientData={setClientData}
        />
    );
}
