const Discord = require('discord.js');
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require("../../resources.json")
module.exports={
  aliases: [],
  async run(client, message, args) {  
  
    let user = message.author;
  
    let timeout = 600000;
    let amountrand = [5,10,15,20,25,30];
    let amount = amountrand[Math.floor(Math.random() * amountrand.length)];
    let altrusit = ["Taylor Swift", "Carl Johnson", "Joe Biden", "Spongebob", "Goku", "Kira", "Franklin", "OnePunchMan", "Your mother"];
    let altrusitvalue = altrusit[Math.floor(Math.random() * altrusit.length)];
    let blocked= ["**Beg too much and the economy will crash**", "**Why don't you work? Huh?**", "**IMF ran out of money!**", "Not again"];
    let blockedvalue = blocked[Math.floor(Math.random() * blocked.length)];
    let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
  
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
      let time = ms(timeout - (Date.now() - beg));
    
      let timeEmbed = new Discord.MessageEmbed()
      .setColor(`${resources['embed-failure']}`)
      .setDescription(`${resources['emoji-error']} ${blockedvalue} \n\nBeg again in ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
    .setColor(`${resources['embed-success']}`)
    .setDescription(`${resources['emoji-coin']} **${altrusitvalue}** gave you \`Ƶ${amount}\``);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
  
  
    }
  }
  };
