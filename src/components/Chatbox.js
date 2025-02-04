import { useState } from 'react';
import { sendMessage } from '../utils/api';

export default function ChatBox({ apiKey }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);

        const response = await sendMessage(input, apiKey);
        const botMessage = { role: 'bot', content: response };
        setMessages((prev) => [...prev, botMessage]);

        setInput('');
    };

    return (
        <div className="relative bg-white w-full h-full rounded-lg overflow-hidden">
            <div className="h-auto max-h-[90%] py-4 px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {messages.map((msg, index) => (
                    <div key={index} className={`w-full sm:w-[80%] ${msg.role === 'user' ? 'text-[#333] mt-5' : 'md:ml-4 mt-5 text-[#222222]'}`}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'PythonAI: '}</strong>
                        {msg.content}
                    </div>
                ))}
            </div>

            <div className='absolute bottom-3 left-0 sm:left-20 w-full px-2 sm:px-0'>
                <div className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto">
                    <input
                        className='h-12 px-5 py-3 w-full sm:w-2/3 rounded-l-[15px] bg-gray-100 shadow-md outline-blue-500'
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your question here..."
                    />
                    <button className='bg-[royalblue] text-white px-5 h-12 rounded-r-[15px] shadow-md w-full sm:w-auto' onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}
