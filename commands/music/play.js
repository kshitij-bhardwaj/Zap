
const DisTube = require('distube');

module.exports = {
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send({embed:{color: `RED`, description: 'I cannot connect to your voice channel, make sure I have the proper permissions!'}});
        if (!permissions.has('SPEAK')) return message.channel.send({embed:{color: `RED`, description: 'I cannot speak in this voice channel, make sure I have the proper permissions!'}});
        const serverQueue1 = message.client.queue2.get(message.guild.id);
        if(serverQueue1) return message.channel.send(`There is already something playing in Zap Soundboard`);
        const string = args.join(" ")
        if (!string) return message.channel.send(`Please enter a song url or query to search.`)
        try {
            client.distube.play(message, `${string}`)
        } catch (e) {
            message.channel.send(`Error: \`${e}\``)
        }
    }
}