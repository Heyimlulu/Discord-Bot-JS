const Discord = require('discord.js');
//const client = new Discord();
const config = require("./config");
const fs = require('fs');
const WS = require('./ws/ws')
const client = new Discord.Client();

client.commands = new Discord.Collection();

// ================================================================================================ //

// Create Websocket instance with token you set in config.json file,
// port 5665 and passing the discord client instance
// locahost:5665/?token='your-token-here'
var ws = new WS(config.ws.token, config.ws.port, client)

// ===================================== Discord Collection ===================================== //

const commandFilesFun = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));
for (const file of commandFilesFun) {
    const command = require(`./commands/fun/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const commandFilesUtility = fs.readdirSync('./commands/utility').filter(file => file.endsWith('.js'));
for (const file of commandFilesUtility) {
    const command = require(`./commands/utility/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const commandFilesGeneral = fs.readdirSync('./commands/general').filter(file => file.endsWith('.js'));
for (const file of commandFilesGeneral) {
    const command = require(`./commands/general/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// ==================================== On bot start ==================================== //

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    var activities = [
        "come watch me I'm cutie ^^",
        "[EN] Art stream! Let's do some art!",
        "Ima Die C: Dark souls = Death x-x no backseating / hints n tips unless i ask plz",
        "[EN] Room tour!"];

    // Set new activity after few minutes
    setInterval(() => {
        let activity = activities[Math.floor(Math.random()*(activities.length - 1) + 1)];
        client.user.setActivity(activity, {type: "STREAMING", url: "https://www.twitch.tv/heyimyuki_", name: "Heyimyuki_ on Twitch"});
    }, 600000); // Runs this every 10 minutes.

    // client.user.setActivity("come watch me I'm cutie ^^'", {type: "STREAMING", url: "https://www.twitch.tv/heyimyuki_", name: "Heyimyuki_ on Twitch"});
});

// ================================= On message received ================================= //

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    console.log(message.content);
});

// ======================================= Bot logon ======================================= //

client.login(config.token);
