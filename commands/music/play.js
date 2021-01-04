/* const { Util } = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
if (!message.member.voice.channel) return message.channel.send({embed: {color: "RED", description: `<a:no:791738978180399114> | You must be in a voice channel to play!`}});
  
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | You are not in my voice channel!`}});

let query = args.join(" ");
if (!query) return message.channel.send({embed: {color: "RED", description: `<a:no:791738978180399114> | Please enter a query to search!` }})

const searchTracks = await client.player.searchTracks(query).catch(e => {
  return message.channel.send({embed: {color: "RED", description: `<a:no:791738978180399114> | No results found!`}})
});

if(searchTracks.length < 1) return message.channel.send({embed: {color: "RED", description: `<a:no:791738978180399114> | No results found!`}})
  
let track = searchTracks[0];


if(client.player.isPlaying(message.guild.id)){
    // Add the song to the queue
    let song = await client.player.addToQueue(message.guild.id, track, message.member.user.tag);
   return message.channel.send({embed: {color: "GREEN", description: `<a:tick:791208682607870003> | ${Util.escapeMarkdown(song.name)} by ${Util.escapeMarkdown(song.author)}  Added to the queue!` }})
} else {
    // Else, play the song
    let song = await client.player.play(message.member.voice.channel, track, message.member.user.tag);
    message.channel.send({embed: {color: "GREEN", description: `<a:classicdiamond:793784776719859732> | Now Playing:\n${song.name}` }})
    client.player.getQueue(message.guild.id).on('end', () => {
    message.channel.send({embed: {color: "YELLOW", description: `<a:classicdiamond:793784776719859732> | Queue completed, add some more songs to play!` }})
    });

    client.player.getQueue(message.guild.id).on('trackChanged', (oldSong, newSong, skipped, repeatMode) => {
        if(repeatMode){
            message.channel.send({embed: {color: "GREEN", description: `<a:loading:787867865235324928> | Repeating:\n ${oldSong.name}` }})
        } else {
            message.channel.send({embed: {color: "GREEN", description: `<a:classicdiamond:793784776719859732> | Now Playing:\n ${newSong.name}` }})
        }
    });
}
}
  
module.exports.config = {
  name: "play",
  aliases: ['p']
} */
const { Util } = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports.run = async(client, message, args) => {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        if (!permissions.has('SPEAK')) return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }

        const serverQueue = message.client.queue.get(message.guild.id);
        if(validURL(args[0])){
		const songInfo = await ytdl.getInfo(args[0].replace(/<(.+)>/g, '$1'));
		 song = {
			id: songInfo.videoDetails.video_id,
			title: Util.escapeMarkdown(songInfo.videoDetails.title),
			url: songInfo.videoDetails.video_url
        } 
        } 

        const video = await videoFinder(args.join(' '));
    
        if(video){
            try{
            const songInfo  = await ytdl.getInfo(video.url);
             song = {
                id: songInfo.videoDetails.video_id,
                title: Util.escapeMarkdown(songInfo.videoDetails.title),
                url: songInfo.videoDetails.video_url
            } 
        } catch{ message.channel.send(`Error`);}
        }else {
            message.channel.send('No video results found');
        }

		if (serverQueue) {
			serverQueue.songs.push(song);
			return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
		}

		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: channel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		message.client.queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
			const queue = message.client.queue.get(message.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				message.client.queue.delete(message.guild.id);
				return;
			}

			const dispatcher = queue.connection.play(ytdl(song.url, {filter:'audioonly'}))
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Start playing: **${song.title}**`);
		};

		try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.client.queue.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}`);
        };
    }

