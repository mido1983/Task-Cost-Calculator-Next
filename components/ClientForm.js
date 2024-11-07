import { useState, useEffect } from 'react';

export default function ClientForm({ clientData, setClientData }) {
    const updateClientData = (field, value) => {
        setClientData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="mb-4">
            <h2>Client Information</h2>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="clientName">Client Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientName"
                            value={clientData.name}
                            onChange={(e) => updateClientData('name', e.target.value)}
                            placeholder="Enter client name"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="clientEmail">Client Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="clientEmail"
                            value={clientData.email}
                            onChange={(e) => updateClientData('email', e.target.value)}
                            placeholder="Enter client email"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="clientPhone">Client Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="clientPhone"
                            value={clientData.phone}
                            onChange={(e) => updateClientData('phone', e.target.value)}
                            placeholder="Enter client phone"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="clientAddress">Client Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientAddress"
                            value={clientData.address}
                            onChange={(e) => updateClientData('address', e.target.value)}
                            placeholder="Enter client address"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

