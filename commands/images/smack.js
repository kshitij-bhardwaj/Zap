const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: [],
    async run(client, message, args) { 
        const canvas = createCanvas(693,897);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "smack.jpg"));
        if(!args[0] || !message.mentions.members.first()) return message.channel.send({embed:{color:`RED`, description:`You need to mention someone to SMACK.`}})
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        
        ctx.arc(165, 590, 140, 0, Math.PI * 2,  true);
        ctx.arc(540, 150, 120, 0, Math.PI * 2,  true);
        ctx.closePath();
        ctx.clip();
        try{
        let victim = message.mentions.members.first();
        const avatar = await loadImage(victim.user.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar, 25, 450,280,280);
        const avatar2 = await loadImage(message.author.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar2, 420, 30, 240,240)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "smack.jpg");
    message.channel.send(attachment);
        }catch{ return message.channel.send(`Faced a problem with this command. If this problem persists, report in the [support server](https://discord.gg/RTh79cwxxp).`)}
    
    }
    
    
}