const Discord = require('discord.js');
const wiki = require("wikijs").default();
const resources = require('../../resources.json')
module.exports={
	aliases: ['wikipedia'],
	async run(client, message, args) {  
	let embed = new Discord.MessageEmbed()
					.setColor(`${resources['embed-fun']}`)
					.setTitle(`Fetching Info${resources['emoji-loading']}`)
					.setDescription(`Please stand by...`)
					
	let msg = await message.channel.send(embed);
	let result;
	let suffix = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
	suffix = suffix.slice(1).join(' ');
	
	if (!suffix) {
		const random = await wiki.random(1);
		result = await wiki.page(random[0]);
	} else {
		const search = await wiki.search(suffix, 1);
		if (!search.results.length) {
			let embed1 = new Discord.MessageEmbed()
						.setColor(`${resources['embed-failure']}`)
						.setTitle(`What was that again? 📚🤓`)
						.setDescription(`Even Wikipedia doesn't seem to know what you're talking about.`)
						.setFooter(`Check for typos or try searching for something else!`)
			return message.channel.send(embed1);
		}
		result = await wiki.page(search.results[0]);
	}
	let description = await result.summary();
	if (description.length < 100) {
		// 100 is a bit short so load the full description in that case
		description = await result.content();
	}
	if (description.length > 1800) {
		description = `${description.substring(0, 1800)}...\nArticle is too long, click [**here**](${result.raw.fullurl}) to read more!`;
	}
	const mainImage = await result.mainImage().catch(() => null);
	let mainEmbed = new Discord.MessageEmbed()
						.setColor(`${resources['embed-success']}`)
						.setTitle(`${result.raw.title}`)
						.setDescription(`${description}`)
						.setImage(mainImage)
						.setURL(result.raw.fullurl)
						
	message.channel.send(mainEmbed);
	let embed1 = new Discord.MessageEmbed()
					.setColor(`${resources['embed-success']}`)
					.setTitle(`Here is the Info ${resources['emoji-success']} `)
					.setDescription(`We hope you like our service`)
	msg.edit(embed1);
}
};