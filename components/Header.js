import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();
    const [dateTime, setDateTime] = useState(new Date());
    const { data: session, status } = useSession();

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    };

    // Функция для определения активного класса
    const isActive = (path) => {
        return router.pathname === path ? 'active' : '';
    };

    return (
        <header className="bg-white text-gray-700 py-2 sticky-top shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light">
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
                    </Link>

                    {session ? (
                        <div className="welcome-content-dashboard">
                            Hello, {session.user.name}!<br/>
                            <div>{dateTime.toLocaleDateString()} <span className={'dashboardTimeLV'}> {new Date().toLocaleTimeString('en-GB')} </span></div>
                        </div>
                    ) : (
                        <div>
                            <h1 className="h4 mb-0">Task Cost Calculator</h1>
                            <p className="small mb-0 text-gray-500">Calculate and manage your project costs</p>
                        </div>
                    )}

                    {/* Show different menus based on auth state */}    
                    {session ? (
                        // Logged in - show dropdown menu
                        <div className="dropdown ms-auto">
                            <button 
                                className="btn dropdown-toggle d-flex align-items-center" 
                                type="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <span className="me-2">RAINBOW PROJECTS</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li className="dropdown-header">Company: rainbowProjects</li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link href="/company/details" className="dropdown-item">Company Details</Link></li>
                                <li><Link href="/billing/history" className="dropdown-item">Billing History</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="dropdown-header">User: {session.user.email}</li>
                                <li><Link href="/profile" className="dropdown-item">My Profile</Link></li>
                                <li><Link href="/change-password" className="dropdown-item">Change password</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link href="/language/hebrew" className="dropdown-item">English</Link></li>
                            </ul>
                        </div>
                    ) : (
                        // Not logged in - show regular menu
                        <>
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

                            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                                <ul className="navbar-nav ms-auto align-items-center">
                                    <li className="nav-item">
                                        <Link href="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                                    </li>
                                    {!session && (
                                        <li className="nav-item ms-2">
                                            <Link href="/plans" className="nav-link">
                                                Subscription Plans
                                            </Link>
                                        </li>
                                    )}
                                    <li className="nav-item">
                                        <Link href="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/whats-new" className={`nav-link ${isActive('/whats-new')}`}>What's New?</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                                    </li>
                                    <li className="nav-item ms-lg-3">
                                        <Link href="/login" className="nav-link">
                                            <button className="btn btn-outline-secondary btn-sm">Log In</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-2">
                                        <Link href="/register" className="nav-link">
                                            <button className="btn btn-primary btn-sm">Register</button>
                                        </Link>
                                    </li>
                         
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
