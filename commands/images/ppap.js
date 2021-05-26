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
        const canvas = createCanvas(398,512);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "ppap.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        let text , text2, text3;
        try{text = args.join(" ").split("/")[0];}catch(err){message.channel.send(`Usage: ${client.config.prefix} ppap <text>/<text2>/<text3>`)}
        try{text2 = args.join(" ").split("/")[1];}catch(err){message.channel.send(`Usage: ${client.config.prefix} ppap <text>/<text2>/<text3>`)}
        try{text3 = args.join(" ").split("/")[2];}catch(err){message.channel.send(`Usage: ${client.config.prefix} ppap <text>/<text2>/<text3>`)}
    ctx.font = `25px Sans`;
    ctx.fillStyle = "#000000";
    try{wrapText(ctx, text, 20, 60, 180, 30);}catch(err){}
    try{wrapText(ctx, text2, 20, 210, 180, 30);}catch(err){}
    try{wrapText(ctx, text3, 20, 380, 180, 30);}catch(err){}
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "location.png");
    message.channel.send(attachment);
    }
    
    
}