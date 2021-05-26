const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: [],
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
                x -= 7;
                y += lineHeight;
              }
              else {
                line = testLine;
              }
            }
            context.fillText(line, x, y);
          }
        const canvas = createCanvas(590,773);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "news.jpg"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        const text=args.join(' ');
    ctx.font = `35px Sans`;
    ctx.textAlign = "left";
    ctx.rotate(15 * Math.PI / 180);
    wrapText(ctx, text, 280, 250, 260, 40)
    ctx.restore();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "News.jpg");
    message.channel.send(attachment);
    }
    
    
}