import { useState } from 'react';

export default function ApiKeyModal({ onSave, onClose }) {
    const [apiKey, setApiKey] = useState('AIzaSyBHi6I1cv_NadvYGm2gytz7-iXAZC6JsSo');

    const handleSave = () => {
        if (apiKey) {
            onSave(apiKey);
        }
    };

    return (
     
        <div className="py-3 w-full sm:w-2/3 flex flex-col items-center justify-center bg-white">
            <div className="w-full flex flex-col items-center gap-4 text-center">
                <h2 className='text-base'>Enter Your OpenAI API Key</h2>
                <input
                    className='w-full sm:w-2/3 px-4 py-2 bg-gray-100 outline-none'
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Paste your API key here"
                />
                <div className='flex flex-wrap gap-5'>
                    <button className='bg-green-400 text-gray-900 px-4 py-1.5 rounded-xl' onClick={handleSave}>Save</button>
                    <button className='bg-red-400 text-gray-900 px-4 py-1.5 rounded-xl' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>

    );
}
