const Discord = require('discord.js');
const db = require('quick.db');
const resources = require('../../resources.json')
module.exports.run = async (client, message, args) => {
    let huggiphy = ['https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif', 'https://media.tenor.com/images/1e058dc8d0ccd337b6d26cbab43b6e30/tenor.gif', 'https://media.tenor.com/images/eb836aae025374cb8c39ec1a94e284ff/tenor.gif', 'https://media.tenor.com/images/ce6fbe80ad07542f40b019856240db24/tenor.gif', 'https://media.tenor.com/images/8ba1f72b0740209c2875a3b2fe4c57f1/tenor.gif', 'https://media.tenor.com/images/5582856e30f16e0cbece2d0e59c395c0/tenor.gif'];
    let personHug = message.mentions.members.first();
    db.add(`hugy_${message.guild.id}_${message.author.id}_${personHug}`, 1)
    let number1 = await db.fetch(`hugy_${message.guild.id}_${message.author.id}_${personHug}`);
    let huggif = huggiphy[Math.floor(Math.random() * huggiphy.length)];
    
    let quote = ['It\'s gonna be alright', 'Awww', 'I\'m there for you', 'Its DEFINITELY not AWKWARD', 'We\'re not in a relationship', 'Are we still friends?', 'Do you want 1 year BOOST Nitro?'];
    let quotrand = quote[Math.floor(Math.random() * quote.length)];

    if (!personHug) {
        let personHug = 'Air';

        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just hugged ${personHug}!`)
            .setImage(huggif)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }

    if (personHug.id === message.author.id) {
        let personHug = 'Themselvess';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just hugged ${personHug}! `)
            .setImage(huggif)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }

    if (personHug.id === client.user.id) {
        let personHug = 'Me? God bless u';
        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just hugged ${personHug}!`)
            .setImage(huggif)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just hugged ${personHug}!**`)
        .addField(`${quotrand}`,`<@${message.author.id}> has hugged ${personHug} ${number1} time(s)`,false)
        .setImage(huggif)
        .setColor(`${resources['embed-fun']}`);

    message.channel.send(embed);
}

