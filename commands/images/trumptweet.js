const { createCanvas, loadImage, registerFont} = require('canvas')
registerFont('resources/Fonts/Roboto/Roboto-Light.ttf', {family: 'Roboto-Light'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['tt'],
    async run(client, message, args) { 
        const canvas = createCanvas(761,244);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "trumptweet.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        const text=args.join(' ');
        let fontSize = 40;
    do {
      // Assign the font to the context and decrement it so it can be measured again
      fontUser = `${fontSize -= 5}px "Roboto-Light"`;
      // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 100);
    ctx.font = fontUser;
    ctx.textAlign = "left";
    ctx.fillText(`${text}`, 25, 120);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "Trumptweet.jpg");
    message.channel.send(attachment);
    }
    
}