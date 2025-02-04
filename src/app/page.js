'use client'
import { useState } from 'react';
import ApiKeyModal from '../components/ApiKey';
import ChatBox from '../components/Chatbox';

export default function Home() {
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('openaiApiKey', key);
    setShowApiKeyModal(false);
  };

  return (
  
    <div className="h-screen w-screen bg-blue-50 py-5 px-4 sm:px-5 md:px-10 flex flex-col md:flex-row items-center justify-center">
      <div className="h-full w-full md:w-1/2 text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Welcome to PythonAI! 🐍</h1>
        <p className="text-lg text-gray-700 w-full sm:w-2/3">
          Learn Python with your very own AI tutor. Start your coding journey today!
        </p>
        <button className="w-fit bg-[royalblue] text-white py-2 px-6 rounded-md font-medium hover:bg-blue-600 transition duration-300"
          onClick={() => setShowApiKeyModal(true)}>
          Configure API Key
        </button>

        <div className='w-full mt-6 flex items-center justify-center'>
          {showApiKeyModal && (
            <ApiKeyModal
              onSave={handleSaveApiKey}
              onClose={() => setShowApiKeyModal(false)}
            />
          )}
        </div>
      </div>

      <div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center">
        {apiKey && <ChatBox apiKey={apiKey} />}
      </div>
    </div>

  );
}
