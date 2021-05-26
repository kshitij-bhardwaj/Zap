const { createCanvas, loadImage} = require('canvas')
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['loc'],
    async run(client, message, args) { 
        const canvas = createCanvas(696,481);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "knowyourlocation.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        let text, text2;
        try{text = args.join(" ").split("/")[0];}catch(err){}
        try{text2 = args.join(" ").split("/")[1];}catch(err){}
    ctx.font = `25px Sans`;
    ctx.textAlign = "left";
    ctx.fillStyle = "#404040";
    ctx.fillText(`${text}`, 30, 170);
    ctx.font = `23px Sans`;
    ctx.fillStyle = "#606060";
    ctx.fillText(`${text2}`, 60, 295);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "location.png");
    message.channel.send(attachment);
    }
    
    
}