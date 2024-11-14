import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="mb-0">© {currentYear} Task Cost Calculator</p>
                    </div>

                    <div className="col-md-4 text-md-end">
                        <p className="mb-0">
                            <Link href="/terms" className="text-white me-3">Terms</Link>
                            <Link href="/privacy" className="text-white me-3">Privacy</Link>
                            <Link href="/contact" className="text-white">Contact</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 