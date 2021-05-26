module.exports = {
    name: "autoplay",
    aliases: ["ap", "auto"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const { channel } = message.member.voice;
    if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        let mode = client.distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    }
}