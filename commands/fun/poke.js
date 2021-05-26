const Discord = require('discord.js');
const db = require('quick.db');
const resources = require('../../resources.json');
exports.run = async (client, message, args) => {
    let personPoke = message.mentions.members.first();
    db.add(`pokey_${message.guild.id}_${message.author.id}_${personPoke}`, 1)
    let number = await db.fetch(`pokey_${message.guild.id}_${message.author.id}_${personPoke}`);
    
    let poke = ['https://media.giphy.com/media/PkR8gPgc2mDlrMSgtu/giphy.gif', 'https://media.giphy.com/media/3x5nIjlszTBQs/giphy.gif', 'https://media.giphy.com/media/Vfie0DJryAde8/giphy.gif', 'https://media.giphy.com/media/141SlA8Pv3J7WM/giphy.gif', 'https://media.giphy.com/media/TYAYywTcAb4Iw/giphy.gif', 'https://media.giphy.com/media/MAdHk0h1xIHImwcRa8/giphy.gif', 'https://media.giphy.com/media/1Bh3kuNSGCkPi0oUtI/giphy.gif'];
    let pokerand = poke[Math.floor(Math.random() * poke.length)];
    let quote = ["Hehehe", "Lol", "Giggles", "It hurts now", "ahahaha", "Yeet"];
    let quoterand = quote[Math.floor(Math.random() * quote.length)];
    if (!personPoke) {
        let personPoke = "Air";

        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just poked ${personPoke}!`)
            .setImage(pokerand)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }
    if (personPoke.id === client.user.id) {
        let personPoke = 'Me, God damn u';
        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just poked ${personPoke}!`)
            .setImage(pokerand)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }
    if (personPoke.id === message.author.id) {
        let personPoke = 'Themselvess';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just poked ${personPoke}! `)
            .setImage(pokerand)
            .setColor(`${resources['embed-fun']}`);

        message.channel.send(embed);
        return;
    }


    let embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> just poked ${personPoke}!`)
        .addField(`${quoterand}`,`<@${message.author.id}> has poked ${personPoke} ${number} time(s)`, false)
        .setImage(pokerand)
        .setColor(`${resources['embed-fun']}`);

    message.channel.send(embed);
    
}

exports.help = {
    type: "fun",
    name: "poke",
    description: "Just Poke",
    usage: "zap poke <user>",
}
