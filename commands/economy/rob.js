const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 

let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`<a:no:791738978180399114> You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`<a:no:791738978180399114> You need atleast 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`<a:no:791738978180399114> ${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setDescription(`<a:My_best_verified:787883034963476491> You robbed ${user} and got away with ${random} coins`)
.setColor(`GREEN`)
message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

module.exports.help = {
  name:"rob",
  aliases: [""]
}