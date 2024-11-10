import { useEffect } from 'react';

export default function GlobalSettings({ globalSettings, setGlobalSettings }) {
    const currencies = [
        { code: 'USD', symbol: '$' },
        { code: 'EUR', symbol: '€' },
        { code: 'GBP', symbol: '£' },
        { code: 'NIS', symbol: '₪' }
    ];

    const updateSettings = (field, value) => {
        setGlobalSettings(prev => ({ ...prev, [field]: value }));
    };

    const safeNumberValue = (value) => {
        if (value === null || value === undefined || isNaN(value)) {
            return '';
        }
        return value.toString();
    };

    return (
        <div className="card p-3 mb-4">
            <h2 className="card-title">Global Settings</h2>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="currency">Currency:</label>
                    <select
                        className="form-select"
                        id="currency"
                        value={globalSettings.currency || 'USD'}
                        onChange={(e) => updateSettings('currency', e.target.value)}
                    >
                        {currencies.map(curr => (
                            <option key={curr.code} value={curr.code}>
                                {curr.code} ({curr.symbol})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="hourlyRate">Default Hourly Rate ({currencies.find(c => c.code === (globalSettings.currency || 'USD'))?.symbol}):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="hourlyRate"
                        value={safeNumberValue(globalSettings.hourlyRate)}
                        onChange={(e) => updateSettings('hourlyRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="globalDiscount">Global Discount (%):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="globalDiscount"
                        value={safeNumberValue(globalSettings.globalDiscount)}
                        onChange={(e) => updateSettings('globalDiscount', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="100"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="taxRate">Tax Rate (%):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="taxRate"
                        value={safeNumberValue(globalSettings.taxRate)}
                        onChange={(e) => updateSettings('taxRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="100"
                        step="0.01"
                    />
                </div>

                {/*<div className="form-group form-check">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        className="form-check-input"*/}
                {/*        id="includeTaxInCost"*/}
                {/*        checked={globalSettings.includeTaxInCost}*/}
                {/*        onChange={(e) => updateSettings('includeTaxInCost', e.target.checked)}*/}
                {/*    />*/}
                {/*    <label className="form-check-label" htmlFor="includeTaxInCost">*/}
                {/*        Include Tax in Costs*/}
                {/*    </label>*/}
                {/*</div>*/}
            </form>
        </div>
    );
}
