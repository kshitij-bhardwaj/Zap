const Discord = require("discord.js");
const db = require("quick.db");
const { createCanvas, loadImage} = require('canvas');
const { join } = require("path");

module.exports={
  aliases: ['pf'],
  async run(client, message, args) {  
  let user = (message.mentions.members.first()) ? message.mentions.members.first().user : message.author;
  
  let user1= user.username;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let xp = await db.fetch(`valueXP_${message.guild.id}_${user.id}`)
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${message.guild.id}_${user.id}`)
  if(level === null) level=1;

  if(level===4) rank = '<:Gold:791801979718074378>'
  else if(level===3) rank = '<:Silver:791802074958004234>'
  else if(level===2) rank = '<:Bronze:791801943185948712>'
  else rank = 'Common'
  
    const canvas = createCanvas(1000,333);
    const ctx = canvas.getContext("2d");
    
    const background = await loadImage(join(__dirname, "..", "..", "resources", "Images", "background.jpg"));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffff";
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "#000000";
    ctx.fillRect(180, 216, 770, 65);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeRect(180, 216, 770, 65);
    ctx.stroke();

    ctx.fillStyle = "#ff0000";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(180, 216, ((100/ (level*1800))*xp), 65);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${xp} / ${level*1800} XP`, 600, 260);

    ctx.font = "30px Arial"
    ctx.textAlign = "left";
    ctx.fillText(`Wallet: Ƶ${money}`, 800 , 60);

    ctx.font = "30px Arial"
    ctx.textAlign = "left";
    ctx.fillText(`Bank: Ƶ${bank}`, 800 , 100);

    let fontSize = 45;
    do {
      // Assign the font to the context and decrement it so it can be measured again
      fontUser = `${fontSize -= 5}px Arial`;
      // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(user1).width > canvas.width - 400);
    ctx.font = fontUser;
    ctx.textAlign = "left";
    ctx.fillText(`${user1}`, 300, 120);

    ctx.font = "50px Arial";
    ctx.fillText("League:", 300, 180);
    ctx.fillText(rank, 500, 180)

    ctx.arc(170, 160, 120, 0, Math.PI * 2,  true);
    ctx.lineWidth = 6;
    ctx.strokeStyle= "#000000";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(user.displayAvatarURL({ format: "jpg"}));
    ctx.drawImage(avatar, 40,40,250,250);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "profile.jpg");
    message.channel.send(`Profile Card for ${user}`, attachment);

  }
};
