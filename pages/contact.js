import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            // Здесь будет логика отправки формы
            console.log('Form data:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <Layout>
            <Head>
                <title>Contact Us - Task Cost Calculator</title>
                <meta name="description" content="Contact Task Cost Calculator support team" />
            </Head>
            <div className="container py-5">
                <h1>Contact Us</h1>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 