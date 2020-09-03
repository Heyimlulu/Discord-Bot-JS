const Discord = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Show info about the server!',
    execute(message) {
        let botCount = message.guild.members.cache.filter(member => member.user.bot).size;
        const serverInfo = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .addField('Number of users', message.guild.memberCount - botCount, true)
            .addField('Number of bots', botCount, true)
            .addField('Total number of members', message.guild.memberCount, true)
            .addField('Number of channels', message.guild.channels.cache.size, true)
            .addField('Date when server created', message.guild.createdAt, true)
            .addField('Owner', message.guild.owner, true)
            .setTimestamp();

        message.channel.send(serverInfo);
    },
};