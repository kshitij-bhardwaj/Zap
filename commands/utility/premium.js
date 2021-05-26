const db = require("quick.db");
const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    const a= ["529229481702064128", "749936830098571335"];
    let state= false
    for(i=0; i<a.length;i++){
    if( message.author.id === a[i]) state=true;
    }
    if(state === false) return;
    
    if (!args[1]) return message.channel.send("Enter a Guild ID");
    if(args[0] === 'enable'){
    db.set(`premium_${args[1]}`, true);
    message.channel.send(`Set ${args[1]} as a Premium Guild.`)
    }
    if(args[0] === 'disable'){
    db.set(`premium_${args[1]}`, false);
    message.channel.send(`Set ${args[1]} as a Normal Guild.`)
    }
    message.channel.send("Updated Premium Guilds");

}
