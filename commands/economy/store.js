const db = require('quick.db')
const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');
module.exports={
  aliases: ['st'],
  async run(client, message, args) {  
      
        if(args[0] === "gaming"){
          let gamingMenu = new Menu(message.channel, message.author.id, [
            {
            name: 'gaming 1',
            content: new MessageEmbed({
              title: "THE GAMING STORE- Pg 1",
              description: `Price: \`Ƶ750000\`\n To buy, use the command \`${client.config.prefix} buy setup1\`` 
            }).setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793423226965458994/GA6f9xF.jpeg`)
            .setFooter(`Image Source: https://imgur.com/a/t7Npq6s`)
            .setColor(`RED`),
            reactions: {
              '⏹': 'delete',
              '▶': 'gaming 2'
            }
          },
            {
              name: 'gaming 2',
              content: new MessageEmbed({
              title: "THE GAMING STORE- Pg 2",
              description: `Price: \`Ƶ550000\`\n To buy, use the command \`${client.config.prefix} buy setup2\``
              }).setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793426142324850718/d4EthlX.jpg`)
              .setFooter(`Image Source: https://i.imgur.com/d4EthlX.jpg`)
              .setColor(`ORANGE`),
              reactions: {
                '◀': 'first',
                '⏹': 'delete',
                '▶': 'gaming 3'
              }
            },
            {
              name: 'gaming 3',
              content: new MessageEmbed({
              title: "THE GAMING STORE- Pg 3",
              description: `Price: \`Ƶ300000\`\n To buy, use the command \`${client.config.prefix} buy setup3\``
              }).setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793427586466185267/jack-b-B10AxHKLvnQ-unsplash.jpg`)
              .setFooter(`https://unsplash.com/photos/fewhfXbCUzI`)
              .setColor(`YELLOW`),
              reactions: {
                '◀': 'gaming 2',
                '⏹': 'delete',
                '▶': 'last'
              }
            },
            {
              name: 'gaming 4',
              content: new MessageEmbed({
              title: "THE GAMING STORE- Pg 4",
              description: `Price: \`Ƶ25000\`\n To buy, use the command \`${client.config.prefix} buy setup4\``
              }).setImage(`https://cdn.discordapp.com/attachments/791589454929330197/793428779917246464/Y55cTVp.jpeg`)
              .setFooter(`Image Source:https://imgur.com/gallery/mfs51zx`)
              .setColor(`GREEN`),
              reactions: {
                '◀': 'gaming 3',
                '⏹': 'delete',
                
              }
            }
          ])
          gamingMenu.start();
        } else {let embed = new MessageEmbed()  
        .setTitle(`Welcome to Zap Store`)
        .setDescription(`Your one stop shop for all the things you need to build an impressive profile in Zap's Economy System (and flex infront of your mates)`)
        .addField(`What do we have currently to sell?`, `We have a gaming setup store which you can access buy typing \`${client.config.prefix} store gaming\``)
        .setColor(`GREEN`)
        message.channel.send(embed);}

        
}
}