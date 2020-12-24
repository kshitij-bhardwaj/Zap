const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

    let money = db.all().filter(a => a.ID.startsWith(`money_${message.guild.id}`, { sort: '.data'}))
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.cache.get(money[i].ID.split('_')[2]).username

      

        content += `**${i+1}. ${user} ~ ${money[i].data}**\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setTitle(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor(`GREEN`)
    .setTimestamp()
    .setThumbnail('https://media.giphy.com/media/dt92tDMQbv2sCsBKj2/giphy.gif')
    .setFooter(`Image Credits: Re Modernist`)

    message.channel.send(embed)
  } 

module.exports.help = {
  name:"leaderboard",
  aliases: ["leader"]
}