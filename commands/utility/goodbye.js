
const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(client, message, args) => {
  /* function getChannelFromMention(mention) {
	  if (!mention) return;

	  if (mention.startsWith('<#') && mention.endsWith('>')) {
		  mention = mention.slice(2, -1);

		  if (mention.startsWith('!')) {
			  mention = mention.slice(1);
		  }

		  return client.channels.cache.get(mention);
	  }
  } */
  let goodbyeStatus= db.fetch(`goodbye_${message.guild.id}`);
  if(args[0] === `enable`){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have the required Permission`);
    if(goodbyeStatus === true) return message.channel.send(`Goodbye is already enabled in this server`)
    await message.channel.send(`Please mention a channel where the welcome log should take place or cancel this command with \`cancel\``)
    const response1 = await message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 120000});
    const goodbyeChannel = response1.first().mentions.channels.first() || response1.first().guild.channels.cache.get(args[0]) 
    if (goodbyeChannel === null) return message.channel.send(`Please try again and mention a channel for logging Goodbye messages!` );
  
	db.set(`goodbyeChannel_${message.guild.id}`, goodbyeChannel.id);
	const embed = new Discord.MessageEmbed()
	  .setTitle('Channel Set!')
	  .addField('Message', `Successfully set your channel as ${goodbyeChannel}!`)
      .setTimestamp()
      .setColor(`GREEN`)
	  .setFooter("Zap Goodbye Category");
   message.channel.send(embed);
   db.set(`goodbye_${message.guild.id}`, true)
  }
  if(args[0] === `disable`){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have the required Permission`);
	if(goodbyeStatus === true){
	db.set(`goodbyeChannel_${message.guild.id}`, null);
	db.set(`goodbye_${message.guild.id}`, false)
	 return message.channel.send(`Goodbye is now disabled in this server`)
	}
}
	

  
}
