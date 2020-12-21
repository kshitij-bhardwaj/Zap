const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let slapgiphy = ['https://media.giphy.com/media/11pCu5oiegYkAo/giphy.gif', 'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif', 'https://media.giphy.com/media/10DRaO76k9sgHC/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif'];
    let slapgif = slapgiphy[Math.floor(Math.random() * slapgiphy.length)];
    let personslap = message.mentions.members.first();
    let quote = ['did it hurt?', 'Aiii', 'Oof', 'LMAO', 'GOD', 'Lol', 'Must have hurt', 'I understand the pain'];
    let quotrand = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'Air';

        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'Themselvess';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! `)
            .addField(`${quotrand}`,'',no)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'Me, God damn u';
        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quotrand}!**`)
        .setImage(slapgif)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.help = {
    type: "fun",
    name: "slap",
    description: "Just Slap",
    usage: "`zap slap <@user>`"
}
