const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
      

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Input a Leaderboard Option**\n\nCoin Leaderboard: zap leaderboard coins\nFresh Nikes Leaderboard: zap leaderboard nikes\nCar Leaderboard: zap leaderboard car\nMansion Leaderboard: zap leaderboard mansion`)
    .setColor(`GREEN`)


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'coins') {
    let money = db.all().filter(a => a.ID.startsWith(`money_${message.guild.id}`, { sort: '.data'}))
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.cache.get(money[i].ID.split('_')[1]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}<a:bubulle:541386847444664321>\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor(`GREEN`)

    message.channel.send(embed)
  } else if(args[0] == 'nikes') {
    let nike = db.all().filter(a => a.ID.startsWith(`nikes_${message.guild.id}`, { sort: '.data'}))
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = bot.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Fresh Nikes Leaderboard**\n\n${content}`)
    .setColor(`GREEN`)

    message.channel.send(embed)
  } else if(args[0] == 'car') {
    let cars = db.all().filter(a => a.ID.startsWith(`car_${message.guild.id}`, { sort: '.data'}))
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = bot.users.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Car Leaderboard**\n\n${content}`)
    .setColor(`GREEN`)

    message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let mansions = db.all().filter(a => a.ID.startsWith(`house_${message.guild.id}`, { sort: '.data'}))
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = bot.users.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Mansion Leaderboard**\n\n${content}`)
    .setColor(`GREEN`)

    message.channel.send(embed)
  }

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["leader"]
}