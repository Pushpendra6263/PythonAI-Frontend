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
            <div className="h-auto max-h-[90%]  py-2 sm:py-4 px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
                {messages.map((msg, index) => (
                    <div key={index} className={`w-full sm:w-[80%] ${msg.role === 'user' ? 'text-[#333] mt-5' : 'md:ml-4 mt-5 text-[#222222]'}`}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'Python-AI: '}</strong>
                        {msg.content}
                    </div>
                ))}
            </div>

            <div className='absolute bottom-3 left-0 sm:left-0 w-full px-2 sm:px-0'>
                <div className="flex items-center justify-center sm:flex-nowrap w-full sm:w-auto">
                    <input
                        className='h-12 px-5 py-3 w-2/3 sm:w-3/4 rounded-l-[15px] bg-gray-100 shadow-md outline-blue-500'
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your question here..."
                    />
                    <button className='bg-[royalblue] text-white px-5 h-12 rounded-r-[15px] shadow-md w-1/4 sm:w-auto' onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}
