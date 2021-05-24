require('dotenv').config();
const Discord = require("discord.js");
const DisTube = require("distube")
const fs = require("fs");
const { resolve } = require("path");
const walk = require("walk");
const config = require("./config.json");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5MDQ4MjE0NDY2NTQwMzQyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwMzgwNjI1fQ.5ZOzZ7rSOwE3ziHSGLfj1SjQGt6o8p-wEOFXdpNdWbA', client);



client.config = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
client.commands = new Discord.Collection();
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true })
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();
client.snipes = new Discord.Collection();
client.games = new Map();
client.queue2 = new Map();

const walker = walk.walk("./commands");
walker.on("file", function (root, stats, next) {
  if (!stats.name.endsWith(".js")) return;
  const category = resolve(root).split("\\").slice(-1)[0];
  if (!client.categories.has(category)) {
    client.categories.set(category, []);
  }

  let props = require(`${resolve(root)}/${stats.name}`);
  let commandName = stats.name.split(".")[0];
  console.log(`Attempting to load command ${commandName}`);

  
  client.commands.set(commandName, props);

  client.categories.set(category, [
    ...client.categories.get(category),
    commandName,
  ]);
  next();
});
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

client.distube
    .on("playSong", (message, queue, song) => {
      const embed = new Discord.MessageEmbed().setTitle(`${message.guild.name}'s Music Queue`)
                                              .addField(`🎶Playing:`, `${song.name}`)
                                              .addField(`⏰Duration:`,`${song.formattedDuration}`)
                                              .setDescription(`${status(queue)}`)
                                              .setThumbnail(`${song.thumbnail}`)
                                              .setFooter(`Requested by: ${song.user.user}`, song.user.displayAvatarURL())
                                              .setColor(`GREEN`)
      message.channel.send(embed);
    })
    .on("addSong", (message, queue, song) =>{ 
      const embed = new Discord.MessageEmbed().setTitle(`${message.guild.name}'s Music Queue`)
                                              .addField(`Queue:`, `${song.name}`)
                                              .addField(`Duration:`,`${song.formattedDuration}`)
                                              .setDescription(`${status(queue)}`)
                                              .setThumbnail(`${song.thumbnail}`)
                                              .setFooter(`Requested by: ${song.user.user}`, song.user.displayAvatarURL())
                                              .setColor(`GREEN`)
      message.channel.send(embed);
    })
    /* .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.title}\` playlist (${playlist.total_items} songs) to queue\n${status(queue)}`
    )) */
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0
        message.channel.send({embed:{color:`GREEN`, description:`**Choose an option from below**\n${result.slice(0,5).map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`}})
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", message => message.channel.send(` Searching canceled`))
    .on("finish", message => {message.channel.send("No more song in queue."), setTimeout(client.distube.stop(message), 600000)})
    .on("error", (message, err) => message.channel.send(` An error encountered: ${err}`))
client.login(process.env.DISCORD_TOKEN);