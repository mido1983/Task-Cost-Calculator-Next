import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();

    // Функция для определения активного класса
    const isActive = (path) => {
        return router.pathname === path ? 'active' : '';
    };

    return (
        <header className="bg-dark text-white py-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    {/* Logo */}
                    <Link href="/" className="navbar-brand d-flex align-items-center">
                        <Image
                            src="/assets/images/android-chrome-192x192.png"
                            alt="Task Cost Calculator Logo"
                            width={40}
                            height={40}
                            className="me-2"
                        />
                        <div>
                            <h1 className="h4 mb-0">Task Cost Calculator</h1>
                            <p className="small mb-0 text-light">Calculate and manage your project costs</p>
                        </div>
                    </Link>

                    {/* Hamburger button for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation items */}
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link 
                                    href="/" 
                                    className={`nav-link ${isActive('/')}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    href="/about" 
                                    className={`nav-link ${isActive('/about')}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    href="/blog" 
                                    className={`nav-link ${isActive('/blog')}`}
                                >
                                    Blog
                                </Link>
                            </li>
                            
                            {/* Auth buttons */}
                            <li className="nav-item ms-lg-3">
                                <Link 
                                    href="/login" 
                                    className={`nav-link`}
                                >
                                    <button className="btn btn-outline-light btn-sm">
                                        Log In
                                    </button>
                                </Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link 
                                    href="/register" 
                                    className={`nav-link`}
                                >
                                    <button className="btn btn-primary btn-sm">
                                        Register
                                    </button>
                                </Link>
                            </li>

                            {/* Settings dropdown - показывать только после авторизации */}
                            {/* <li className="nav-item dropdown ms-lg-2">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-user-circle"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                    <li>
                                        <Link 
                                            href="/profile" 
                                            className={`dropdown-item ${isActive('/profile')}`}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/preferences" 
                                            className={`dropdown-item ${isActive('/preferences')}`}
                                        >
                                            Preferences
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link 
                                            href="/logout" 
                                            className="dropdown-item"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
} 