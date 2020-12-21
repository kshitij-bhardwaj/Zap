
const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();
const msgbub = client.emojis.cache.get("790510910266671114");
const like = client.emojis.cache.get("790510205502619678");
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`${like} ${memeUpvotes} ${msgbub} ${memeNumComments}`);

			message.channel.send(embed);
		})
		.catch(console.error);
};

module.exports.config = {
	name: 'meme',
	aliases: [],
};
