const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
  
  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | You must be in a voice channel!` }})
    
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | You are not in my voice channel!`}});
  
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | There is nothing playing!` }})
  
  let song = await client.player.stop(message.guild.id);

  message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.stop} | Disconnected!` }})


}

module.exports.config = {
  name: "leave",
  aliases: []
}
