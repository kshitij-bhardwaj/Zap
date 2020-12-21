const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personPoke = message.mentions.members.first();
    let poke = ['https://media.giphy.com/media/PkR8gPgc2mDlrMSgtu/giphy.gif', 'https://media.giphy.com/media/3x5nIjlszTBQs/giphy.gif', 'https://media.giphy.com/media/Vfie0DJryAde8/giphy.gif', 'https://media.giphy.com/media/141SlA8Pv3J7WM/giphy.gif', 'https://media.giphy.com/media/TYAYywTcAb4Iw/giphy.gif', 'https://media.giphy.com/media/MAdHk0h1xIHImwcRa8/giphy.gif', 'https://media.giphy.com/media/1Bh3kuNSGCkPi0oUtI/giphy.gif'];
    let pokerand = poke[Math.floor(Math.random() * poke.length)];
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
