module.exports = {
    name: 'ping',
    description: 'Ping the bot!',
    category: 'utility',
    execute(message) {

        message.channel.send('Pong!');
    },
};