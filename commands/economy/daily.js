const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require('../../resources.json')
module.exports={
  aliases: [],
  async run(client, message, args) {  

  let user = message.author;

  let timeout = 86400000;
  let vip = await db.fetch(`silver_${user.id}`)
  if(vip === true) amount = Math.floor(Math.random() * 700) + 300;
  if (vip === null) amount = Math.floor(Math.random() * 300) + 200;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${resources["emoji-error"]} You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`${resources["emoji-success"]} You've collected your daily reward of \`Ƶ${amount}\``);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
}
};