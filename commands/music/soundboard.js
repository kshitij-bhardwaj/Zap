const path = require("path");
const { MessageEmbed }= require("discord.js");
module.exports={
    aliases: ['sb'],
    async run(client, message, args) { 
        
        
        const text = args.join(' ').toLowerCase();
        if(!text){
            const sbEmbed = new MessageEmbed()
                            .setAuthor(`Zap`, `https://cdn.discordapp.com/attachments/783336944712810506/796298580930854922/monkey.png`)
                            .setTitle(`Zap Soundboard`)
                            .setDescription(`1. **b-lasagna**\n2. **illuminati**\n3. **oh-no**\n4. **omae wa**\n5. **omgwow**\n6. **RUN**\n7. **whyayr**`)
                            .addField(`Type the following to play the oh-no soundboard`, `${client.config.prefix} sb oh-no`)
                            .setColor(`GREEN`)
                            .setFooter(`Powered by: https://www.myinstants.com`);
            return message.channel.send(sbEmbed);
        }
        const { channel } = message.member.voice;
		if (!channel) return message.channel.send({embed:{color:`RED`, description: 'I\'m sorry but you need to be in a voice channel to play music!'}});
        const permissions = channel.permissionsFor(message.client.user);
        const queue = client.distube.getQueue(message)
        if (queue)  return message.channel.send(`There is already something playing in Zap Music`);
		if (!permissions.has('CONNECT')) return message.channel.send({embed:{color: `RED`, description: 'I cannot connect to your voice channel, make sure I have the proper permissions!'}});
        if (!permissions.has('SPEAK')) return message.channel.send({embed:{color: `RED`, description: 'I cannot speak in this voice channel, make sure I have the proper permissions!'}});
    if(text === 'b-lasagna'){
    song = path.join(__dirname, "..", "..", "resources", "Sounds", `b-lasagna.mp3`)
    }
    else if(text === 'illuminati'){
        song = path.join(__dirname, "..", "..", "resources", "Sounds", `illuminati.mp3`)
    }
    else if(text === 'oh-no'){
            song = path.join(__dirname, "..", "..", "resources", "Sounds", `oh-no.mp3`)
    }
    else if(text === 'omae wa'){
        song = path.join(__dirname, "..", "..", "resources", "Sounds", `omae wa.mp3`)
    }
    else if(text === 'omgwow'){
        song = path.join(__dirname, "..", "..", "resources", "Sounds", `omgwow.mp3`)
    }
    else if(text === 'run'){
        song = path.join(__dirname, "..", "..", "resources", "Sounds", `run.mp3`)
    }
    else if(text === 'whyayr'){
        song = path.join(__dirname, "..", "..", "resources", "Sounds", `whyayr.mp3`)
    }
    else {
        return message.channel.send({embed: {color:`RED`, description: `Your mentioned sound doesn't exist in our dataset yet. Visit the support server to get it added.`}})
    }
    songname= song.split(`\\`);
    songname = songname[songname.length - 1]
    const serverQueue = message.client.queue2.get(message.guild.id);
    const queueEmbed = new MessageEmbed()
                                .addField(`🎶 Queued:`, `**${songname}**`)
                                .setColor(`GREEN`)
    if (serverQueue) {
        serverQueue.songs.push(song);
        return message.channel.send(queueEmbed);
    }
    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 2,
        playing: true
    };
    message.client.queue2.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        const play = async song => {
			const queue = message.client.queue2.get(message.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				message.client.queue2.delete(message.guild.id);
				return;
            }
            const songEmbed = new MessageEmbed()
                                .addField(`🎶 Playing:`, `**${songname}**`)
                                .setColor(`GREEN`)

			const dispatcher = queue.connection.play(song)
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(songEmbed);
        };
        try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}. Please try again!`);
			message.client.queue2.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}. Please try again`);
        };
    
    }
}