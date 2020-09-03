module.exports = {
    name: 'say',
    description: 'Random sentence!',
    execute(message) {
        var speechs = [
            'What?!',
            'Oui',
            'No you',
            'Je sais pas',
            'Hahaha',
            'Non',
            'Maybe...',
            'Ich bin ein Berliner',
            "J'aime les licornes arc-en-ciel",
            'Hello ! How are you ?',
            'Who am I ?',
            "I'm a bot, what about you ?",
            '1v1 rainbow 6 siege',
            'Why you bully me ?',
            'Salut',
            'Comment ça va ?',
            'PTDR T KI?',
            'YOLO',
            "Désolé vous ne m'intéressez pas"];
        var speech = speechs[Math.floor(Math.random()*speechs.length)];
        message.channel.send(speech)
    },
};