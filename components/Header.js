import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/projects" className="nav-link">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/templates" className="nav-link">
                                    Templates
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/reports" className="nav-link">
                                    Reports
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Settings
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <Link href="/profile" className="dropdown-item">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/preferences" className="dropdown-item">
                                            Preferences
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link href="/logout" className="dropdown-item">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
} 