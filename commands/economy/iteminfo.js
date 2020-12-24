const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => { 
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor(`GOLD`)
      message.channel.send(embed)
    } else if(args[0] == 'nikes') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor(`GOLD`)
      message.channel.send(embed)
    } else if(args[0] == 'car') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor(`GOLD`)
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
    .setColor(`GOLD`)
    message.channel.send(embed)
  }

  }

  
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }