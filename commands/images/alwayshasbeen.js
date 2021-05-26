const { createCanvas, loadImage, registerFont} = require('canvas')
registerFont('resources/Fonts/HelveticaNeue/Helvetica Neu Bold.ttf', {family: 'Helvetica Neue'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['ahb'],
    async run(client, message, args) { 
        const canvas = createCanvas(673,389);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "AlwaysHasBeen.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        const text=args.join(' ');
        const length= text.length;
    ctx.font = `28px "Helvetica Neue"`;
    ctx.textAlign = "left";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${text}`, 315-(length*6), 150);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "ReasonToLive.jpg");
    message.channel.send(attachment);
    }
    
    
}