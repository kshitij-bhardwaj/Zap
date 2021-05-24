const Discord = require('discord.js');
module.exports=(client, message) =>{
    try{
        if(message.author.bot) return;
        const snipes= message.client.snipes.get(message.channel.id) || [];
        snipes.unshift({
            content:message.content,
            author: message.author,
            image: (message.attachments.size > 0) ? message.attachments.first().proxyURL : null,
            date: new Date().toLocaleString("en-GB", { datastyle: "full", timestyle: "short"})
        })
        snipes.splice(10);
        message.client.snipes.set(message.channel.id, snipes);
        }catch(e){console.error();}
    }
