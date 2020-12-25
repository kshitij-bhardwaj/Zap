const {array} = require('../profanity.json');
const Discord = require('discord.js');
module.exports = (client, message) => {
  
  if (message.author.bot) return;

 
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  const cmd = client.commands.get(command);
  var censorList = array;
  var myMsg = message.content;
  embed = new Discord.MessageEmbed()
  .setDescription(`Your message in ${message.guild.name} was deleted due to the following reason: \n Contains bad word ${c} \n If you think this is a error or glitch please report this to the staff. \n\n Here's your message \n ${myMsg}`);

  
for (c in censorList) {
        if (myMsg.includes(censorList[c])){
            message.delete().catch(console.error);
            message.author.send(embed).catch(console.error);
        }
    };

  if (!cmd) return;

  cmd.run(client, message, args);
};
