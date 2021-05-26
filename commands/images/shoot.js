const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: [],
    async run(client, message, args) { 
        const canvas = createCanvas(451,327);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "shoot.jpg"));
        if(!args[0] || !message.mentions.members.first()) return message.channel.send({embed:{color:`RED`, description:`You need to mention someone to Shoot in the HEAD.`}})
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        
        ctx.arc(140, 100, 60, 0, Math.PI * 2,  true);
        ctx.arc(370, 100, 45, 0, Math.PI * 2,  true);
        ctx.closePath();
        ctx.clip();
        try{
        let victim = message.mentions.members.first();
        const avatar = await loadImage(victim.user.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar, 80, 40,120,120);
        const avatar2 = await loadImage(message.author.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar2, 325, 55, 90,90)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "shootit.jpg");
    message.channel.send(attachment);
        }catch{ return message.channel.send(`Faced a problem with this command. If this problem persists, report in the [support server](https://discord.gg/RTh79cwxxp).`)}
    
    }
    
    
}