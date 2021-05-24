
const Discord = require('discord.js');
const db = require('quick.db');
const ranks = require('../commands/economy/ranks');
module.exports =(client, message) => {
  
  if (message.author.bot) return;
  if(message.guild === null) return;
  let state= db.fetch(`automod_${message.guild.id}`)
  if(state === true){
    const automoder = client.commands.get(`automoder`)
    automoder.run(client, message);
  
  }
  if(db.fetch(message.author.id + '.afk') === true){
    message.channel.send({embed: {color:`GREEN`,title:`${message.author.tag}`, description:' Removed your afk'}});
    let nickname = message.member.displayName;
    if (!message.member.hasPermission('ADMINISTRATOR')){
    if(nickname.substring(0,5) === '[AFK]'){
      if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    nickname = nickname.substring(5);
    message.member.setNickname(nickname);
    }
  }
    db.delete(message.author.id + '.afk')
    db.delete(message.author.id + '.messageafk')
  }
  if (message.content.indexOf('@') !== -1) {
    const users = message.mentions.members;
    const checkAFK = client.commands.get(`checkAFK`);
    checkAFK.run(client, message, users);
  }
    
 prefix = message.content.split(' ')[0].toLowerCase();
  if (prefix !== client.config.prefix) return;
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (!cmd) return;

  ranks.run(client, message);

  cmd.run(client, message, args);
};