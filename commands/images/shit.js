const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: [],
    async run(client, message, args) { 
        const canvas = createCanvas(361,475);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "shit.jpg"));
        if(!args[0] || !message.mentions.members.first()) return message.channel.send({embed:{color:`RED`, description:`You need to mention someone to take the place of shit.`}})
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(200, 100, 30, 0, Math.PI * 2,  true);
        ctx.arc(200, 320, 20, 0, Math.PI * 2,  true);
        ctx.closePath();
        ctx.clip();
        try{
        let victim = message.mentions.members.first();
        const avatar = await loadImage(victim.user.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar, 180, 300, 40, 40);
        const avatar2 = await loadImage(message.author.displayAvatarURL({ format: "jpg"}));
        ctx.drawImage(avatar2, 170, 70, 60, 60);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "shitty.jpg");
        message.channel.send(attachment);
        }catch{ return message.channel.send(`Faced a problem with this command. If this problem persists, report in the [support server](https://discord.gg/RTh79cwxxp).`)}
    
    }
    
    
}