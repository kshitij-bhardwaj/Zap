const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const resources = require('../../resources.json')
module.exports={
  aliases: [],
  async run(client, message, args) {    

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-error']} You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor(`${resources['embed-failure']}`)
        .setDescription(`${resources['emoji-success']} You worked as a **${replies[result]}** and earned \`Ƶ${amount}\``);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}
}