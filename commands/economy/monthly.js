const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const resources = require("../../resources.json")
module.exports={
  aliases: ['month'],
  async run(client, message, args) {  

  let user = message.author;
  var i;
  /* premiumServer = db.fetch(`premium_${message.guild.id}`);
  if(premiumServer === false || premiumServer === null)
  return message.channel.send("Sorry, the server you are in is not a premium guild"); */
  
  let timeout =   2592000000;
  let amount = Math.floor(Math.random()*50000)+ 25000;
  

  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(`${resources["embed-failure"]}`)
    .setDescription(`${resources["emoji-error"]} You've already collected your monthly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`${resources["emoji-success"]}`)
  .setDescription(`${resources["emoji-coin"]} You've collected your monthly reward of \`Ƶ${amount}\``);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
  };
}
}