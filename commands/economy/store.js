const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async ( client, message, args) => {
      


    let embed = new Discord.MessageEmbed()
        .setDescription(`**VIP Ranks**\n\n <:cs_bronze:791611873182220299> **Bronze**: 3500 Coins \`${client.config.prefix} buy bronze\`\n**Bronze Rank Benefits:** Chance to get more coins from robbing someone \n`)
        .setColor(`DARK_GOLD`)
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}