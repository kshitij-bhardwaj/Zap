const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personPoke = message.mentions.members.first();
    let poke = ['https://i.imgur.com/Ym7K7sn.gif', 'https://i.imgur.com/RdYoGmA.gif', 'https://i.imgur.com/hjMRxyZ.gif', 'https://i.imgur.com/wa2dUw4.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/yOEOe9J.gif'];
    let pokerand = pokerand[Math.floor(Math.random() * pokerand.length)];
    let quote = ['Hehehe', 'Lol', 'Giggles', 'It hurts now', 'ahahaha', 'Yeet'];;
    let quoterand=quote[Math.floor(Math.random() * quote.length)];
    if (!personPoke) {
        let personPoke = "Air";

        let embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> just poked ${personPoke}!`)
            .addField(`${quoterand}`)
            .setImage(pokesrand)
            .setColor(`GREEN`);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> just poked ${personPoke}!`)
        .addField(`${quoterand}`)
        .setImage(pokesrand)
        .setColor(`GREEN`);

    message.channel.send(embed);
}

exports.help = {
    type: "fun",
    name: "poke",
    description: "Just Poke",
    usage: "zap poke <user>",
}
