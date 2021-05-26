const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require("../../resources.json");
module.exports={
  aliases: ['dep'],
  async run(client, message, args) {  
  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${resources["emoji-error"]} You don't have any money to deposit`)

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-coin"]} You have deposited \`Ƶ${money}\` into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} You can't deposit negative money. Try running withdraw.`);

  if (args.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${resources["emoji-error"]} You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-success"]} You have deposited \`Ƶ${args[0]}\` into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
}