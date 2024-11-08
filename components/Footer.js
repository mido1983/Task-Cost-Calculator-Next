import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">© {currentYear} Task Cost Calculator. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">
                            <Link href="/terms" className="text-white me-3">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="text-white me-3">
                                Privacy Policy
                            </Link>
                            <Link href="/contact" className="text-white">
                                Contact
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 