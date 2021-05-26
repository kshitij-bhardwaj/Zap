const Discord = require("discord.js");
const db = require("quick.db");
const { run } = require("./ranks");
const resources = require('../../resources.json')
module.exports= {
  aliases: ['bal'],
  async run(client, message, args){

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-success"]} **${user}'s Balance**\n\nWallet: Ƶ${bal}\nBank: Ƶ${bank}`);
  message.channel.send(moneyEmbed)
  }
};
