const activePolls = [];

/**
 * Creates a new poll
 * @param {string} question
 * @param {Array<string>} options
 */
const create = (question, options) => {
    const poll = {
        question,
        options: options.map(o => ({
            value: o,
            percent: 0,
            votes: 0,
            id: options.indexOf(o) + 1
        })),
        totalVotes: 0,
        createdAt: new Date(),
        id: activePolls.length + 1
    };
    activePolls.push(poll);
    return poll;
};

const getPoll = (id) => {
    const polls = activePolls.filter(x => x.id === id);
    return polls.length ? polls[0] : null;
};

const getOption = (poll, optionId) => {
    const options = poll.options.filter(x => x.id === optionId);
    return options.length ? options[0] : null;
};

const recalc = (poll) => {
    poll.options.forEach((option) => {
        option.percent = (option.votes / poll.totalVotes) * 100;
    });
}

const vote = (pollId, optionId) => {
    const poll = getPoll(pollId);
    if (poll === null) {
        return false;
    }
    const option = getOption(poll, optionId);
    if (option === null) {
        return false;
    }

    poll.totalVotes += 1;
    option.votes += 1;
    recalc(poll);
    return poll;
};

module.exports = {
    activePolls,
    create,
    vote
};
