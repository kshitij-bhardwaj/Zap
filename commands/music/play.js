
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { canModifyQueue, STAY_TIME } = require("./playinfo");
 
module.exports.run = async (client, message, args)=> {
    //name: 'play',
    //description: 'Joins and plays a video from youtube',
        const voiceChannel = message.member.voice.channel;
        let Embeded = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<a:no:791738978180399114> You need to be in a voice channel to execute this command!`);
        /* let Embeder = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<a:no:791738978180399114> You must be in the same channel as ${message.client.user}`); */

        
        if (!voiceChannel) return message.channel.send(Embeded).catch(console.error);

        const permissions = voiceChannel.permissionsFor(message.client.user);
        let Embeded1 = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<a:no:791738978180399114> I do not have the correct permissions!`);
        if (!permissions.has('CONNECT', 'SPEAK')) return message.channel.send(Embeded1);
        let Embeded2 = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<a:no:791738978180399114> Usage: ${message.client.prefix}play <YouTube URL | Video Name>`);
        if (!args.length) return message.channel.send(Embeded2);
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
        const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
        if (playlistPattern.test(args[0])) {
            return message.client.commands.get("playlist").execute(message, args);
          } 
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
             .on('finish', () =>{
                setTimeout(()=>{
                voiceChannel.leave();
                message.channel.send('Leaving channel');
                }, 300000)
            }); 
            let Em1= new Discord.MessageEmbed()
                        .setColor(`GREEN`)
                        .setDescription(`Now Playing ***Your Link!***`);
 
            await message.reply(Em1).catch(console.error);
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            try{
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
            let Em2= new Discord.MessageEmbed()
                        .setColor(`GREEN`)
                        .setDescription(`Now Playing ***${video.title}***`);
 
            await message.reply(Em2)
        } catch{ message.channel.send(`Error`);}
        } else {
            message.channel.send('No video results found');
        }
        /** if (voiceChannel !== message.guild.me.voice.channel)
        return message.channel.send(Embeder).catch(console.error); */
        /* const queueConstruct = {
            textChannel: message.channel,
            voiceChannel,
            connection: null,
            songs: [],
            loop: false,
            volume: DEFAULT_VOLUME || 100,
            playing: true
          }; */
          /* if (serverQueue) {
            serverQueue.songs.push(song);
            return serverQueue.textChannel
              .send(`✅ **${video.title}** has been added to the queue by ${message.author}`)
              .catch(console.error);
          } */
          /* queueConstruct.songs.push(song);
            message.client.queue.set(message.guild.id, queueConstruct);
            try {
                queueConstruct.connection = await channel.join();
                await queueConstruct.connection.voice.setSelfDeaf(true);
                play(queueConstruct.songs[0], message);
              } catch (error) {
                console.error(error);
                message.client.queue.delete(message.guild.id);
                await channel.leave();
                return message.channel.send(`Could not join the channel: ${error}`).catch(console.error);
              } */

    }
