const Discord = require('discord.js');
const got = require('got');
const resources = require('../../resources.json')
module.exports={
	aliases: ['shth'],
	async run(client, message, args) {  
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/showerthoughts/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor(`${resources['embed-fun']}`);
			embed.addField('Stats',`${resources['emojo-thumbsUp']} ${memeUpvotes} ${resources['emoji-comment']} ${memeNumComments}`,false);

			message.channel.send(embed);
		})
		.catch(console.error);
	}
};
