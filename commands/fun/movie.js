const discord = require("discord.js");


module.exports = {
  
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of movie or series")
    }
    
    const imob = new imdb.Client({apiKey: ""}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#ff2050")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true);
    
    
    message.channel.send(embed)
    
    
    
  }

}