const Discord = require('discord.js')
const db = require('quick.db')
const resources = require('../../resources.json')
module.exports={
    aliases: [],
    async run(client, message, args) {  
    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor(`${resources['embed-failure']}`)
    .setDescription(`${resources['emoji-error']} You need \`Ƶ${750000 - author}\` to purchase Setup 1 from the Gaming Store`);

    if (args[0] == 'setup1') {
        if (author < 750000) return message.channel.send(Embed)
        
        db.fetch(`gaming_setup1_${message.guild.id}_${user.id}`);
        db.set(`gaming_setup1${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor(`GREEN`)
        .setDescription(`${resources['emoji-success']} Purchased Gaming Setup 1 For \`Ƶ750000\``)
        .setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793423226965458994/GA6f9xF.jpeg`)
        .setFooter(`Image Source: https://imgur.com/a/t7Npq6s`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 750000)
        message.channel.send(Embed2)
    } else if(args[0] == 'setup2') {
        let Embed3 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-error']} You need \`Ƶ${550000 - author}\` to purchase Setup 2 from the Gaming Store`);

        if (author < 550000) return message.channel.send(Embed3)

        db.fetch(`gaming_setup2_${message.guild.id}_${user.id}`);
        db.set(`gaming_setup2_${message.guild.id}_${user.id}`, true)

        let Embed4 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-success']}`)
        .setDescription(`${resources['emoji-success']} Purchased Gaming Setup 2 For \`Ƶ550000\``)
        .setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793426142324850718/d4EthlX.jpg`)
        .setFooter(`Image Source: https://i.imgur.com/d4EthlX.jpg`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 550000)
        message.channel.send(Embed4)
    } else if(args[0] == 'setup3') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-error']} You need \`Ƶ${300000 - author}\` to purchase Setup 3 from the Gaming Store`);

        if (author < 300000) return message.channel.send(Embed5)

        db.fetch(`gaming_setup3_${message.guild.id}_${user.id}`);
        db.set(`gaming_setup3_${message.guild.id}_${user.id}`, true)

        let Embed6 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-success']}`)
        .setDescription(`${resources['emoji-success']} Purchased Gaming Setup 3 For \`Ƶ300000\``)
        .setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793427586466185267/jack-b-B10AxHKLvnQ-unsplash.jpg`)
        .setFooter(`https://unsplash.com/photos/fewhfXbCUzI`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 300000)
        message.channel.send(Embed6)
    } else if(args[0] == 'setup4') {
        let Embed7 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-error']} We were kidding. You just need \`Ƶ${5000 - author}\`to purchase this shitty setup from the Gaming Store\n And it seems you don't even have that much.`);

        if (author < 5000) return message.channel.send(Embed7)

        db.fetch(`gaming_setup4_${message.guild.id}_${user.id}`);
        db.set(`gaming_setup4_${message.guild.id}_${user.id}`, true)

        let Embed8 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-success']}`)
        .setDescription(`${resources['emoji-success']} Purchased Gaming Setup 4 For Just \`Ƶ5000\`.\n Yup, we were kidding XD`)
        .setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793428779917246464/Y55cTVp.jpeg`)
        .setFooter(`Image Source:https://imgur.com/gallery/mfs51zx`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed8)
    }
       
        else {
        let embed3 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-error']} Enter an item to buy LOL`)
        message.channel.send(embed3)
    }

}
}