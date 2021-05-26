/* module.exports={
	aliases: ['l'],
	async run(client, message, args) {  
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description:'I\'m sorry but you need to be in a voice channel to play music!'}});
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send({embed:{color:`RED`, description:'There is nothing playing that I could stop for you.'}});
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
	}
	}; */
	module.exports = {
		name: "leave",
		aliases: ["disconnect", "stop"],
		inVoiceChannel: true,
		run: async (client, message, args) => {
			const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
			const queue = client.distube.getQueue(message)
			if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
			client.distube.stop(message)
			message.channel.send(`Left the channel!`)
		}
	}