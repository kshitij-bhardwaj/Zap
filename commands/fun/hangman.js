const Discord = require('discord.js');
var randomWords = require('random-words');
const letterEmojisMap = {
    "🅰️": "A", "🇦": "A", "🅱️": "B", "🇧": "B", "🇨": "C", "🇩": "D", "🇪": "E",
    "🇫": "F", "🇬": "G", "🇭": "H", "ℹ️": "I", "🇮": "I", "🇯": "J", "🇰": "K", "🇱": "L",
    "Ⓜ️": "M", "🇲": "M", "🇳": "N", "🅾️": "O", "⭕": "O", "🇴": "O", "🅿️": "P",
    "🇵": "P", "🇶": "Q", "🇷": "R", "🇸": "S", "🇹": "T", "🇺": "U", "🇻": "V", "🇼": "W",
    "✖️": "X", "❎": "X", "❌": "X", "🇽": "X", "🇾": "Y", "💤": "Z", "🇿": "Z"
}
class HangmanGame {
     constructor() {
        this.gameEmbed = null;
        this.inGame = false;
        this.word = "";
        this.guesssed = [];
        this.wrongs = 0;
    }

    newGame(message) {
        if (this.inGame)
            return;

        this.inGame = true;
        this.word = randomWords({exactly: 1 , formatter:(word => word.toUpperCase()), join:('')} );
        this.guesssed = [];
        this.wrongs = 0;


        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Zap\'s Hangman')
            .setDescription(this.getDescription())
            .addField('Letters Guessed', '\u200b')
            .addField('How To Play', "React to this message using the emojis that look like letters (🅰️, 🇹, )")
            .setTimestamp();

        message.channel.send(embed).then(emsg => {
            this.gameEmbed = emsg;
            this.waitForReaction();
        });
    }

    makeGuess(reaction) {
        if (Object.keys(letterEmojisMap).includes(reaction)) {
            const letter = letterEmojisMap[reaction];
            if (!this.guesssed.includes(letter)) {
                this.guesssed.push(letter);

                if (this.word.indexOf(letter) == -1) {
                    this.wrongs++;

                    if (this.wrongs == 6) {
                        this.gameOver(false);
                    }
                }
                else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
                    this.gameOver(true);
                }
            }
        }

        if (this.inGame) {
            const editEmbed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Hangman')
                .setDescription(this.getDescription())
                .addField('Letters Guessed', this.guesssed.length == 0 ? '\u200b' : this.guesssed.join(" "))
                .addField('How To Play', "React to this message using the emojis that look like letters (🅰️, 🇹, )")
                .setTimestamp();
            this.gameEmbed.edit(editEmbed);
            this.waitForReaction();
        }
    }

    gameOver(win) {
        this.inGame = false;
        const editEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Zap\'sHangman')
            .setDescription((win ? "Oh, did you just win!" : "Sorry, but you did lose!") + "\n\nThe Word was:\n" + this.word)
            .setTimestamp();
        this.gameEmbed.edit(editEmbed);

        this.gameEmbed.reactions.removeAll();
    }

    getDescription() {
        return "```"
            + "|‾‾‾‾‾‾|   \n|     "
            + (this.wrongs > 0 ? "🧢" : " ")
            + "   \n|     "
            + (this.wrongs > 1 ? "😟" : " ")
            + "   \n|     "
            + (this.wrongs > 2 ? "👕" : " ")
            + "   \n|     "
            + (this.wrongs > 3 ? "🩳" : " ")
            + "   \n|    "
            + (this.wrongs > 4 ? "👞👞" : " ")
            + "   \n|     \n|__________\n\n"
            + this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").join(" ")
            + "```";
    }

    waitForReaction() {
        this.gameEmbed.awaitReactions(() => true, { max: 1, time: 300000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                this.makeGuess(reaction.emoji.name);
                reaction.remove();
            })
            .catch(collected => {
                this.gameOver(false);
            });
    }
}

module.exports={
    aliases: ['hg'],
    run(client, message, args) {  
	 const hangman = new HangmanGame(client);
	hangman.newGame(message)}}