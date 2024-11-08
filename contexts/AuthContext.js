import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Проверяем наличие токена в localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Здесь можно добавить проверку токена на сервере
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Здесь будет логика авторизации
        const token = 'dummy-token'; // Замените на реальный токен
        localStorage.setItem('token', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
} 