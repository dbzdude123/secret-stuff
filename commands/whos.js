const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var fortunejar = [
    "very attractive.",
    "very ugly.",
    "very old.",
    "semi-attractive.",
    "a horrible person.",
    "disgusting.",
    "somewhat ugly.",
    "beautiful.",
    "horrendus.",
    "fat.",
    "ugly.",
    "a twat.",
    "a nonce.",
    "a bellend.",
    "a homosexual.",
    "a homophobic.",
    "a nibhead.",
    "a noob.",
    "a murderer.",
    "a rapist.",
    "a chicken.",
    "a lovely person.",
    "an adorable person.",
    "very respective.",
    "very polite.",
    "very inteligent",
    "a serial killer.",
    "a thot.",
    "a killer.",
    "an addict.",
    "gay."
  ];
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(wUser = ">>whos @vida") return message.channel.send("Vida is simply gorgeous, the best there is.");
  if(!wUser) return message.channel.send(`${message.author}, you haven't selected anyone.`);
  message.channel.send(`${wUser}  is ` + fortunejar[Math.floor(Math.random() * fortunejar.length)]);

}
module.exports.help = {
  name: ">whos"
}
