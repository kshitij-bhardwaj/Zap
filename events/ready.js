
module.exports = (client) => {
  console.log(`Zap is ready to zoom, on ${client.guilds.cache.size} servers`);
  let playing = client.voice.connections.size; 
  client.user.setActivity(`A Zap powers ${client.users.cache.size} users`, {type: "LISTENING"} );
}
