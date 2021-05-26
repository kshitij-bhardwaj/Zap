const { createCanvas, loadImage, registerFont} = require('canvas')
registerFont('resources/Fonts/Comic Sans/COMIC.TTF', {family: 'Comic Sans'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    aliases: ['imp'],
    async run(client, message, args) { 
        const canvas = createCanvas(517,319);
        const ctx = canvas.getContext("2d");
        const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "imposter.png"));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 4;
        if(!args[0]) return message.channel.send({embed:{color:`RED`, description:`You need to provide some text after the command.`}})
        let text , text2, text3, text4, text5;
        text = args.join(" ").split("/")[0];
        const length= text.length;
        text2 = args.join(" ").split("/")[1];
        text3 = args.join(" ").split("/")[2];
        const length3= text.length;
        text4 = args.join(" ").split("/")[3];
        text5 = args.join(" ").split("/")[4];
        let username = message.author.username;
        const userLength= username.length;
    ctx.font = `18px Comic Sans`;
    ctx.textAlign = "left";
    ctx.fillStyle = "#000000";
    try{ctx.fillText(`${text}`, 440-(length*10), 50);}catch(err){}
    if(text2 !== undefined) {try{ctx.fillText(`${text2}`, 80, 115);}catch(err){}}
    if(text3 !== undefined) {try{ctx.fillText(`${text3}`, 440-(length*10), 180);}catch(err){}}
    if(text4 !== undefined) {try{ctx.fillText(`${text4}`, 80, 245);}catch(err){}}
    if(text5 !== undefined) {try{ctx.fillText(`${text5}`, 80, 310);}catch(err){}}
    ctx.font = `21px "Comic Sans"`;
    ctx.fillStyle = "#ff0000"
    try{ctx.fillText(`${username}`, 440-(userLength*10), 30);}catch(err){}
    if(text2 !== undefined) {try{ctx.fillText(`Stupid`, 77, 95);}catch(err){}}
    if(text3 !== undefined) {try{ctx.fillText(`${username}`, 440-(userLength*10), 160);}catch(err){}}
    ctx.fillStyle = "#000000"
    if(text4 !== undefined) {try{ctx.fillText(`Not Stupid`, 80, 225);}catch(err){}}
    if(text5 !== undefined) {try{ctx.fillText(`Imposter AF`, 80, 290);}catch(err){}}
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "imposter1.jpg");
    message.channel.send(attachment);
    }
    
    
}