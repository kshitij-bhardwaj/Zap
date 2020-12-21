const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
.addField('Zap is a discord bot deemed to help discord users have fun!', 'We have a [github](https://github.com/kshitij-bhardwaj/Zap)repo which tells you all the commands Zap holds, check it out!!',false)
.addField('Want to get hold of more commands?', 'Join our support server to get hold of all the awesome commands **only our support server has**!!',false)
.addField('Want to donate?',' Here is our patreon, we hope to server you with our best, a little donation ignites us!',false)
.addField('Donation Perks'?,'You get a place in our `zap info` command with an awesome look!',false)
.setColor(0x00AE86)
 .setTimestamp()
 .setFooter("Zap Help!");
message.channel.send(embed);        
}
