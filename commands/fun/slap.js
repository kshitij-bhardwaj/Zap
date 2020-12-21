const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let slapgiphy = ['https://i.imgur.com/4iPCfVO.gif', 'https://i.imgur.com/8g6t0a3.gif', 'https://i.imgur.com/u7bKmq0.gif', 'https://i.imgur.com/v1u3DpJ.gif', 'https://i.imgur.com/T7npUHy.gif', 'https://i.imgur.com/rDSHdbw.gif', 'https://i.imgur.com/VtbV4HW.gif', 'https://i.imgur.com/lzc81Yw.gif', 'https://i.imgur.com/MnfAJbs.gif'];
    let slapgif = slapgiphy[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();
    let quote = ['did it hurt?', 'Aiii', 'Oof', 'LMAO', 'GOD', 'Lol', 'Must have hurt', 'I understand the pain'];
    let quotrand = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'Air';

        let embed = new Discord.RichEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'Themselvess';
        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! `)
            .addField(`${quotrand}`,'',no)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'Me, God damn u';
        let embed = new Discord.RichEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
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
