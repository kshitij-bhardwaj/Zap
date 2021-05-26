const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require('../../resources.json')
module.exports={
  aliases: ['week'],
  async run(client, message, args) {    

  let user = message.author;
  let timeout = 604800000;
  let vip = await db.fetch(`gold_${user.id}`)
  if(vip === true) amount = Math.floor(Math.random() * 5000) + 3000;
  if (vip === null) amount = Math.floor(Math.random() * 1500) + 1500;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${resources["emoji-error"]} You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-success"]} You've collected your weekly reward of \`Ƶ${amount}\``);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
}
};
