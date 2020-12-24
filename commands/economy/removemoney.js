  
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => { 
  let ownerID = message.guild.ownerID;
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor(`GREEN`)
    .setDescription(`<a:My_best_verified:787883034963476491> Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"remove",
  aliases: ["rm"]
}