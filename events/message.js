
const {array} = require('../profanity.json');
const Discord = require('discord.js');
const db = require('quick.db');
module.exports =(client, message) => {
  
  if (message.author.bot) return;
  let state= db.fetch(`automod_${message.guild.id}`)
  console.log(state);
  if(message.content === `${client.config.prefix} automod enable`){
    if(state === true) return message.channel.send(`Automod is already enabled in this server`)
   db.set(`automod_${message.guild.id}`, true)
   message.channel.send(`Automod for this server is now enabled.`)
  }
  if(message.content === `${client.config.prefix} automod disable`){
      if(state === false) return message.channel.send(`Automod for this server is not enabled yet`);
   db.set(`automod_${message.guild.id}`, false)
  message.channel.send(`Automod for this server is now disabled`)
  }
  let state1= db.fetch(`automod_${message.guild.id}`)
  console.log(state1)
  if(state1 === true){
  var censorList = array;
  var myMsg = message.content;
  embed = new Discord.MessageEmbed()
  .setDescription(`Your message in ${message.guild.name} was deleted due to the following reason: \n Contains bad word \n If you think this is a error or glitch please report this to the staff. \n\n Here's your message \n ${myMsg}`);

  var c;
for (c in censorList) {
        if (myMsg.includes(censorList[c])){
            message.delete().catch(console.error);
            message.author.send(embed).catch(console.error);
        }
    };
  }
  

 
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  

  if (!cmd) return;

  cmd.run(client, message, args);
};
