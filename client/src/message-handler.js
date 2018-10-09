/**
 * Attempts to parse a message
 * @param {string} message
 */
const tryParseMessage = (message) => {
    try {
        return JSON.parse(message.data);
    } catch (e) {
        return null;
    }
};

/**
 * Handles an incoming websocket message
 * @param {object} socketMessage
 */
const handleMessage = function (socketMessage) {
    const message = tryParseMessage(socketMessage);
    if (message === null) {
        return;
    }

    switch (message.type) {
        case 'allPolls':
            console.log('All polls incomming');
            return this.$store.dispatch('allPolls', message.payload);
        case 'pollCreated':
            console.log('Poll created...');
            return this.$router.push({ name: 'poll', params: { id: message.payload.id } });
        case 'info':
            console.log(message);
            return;
    }
};

export default {
    handleMessage
};
