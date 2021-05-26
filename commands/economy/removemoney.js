  
const Discord = require("discord.js");
const db = require("quick.db");
const resources = require('../../resources.json')
module.exports={
  aliases: ['rm'],
  async run(client, message, args) {  
  let ownerID = message.guild.ownerID;
  if(message.author.id !== ownerID) return message.channel.send(`You don't have the required Permissions`);

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor(`${resources["embed-success"]}`)
    .setDescription(`${resources["emoji-success"]} Removed \`Ƶ${args[1]}\`\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
  }
};
