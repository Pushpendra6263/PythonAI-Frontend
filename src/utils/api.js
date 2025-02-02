export const sendMessage = async (message, apiKey) => {

    const response = await fetch('https://pythonai-backend.netlify.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, apiKey }),
    });

    const data = await response.json();
    return data.response;
};
