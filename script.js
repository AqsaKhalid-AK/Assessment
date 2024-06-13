async function fetchJSONData(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error('Failed to fetch ${filePath}: ${response.statusText}');
    }
    return response.json();
}

function escapeHTML(html) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
}

function displayMessagesAsHTML(messages, chatID, containerId) {
    const container = document.getElementById(containerId);
    const chatMessages = messages.filter(message => message.chatid === chatID);
    chatMessages.forEach(message => {
        const p = document.createElement('p');
        p.innerHTML = escapeHTML(message.message);
        container.appendChild(p);
    });
}

function displayMessagesAsJSON(messages, chatID, containerId) {
    const container = document.getElementById(containerId);
    const chatMessages = messages.filter(message => message.chatid === chatID);
    container.textContent = JSON.stringify(chatMessages, null, 2);
}

function displayUserAsJSON(users, userID, containerId) {
    const container = document.getElementById(containerId);
    const user = users.find(user => user.id === userID);
    if (user) {
        container.textContent = JSON.stringify(user, null, 2);
    }
}

function displayMessageByIDAsHTML(messages, messageID, containerId) {
    const container = document.getElementById(containerId);
    const message = messages.find(message => message.id === messageID);
    if (message) {
        container.innerHTML = escapeHTML(message.message);
    }
}

async function init() {
    try {
        const messages = await fetchJSONData('/data/messages.json');
        const users = await fetchJSONData('/data/users.json');

        displayMessagesAsHTML(messages, 3, 'chat-id-3-messages');
        displayMessagesAsJSON(messages, 8, 'chat-id-8-messages');
        displayUserAsJSON(users, 100, 'user-id-100');
        displayMessageByIDAsHTML(messages, 459, 'message-id-459');
    } catch (error) {
        console.error('Error:', error);
    }
}

init();