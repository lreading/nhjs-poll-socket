/**
 * The types of messages we know how to send / handle
 */
const messageTypes = {
    info: 'info',
    newPoll: 'newPoll',
    pollCreated: 'pollCreated',
    allPolls: 'allPolls',
    vote: 'vote'
};

/**
 * Builds a message to be sent to the client
 * @param {string} messageType
 * @param {string} payload
 */
const buildMessage = (messageType, payload) => JSON.stringify({ type: messageType, payload });

/**
 * Broadcasts a message to all connected clients
 * @param {WebSocket.Server} wss
 * @param {string} messageType
 * @param {string} payload
 */
const broadcast = (wss, messageType, payload) => wss.clients.forEach((client) => client.send(buildMessage(messageType, payload)));

/**
 * Decodes an incoming message
 * @param {string} data
 */
const decodeMessage = (data) => {
    try {
        const message = JSON.parse(data);
        if (!message.type || !messageTypes[message.type]) {
            console.warn('Unknown message type: ', message.type);
        }
        return message;
    } catch (e) {
        console.error('Unable to parse message.', e);
        return null;
    }
};

/**
 * 
 * @param {WebSocket} ws
 * @param {string} messageType
 * @param {string} payload
 */
const sendMessage = (ws, messageType, payload) => {
    if (ws.readyState === 1) {
        ws.send(buildMessage(messageType, payload));
    }
};

module.exports = {
    broadcast,
    messageTypes,
    sendMessage,
    decodeMessage
};
