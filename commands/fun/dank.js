const Discord = require('discord.js');
const got = require('got');
const resources = require('../../resources.json')
module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/dankmemes/random/.json')
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
			embed.setColor(`${resources['embed-fun']}`);
			embed.setImage(memeImage);
			embed.addField('Stats',`${resources['emojo-thumbsUp']} ${memeUpvotes} ${resources['emoji-comment']} ${memeNumComments}`,false);

			message.channel.send(embed);
		})
		.catch(console.error);
};

exports.help = {
    type: "fun",
    name: "dank",
    description: "Generates a random meme from r/dankmemes",
    usage: "zap dank",
}