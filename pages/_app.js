import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'; // Ваши глобальные стили, если есть

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
