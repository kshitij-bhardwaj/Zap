const { createCanvas, loadImage, registerFont} = require('canvas');
registerFont('resources/Fonts/Comic Sans/COMIC.TTF', {family: 'Comic Sans'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['fire'],
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
        const canvas = createCanvas(669,696);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "Fireman.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        const text=args.join(' ');
        ctx.font= '25px "Comic Sans"';
        ctx.fillStyle = '#000000';
        wrapText(ctx, text, 350, 40, 280, 25);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "FireMan.png");
    message.channel.send(attachment);
    }

    
    
    
}