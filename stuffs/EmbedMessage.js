/*
const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Info!',
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { title: 'Regular field title', value: 'Some value here' },
                { title: '\u200B', value: '\u200B' },
                { title: 'Inline field title', value: 'Some value here', inline: true },
                { title: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(Embed);
    },
};

 */