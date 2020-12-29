const Discord = require('discord.js');
module.exports.run = async(client, message) =>{
    //name: 'leave',
    //description: 'stop the bot and leave the channel',
    
        const voiceChannel = message.member.voice.channel;
        let Embed1= new Discord.MessageEmbed()
                        .setColor(`RED`)
                        .setDescription(`<a:no:791738978180399114>You need to be in a voice channel to stop the music!`);
        if(!voiceChannel) return message.channel.send(Embed1);
        await voiceChannel.leave();
        let Embed= new Discord.MessageEmbed()
                        .setColor(`GREEN`)
                        .setDescription('***Leaving channel***');
        await message.channel.send(Embed)
 
    
}