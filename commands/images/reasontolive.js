const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['rtl'],
    async run(client, message, args) { 
        const canvas = createCanvas(539,1188);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "ReasonToLive.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        const text=args.join(' ');
    ctx.font = `35px Sans`;
    ctx.textAlign = "left";
    ctx.rotate(10 * Math.PI / 180);
    ctx.fillText(`${text}`, 160, 575);
    ctx.restore();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "ReasonToLive.jpg");
    message.channel.send(attachment);
    }
    
    
}