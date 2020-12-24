const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async ( bot, message, args) => {
      


    let embed = new Discord.MessageEmbed()
        .setDescription(`**VIP Ranks**\n\nBronze: 3500 Coins \`zap buy bronze\`\n\n**Lifestyle Items**\n\nFresh Nikes: 600 \`zap buy nikes\`\nCar: 800 \`zap buy car\`\nMansion: 1200 \`zap buy mansion\``)
        .setColor(`GOLD`)
        .setFooter(`To see the benefits of these items, type zap iteminfo [item-name]`)
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}