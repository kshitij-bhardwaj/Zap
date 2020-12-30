const Discord = require("discord.js");
const fs = require("fs");
const { resolve } = require("path");
const walk = require("walk");

const { Player } = require("discord-player");
const player = new Player(client);

client.player = player;

const config = require("./config.json");
const client = new Discord.Client();

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
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();
client.snipes = new Discord.Collection();

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
client.login(config.token);
