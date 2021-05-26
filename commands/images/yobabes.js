const { createCanvas, loadImage, registerFont} = require('canvas')
registerFont('resources/Fonts/Minecrafter/Minecrafter.Reg.ttf', {family: 'Minecrafter'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['yo'],
    async run(client, message, args) { 
        const canvas = createCanvas(347,319);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "yobabes.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command. Doesn't support most special characters :()`}})
        const text=args.join(' ');
        const length= text.length;
    ctx.font = `20px "Minecrafter"`;
    ctx.textAlign = "left";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${text}`, 165-(length*6), 30);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "yobabes.png");
    message.channel.send(attachment);
    }
    
    
}