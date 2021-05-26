const {loadImage, createCanvas} = require('canvas');
const request = require("node-superfetch");
const Discord = require("discord.js");
module.exports={
    aliases: [],
    async run(client, message, args) {
        let user = (message.mentions.members.first()) ? message.mentions.members.first().user : message.author;
        try{
          const { body } = await request.get(user.displayAvatarURL( {format: "jpg", size: 1024}));
           const data = await loadImage(body);
           const canvas = createCanvas(data.width, data.height);
           ctx = canvas.getContext("2d");
           /* const placeX= Math.floor(Math.random()*255) + 1;
           const placeY= Math.floor(Math.random()*255) + 1; */
           ctx.drawImage(data, 0,0);
           desaturate(ctx, -5, 0, 0, data.width, data.height);
           contrast(ctx, 0, 0, data.width, data.height);
           Noise(ctx, 0, 0, data.width, data.height)
           Invert(ctx, 0, 0, data.width, data.height);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "deepfry.jpg");
        message.channel.send(attachment);
        }catch(error){return message.channel.send(`Error: ${error.message}`)};
}
}
function contrast(ctx, x, y, width, height){
    const data = ctx.getImageData(x,y,width,height);
    const factor = (259/100) + 1;
    const intercept = 128 * (1- factor);
    for(let i = 0; i<data.data.length; i +=4){
        data.data[i] =  (data.data[i]* factor) +intercept;
        data.data[i+1]= (data.data[i+1]*factor) + intercept;
        data.data[i+2] = (data.data[i+2]*factor) + intercept;
    }
    ctx.putImageData(data, x, y);
    return ctx;
}
function desaturate(ctx, level, x, y, width, height){
    const data = ctx.getImageData(x, y, width, height);
    for(let i = 0; i< height; i++){
        for(let j= 0; j< width; j++){
            const dest = ((i*width)+j)*4;
            const grey = Number.parseInt((0.2125 * data.data[dest])+(0.7154 * data.data[dest + 1])+ (0.0721 * data.data[dest + 2]), 10);
            data.data[dest] += level * (grey - data.data[dest+1]);
            data.data[dest + 1] += level * (grey - data.data[dest + 1]);
            data.data[dest + 2] += level * (grey - data.data[dest + 1]);

        }
    }
    ctx.putImageData(data, x, y);
    return ctx;
}
function Noise(ctx, x, y, width, height) {
        const data = ctx.getImageData(x, y, width, height);
        for (var i = 0, n = data.data.length; i < n; i += 4) {
           // generating random color coefficients
           var randColor1 = 0.6 + Math.random() * 0.4;
           var randColor2 = 0.6 + Math.random() * 0.4;
           var randColor3 = 0.6 + Math.random() * 0.4;
            // assigning random colors to our data
            data.data[i] = data.data[i]*randColor1; // green
            data.data[i+1] = data.data[i+1]*randColor2; // green
            data.data[i+2] = data.data[i+2]*randColor3; // blue
        }
        // put image date back to context
        ctx.putImageData(data, x, y);
        return ctx;
}
function Invert(ctx, x, y, width, height) {
        const data = ctx.getImageData(x, y, width, height);
        for (var i = 0; i < data.data.length; i += 4) {
            // assigning inverted colors to our data
            data.data[i] = 255 - data.data[i]; // green
            data.data[i+1] = 255 - data.data[i+1]; // green
            data.data[i+2] = 255 - data.data[i+2]; // blue
        }
        // put image date back to context
        ctx.putImageData(data, x, y);
        return ctx;
    }
    
    
