const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 

  let user = message.author;

  let timeout = 2629800000;
  let amount = Math.floor(Math.random()*500)+ 200;

  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`<a:no:791738978180399114> You've already collected your monthly reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`<a:My_best_verified:787883034963476491> You've collected your monthly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())


  }
};
