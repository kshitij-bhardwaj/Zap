const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    async run(client, message, args) { 
        const canvas = createCanvas(501,479);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "ban.png"));
        if(!args[0] || !message.mentions.members.first()) return message.channel.send({embed:{color:`RED`, description:`You need to mention someone to Kick Off The Cliff.`}})
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        
        ctx.arc(110, 300, 30, 0, Math.PI * 2,  true);
        ctx.arc(340, 170, 40, 0, Math.PI * 2,  true);
        ctx.closePath();
        ctx.clip();
        try{
        let victim = message.mentions.members.first();
        const avatar = await loadImage(victim.user.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar, 80, 270,60,60);
        const avatar2 = await loadImage(message.author.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar2, 300, 130, 80,80)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "ban1.jpg");
    message.channel.send(attachment);
        }catch{ return message.channel.send(`Faced a problem with this command. If this problem persists, report in the [support server](https://discord.gg/RTh79cwxxp).`)}
    
    }
    
    
}