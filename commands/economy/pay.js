const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require("../../resources.json")
module.exports={
    aliases: [],
    async run(client, message, args) {  

  let user = message.mentions.users.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} You can't pay someone negative money`);

  if (args.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} You don't have that much money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-success"]} You have payed ${user.username} \`Ƶ${args[1]}\``);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}
}
