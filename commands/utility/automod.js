const db = require('quick.db');
module.exports = {
    async run(client, message){
    let state= db.fetch(`automod_${message.guild.id}`)
  
  if(message.content === `${client.config.prefix} automod enable`){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have the required Permission`);
    if(state === true) return message.channel.send(`Automod is already enabled in this server`)
   db.set(`automod_${message.guild.id}`, true)
   message.channel.send(`Automod for this server is now enabled.`)
  }
  if(message.content === `${client.config.prefix} automod disable`){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have the required Permission`);
      if(state === false) return message.channel.send(`Automod for this server is not enabled yet`);
   db.set(`automod_${message.guild.id}`, false)
  message.channel.send(`Automod for this server is now disabled`)
  }
    }
}