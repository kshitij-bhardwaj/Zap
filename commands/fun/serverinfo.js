const Discord = require("discord.js");
const resources = require('../../resources.json')
module.exports.run = async (client, message, args) => {
  const verlvl = {
    'NONE': "None",
    'LOW': "Low",
    'MEDIUM': "Medium",
    'HIGH': "(╯°□°）╯︵ ┻━┻",
    'VERY_HIGH': "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setColor(`${resources["embed-fun"]}`)
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Owner", message.guild.owner, inline)
    .addField("Region", message.guild.region.toUpperCase(), inline)
    .addField("Verification Level", verlvl[message.guild.verificationLevel],inline)
    .addField("Members", `:busts_in_silhouette: ${message.guild.memberCount}`, inline)
    .addField("Roles", message.guild.roles.cache.size, inline)
    .addField("Channels", message.guild.channels.cache.size, inline)
    .addField("You Joined", message.member.joinedAt)
    .setFooter(`Created ${message.guild.createdAt}`);

    message.channel.send(serverembed);
}