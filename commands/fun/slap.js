const Discord = require('discord.js');
const db = require('quick.db');

module.exports={
    aliases: [],
    async run(client, message, args) {  
    let slapgiphy = ['https://media.giphy.com/media/11pCu5oiegYkAo/giphy.gif', 'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif', 'https://media.giphy.com/media/10DRaO76k9sgHC/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif', 'https://media.giphy.com/media/GkBAHmqphkjZu/giphy.gif', 'https://media.tenor.com/images/6f8c86917816bc65e36731891d775159/tenor.gif', 'https://media.tenor.com/images/0ec310f0964c95e16819e901c09c60fd/tenor.gif', 'https://media.tenor.com/images/6dbd997e3e79f21b7841b244833325c0/tenor.gif', 'https://media.tenor.com/images/28237ac3e7af9c7c1699606210ade5ce/tenor.gif'];
    let personslap = message.mentions.members.first();
    db.add(`slapy_${message.guild.id}_${message.author.id}_${personslap}`, 1)
    let number1 = await db.fetch(`slapy_${message.guild.id}_${message.author.id}_${personslap}`);
    let slapgif = slapgiphy[Math.floor(Math.random() * slapgiphy.length)];
    
    let quote = ['did it hurt?', 'Aiii', 'Oof', 'LMAO', 'GOD', 'Lol', 'Must have hurt', 'I understand the pain'];
    let quotrand = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'Air';

        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(`RED`);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'Themselvess';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personslap}! `)
            .setImage(slapgif)
            .setColor(`RED`);

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'Me, God damn u';
        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just slapped ${personslap}!`)
            .setImage(slapgif)
            .setColor(`RED`);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quotrand}!**`)
        .addField(`${quotrand}`,`<@${message.author.id}> has slapped ${personslap} ${number1} time(s)`, false)
        .setImage(slapgif)
        .setColor(`RED`);

    message.channel.send(embed);
}
}
