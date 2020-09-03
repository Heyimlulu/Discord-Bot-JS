const Discord = require('discord.js');

module.exports = {
    name: 'cuteometer',
    description: `Tell a user how cute he is.`,
    category: 'fun',
    execute(message) {

        var cute = [
            'Not Cute',
            'Ho hum Cute',
            'Ok, maybe a little cute',
            'Awesomely cute',
            'Adorable'];

        let guess = cute[Math.floor(Math.random() * (cute.length - 1) + 1)];

        if (message.mentions.users.first()) {
            const Embed = new Discord.MessageEmbed()
            const User = message.mentions.users.first()

            Embed.setTitle('Cute-o-Meter')
                .setDescription(`I guess **${User.tag}** is **${guess}**`)
                .setThumbnail(User.displayAvatarURL())
                .setColor("RANDOM")

            message.delete()
            message.channel.send(Embed)
        } else {
            message.channel.send(`You did not specified a user! **${message.author.tag}**`)
        }
    },
};