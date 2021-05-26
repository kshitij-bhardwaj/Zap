module.exports = {
    name: "filter",
    aliases: ["filters"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        if (args[0] === "off" && queue.filter) client.distube.setFilter(message, queue.filter)
        else if (Object.keys(client.distube.filters).includes(args[0])) client.distube.setFilter(message, args[0])
        else if (args[0]) return message.channel.send(`Not a valid filter. Try \n \`${Object.keys(client.distube.filters).map((filter)=> `${filter}`)}\``)
        message.channel.send(`Current Queue Filter: \`${queue.filter || "Off"}\``)
    }
}