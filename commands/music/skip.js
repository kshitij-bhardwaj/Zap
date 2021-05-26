
	module.exports = {
		name: "skip",
		aliases: ["sk"],
		inVoiceChannel: true,
		run: async (client, message, args) => {
			const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
			const queue = client.distube.getQueue(message)
			if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
			try {
				client.distube.skip(message)
				message.channel.send(` Skipped! Now playing:\n${queue.songs[0].name}`)
			} catch (e) {
				message.channel.send(` ${e}`)
			}
		}
	}