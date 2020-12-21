var Discord = require("discord.js");
var client = new Discord.Client();
var pageMenu = require("@quantiom/pagemenu");

module.exports.run = (client, message, args) => {
  let pMenu = new pageMenu(
    message,
    [{
        title: "**Fun Commands**",
        description: "`Prefix is zap`",
        color: "66cdaa",
        footer::"Page 1 of 4"
        fields: [{
            name: "slap",
            value: "Slaps the mentioned users( not fr)",
            inline: true
          },
          {
            name: "poke",
            value: "Pokes the mentioned user(not fr)",
            inline: true
          },
          {
            name: "meme",
            value: "Random meme from **Reddit**",
            inline: true
          },
          {
            name: "snitch",
            value: "Snitches the previously deleted message, hehe, be careful",
            inline: true
          }
        
        ]},
      {
        title: "**Economy",
        description: "`Prefix is zap`",
        color: "66cdaa",
       footer:"Page 2 of 4",
        fields: [{
            name: "beg",
            value: "Begs from a random stranger",
            inline: true
          }
        ]},
      {
        title: "**Info**",
        description: "`Prefix is zap`",
        footer:"Page 4 of Page 4"
        color: "66cdaa",
        fields: [{
            name: "info",
            value: "Information about the bot",
            inline: true
          },
          {
            name: "whois",
            value: "Displays info about a user.",
            inline: true
          },
          {
            name: "av",
            value: "Shows the **nasty** avatar of the user",
            inline: true
          },
          {
            name: "bug",
            value: "Reports the bug straight to the **incredible** developers",
            inline: true
          },
          {
            name: "feed",
            value: "Sends the feedback straight to the **incredible** developers",
            inline: true
          },
        ]
      },
      {
        title: "Sponsers and Contributers",
        description: "No prefix needed for these silly",
        footer:"Page 4 of 4
        color: "66cdaa", // green
        fields: [{
            name: "Nothing",
            value: "Nothing",
            inline: true
          },
          {
            name: "Nothing",
            value: "Nothing",
            inline: true
          },
          {
            name: "Nothing",
            value: "Nothing",
            inline: true
          },
          {
            name: "nothing",
            value: "nothing",
            inline: true
          }
        ]
      },

    ], {
      duration: 60000,
      expireFunction: function (msg) {
        msg.delete();
      }
    }
  );

  pMenu.run();
};
