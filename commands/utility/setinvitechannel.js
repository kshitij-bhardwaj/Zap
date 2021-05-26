const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {
  function getChannelFromMention(mention) {
	  if (!mention) return;

	  if (mention.startsWith('<#') && mention.endsWith('>')) {
		  mention = mention.slice(2, -1);

		  if (mention.startsWith('!')) {
      
			  mention = mention.slice(1);
		  }

		  return client.channels.cache.get(mention);
	  }
  }

  if (message.author.hasPermission('ADMINISTRATOR')) return message.channel.send('You are not admin!');
  const inviteChannel = getChannelFromMention(args[0]);
  if (!inviteChannel == null) return message.channel.send('Please mention a channel for invites!');

  db.set(`inviteChannel_${message.guild.id}`, inviteChannel.id);
  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Channel Set!')
    .addField('Message', `Successfully set your channel as ${inviteChannel}!`)
    .setTimestamp()
    .setFooter("Zap InviteManager Category");
}