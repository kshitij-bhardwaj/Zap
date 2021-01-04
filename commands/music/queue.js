const { MessageEmbed } = require('discord.js');
module.exports.run =(client, message)=> {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('There is nothing playing.');
    const embed= new MessageEmbed()
      .setTitle(`**${message.guild.name}**'s Music Queue`)
      .addField(`**Song queue:**`, `${serverQueue.songs.map(song => `➡️ ${song.title}`).join('\n')}`)
      .addField(`**Now playing:**`, `${serverQueue.songs[0].title}`)
		
		message.channel.send(embed);
	};