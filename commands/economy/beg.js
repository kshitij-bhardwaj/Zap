const Discord = require('discord.js');
const db = require("quick.db");
const ms = require("parse-ms");
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('zap'))return;  
  
    let user = message.author;
  
    let timeout = 600000;
    let amountrand = [5,10,15,20,25,30];
    let amount = amountrand[Math.floor(Math.random() * amountrand.length)];
    let altrusit = ["Taylor Swift", "Carl Johnson", "Joe Biden", "Spongebob", "Goku", "Kira", "Franklin", "OnePunchMan", "Your mother"];
    let altrusitvalue = altrusit[Math.floor(Math.random() * altrusit.length)];
    let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
  
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
      let time = ms(timeout - (Date.now() - beg));
    
      let timeEmbed = new Discord.MessageEmbed()
      .setColor(`RED`)
      .setDescription(`<a:sgTRIGGERED:790535691145576459> You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`<a:Coin:790532957705994240> **${altrusitvalue}** gave you \`${amount}\` coins`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
  
  
    }
  };
  
  
  module.exports.help = {
    name:"beg",
    aliases: [""]
  }
