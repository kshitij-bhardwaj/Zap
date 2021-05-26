/* module.exports={
	aliases: ['pau'],
	async run(client, message, args) {  
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send({embed:{color:`GREEN`, description:'⏸ Paused the music!'}});
		}
		return message.channel.send({embed:{color:`RED`, description:'There is nothing playing.'}});
	}
}; */
module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
		
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(` There is nothing in the queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send("Resumed the song for you :)")
        }
        client.distube.pause(message)
        message.channel.send("Paused the song for you :)")
    }
}