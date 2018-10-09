/**
 * @name app
 * @description The websocket server application 
 */
const WebSocket = require('ws');
const http = require('http');

const wsMessage = require('./message.js');
const poll = require('./poll.js');

/**
 * The port to run the WebSocket server on
 * @type {number}
 */
const port = 8082;

/**
 * The underlying HTTP server for the WebSocket server
 * @type {http.Server}
 */
const server = http.createServer();

// Start the underlying HTTP server
server.listen(port, () => console.log(`HTTP server listening on port ${port}`));

/**
 * The WebSocket server
 * @type {WebSocket.Server}
 */
const wss = new WebSocket.Server({ server });

/**
 * Handles incomming messages from websockets
 * @param {WebSocket.Server} wssS
 * @param {WebSocket} ws
 * @param {string} data
 */
const messageHandler = (wss, ws, data) => {
    const message = wsMessage.decodeMessage(data);
    if (message === null) {
        console.warn('Unable to parse incomming message: ignoring');
        return;
    }

    switch (message.type) {
        case wsMessage.messageTypes.newPoll:
            const newPoll = poll.create(message.payload.question, message.payload.options);
            console.log('New poll created:', newPoll);
            wsMessage.sendMessage(ws, wsMessage.messageTypes.pollCreated, newPoll);
            return wsMessage.broadcast(wss, wsMessage.messageTypes.allPolls, poll.activePolls);
        case wsMessage.messageTypes.vote:
            console.log('Vote incomming!');
            console.log(message.payload);
            poll.vote(message.payload.pollId, message.payload.optionId);
            return wsMessage.broadcast(wss, wsMessage.messageTypes.allPolls, poll.activePolls);
        case wsMessage.messageTypes.info:
        default:
            console.log(message);
            break;
    }
};

// When a client connects, we want to add the message listeners
// to respond to messages.  
// We also want to send the state to the client
wss.on('connection', (ws) => {
    wsMessage.sendMessage(ws, wsMessage.messageTypes.info, 'You are now connected.');
    ws.on('message', data => messageHandler(wss, ws, data));
    wsMessage.sendMessage(ws, wsMessage.messageTypes.allPolls, poll.activePolls);
});
