// 假设您已经将聊天记录转换为JSON格式
// 例如: [{"message": "你好", "user": "@UserA", "date": "2023-03-22 10:00:00"}, ...]

// 将聊天记录添加到chat-window元素中
function displayChatHistory(chatHistory) {
    const chatWindow = document.getElementById('chat-window');
    chatHistory.forEach(chat => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const senderElement = document.createElement('div');
        senderElement.classList.add('sender');
        senderElement.textContent = chat.user;

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = chat.date;

        const messageTextElement = document.createElement('div');
        messageTextElement.textContent = chat.message;

        messageElement.appendChild(senderElement);
        messageElement.appendChild(dateElement);
        messageElement.appendChild(messageTextElement);
        chatWindow.appendChild(messageElement);
    });
}

// 从tmp.txt读取聊天记录并调用displayChatHistory函数
fetch('tmp.txt')
    .then(response => response.text())
    .then(text => {
        const chatHistory = JSON.parse(text);
        displayChatHistory(chatHistory);
    })
    .catch(error => console.error('Error fetching chat history:', error))