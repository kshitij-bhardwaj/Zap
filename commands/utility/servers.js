
const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    const a= ["529229481702064128", "749936830098571335"];
    let state= false
    for(i=0; i<a.length;i++){
    if( message.author.id === a[i]) state=true;
    }
    if(state === false) return;
    const servers=client.guilds.cache.map(a=>a.name).join("\n")
    let embed= new Discord.MessageEmbed().setTitle("Servers That I am in")
                                        .setDescription(`${servers}`)
                                        .setColor("GREEN")
    message.channel.send(embed);
}