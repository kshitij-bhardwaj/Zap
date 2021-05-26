const db= require(`quick.db`);
const Canvas = require('canvas');
Canvas.registerFont('resources/Fonts/HelveticaNeue/Helvetica Neu Bold.ttf', {family: 'Helvetica Neue'})
const { join } = require("path");
const Discord = require("discord.js");
module.exports={
    async run(client, member){
	const guild = member.guild;
	const welcomeChannel = db.fetch(`welcomeChannel_${guild.id}`);	
	if(!welcomeChannel) return console.log(`${guild.id} No welcome channel found!`);
	const canvas = Canvas.createCanvas(960, 540);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(join(__dirname, "..", "..", "resources", "Images", "BestImage.jpg"));
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	let fontSize = 40; 
	do {
		// Assign the font to the context and decrement it so it can be measured again
		fontUser = `${fontSize -= 5}px "Helvetica Neue"`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	  } while (ctx.measureText(member.user.username).width > canvas.width - 400);
	ctx.font = `40px "Helvetica Neue"`;
	ctx.fillStyle = "#ffffff";
	ctx.textAlign = "center";
	ctx.fillText(`WELCOME TO THE SERVER`, 480, 80);
	let color = Math.floor(Math.random()*4);
	let actualColor = (color === 1)? `#ff0000`: ((color === 2)? `#0000ff` : ((color === 3)? `#ffff00`: `#ff00ff`))
	ctx.fillStyle = actualColor;
	ctx.textAlign ="center";
	ctx.font = fontUser;
	ctx.fillText(`${member.user.username}`, 480, 120);
	ctx.font = `40px "Helvetica Neue"`;
	ctx.fillStyle = "#ffffff";
	function getOrdinalNum(n) {
		return n + (n > 0 ? ['TH', 'ST', 'ND', 'RD'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
	  }
	const suffix= getOrdinalNum(guild.memberCount);
	ctx.textAlign = "center";
	ctx.fillText(`YOU ARE OUR ${suffix} MEMBER`, 480, 500);

	
	ctx.arc(480, 269, 125, 0, Math.PI * 2,  true);
    ctx.lineWidth = 30;
    ctx.strokeStyle= "#ffffff";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: "jpg"}));
    ctx.drawImage(avatar, 355, 144,250,250);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	const embed= new Discord.MessageEmbed()
				  .setColor(`GREEN`)
				  .setDescription(`Welcome to the server, ${member}!`)
				  .attachFiles(attachment)
				  .setImage('attachment://welcome-image.png');
    client.channels.cache.get(welcomeChannel).send(embed);
    }
}