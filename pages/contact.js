import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
            // Отправка email через EmailJS
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Замените на ваш Service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Замените на ваш Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: process.env.NEXT_PUBLIC_EMAIL
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send email');
            }
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
                            {status === 'success' && (
                                <div className="alert alert-success mt-3">
                                    Message sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="alert alert-danger mt-3">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="h4">Old School</h2>
                                <p>Who needs flashy when you’ve got solid? We do things the old-school <br /> way — straight to the point, no fluff.</p>
                                <p><strong>Just send me an e-mail:  </strong> <email>taskcostcalculator@proton.me</email> </p>
                                {/* <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p> */}
                                {/* <div className="mt-4">
                                    <h3 className="h5">Follow Us</h3>
                                    <div className="social-links mt-2"> 
                                        <a href="#" className="me-3">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </a>
                                        <a href="#" className="me-3">
                                            <i className="fab fa-linkedin fa-lg"></i>
                                        </a>
                                        <a href="#" className="me-3">
                                            <i className="fab fa-github fa-lg"></i>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 