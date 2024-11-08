import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
