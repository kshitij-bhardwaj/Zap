const { createCanvas, loadImage} = require('canvas')
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['loc'],
    async run(client, message, args) { 
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
            var words = text.split(' ');
            var line = '';
    
            for(var n = 0; n < words.length; n++) {
              var testLine = line + words[n] + ' ';
              var metrics = context.measureText(testLine);
              var testWidth = metrics.width;
              if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
              }
              else {
                line = testLine;
              }
            }
            context.fillText(line, x, y);
          }
        const canvas = createCanvas(640,653);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "texting.jpeg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        let text , text2;
        try{text = args.join(" ").split("/")[0];}catch(err){message.channel.send(`Usage: ${client.config.prefix} texting <text>/<text2>/<text3>`)}
        try{text2 = args.join(" ").split("/")[1];}catch(err){message.channel.send(`Usage: ${client.config.prefix} texting <text>/<text2>/<text3>`)}
    ctx.font = `35px Arial`;
    ctx.fillStyle = "#000000";
    try{wrapText(ctx, text, 50, 75, 200, 40);}catch(err){}
    try{wrapText(ctx, text2, 380, 380, 210, 40);}catch(err){}
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "texting.jpeg");
    message.channel.send(attachment);
    }
    
    
}