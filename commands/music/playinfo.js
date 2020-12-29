exports.canModifyQueue = (member) => {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;
  
    if (channelID !== botChannel) {
      member.send("You need to join the voice channel first!").catch(console.error);
      return;
    }
  
    return true;
  };
  
  let config;
  
  try {
    config = require("../../config.json");
  } catch (error) {
    config = null;
  }
  exports.STAY_TIME = config ? config.STAY_TIME : process.env.STAY_TIME;
  exports.DEFAULT_VOLUME = config ? config.DEFAULT_VOLUME: process.env.DEFAULT_VOLUME;
  exports.MAX_PLAYLIST_SIZE = config ? config.MAX_PLAYLIST_SIZE : process.env.MAX_PLAYLIST_SIZE;