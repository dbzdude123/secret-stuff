const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var fortunejar = [
    "very attractive.",
    "very ugly.",
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
    "very inteligent.",
    "a serial killer.",
    "a thot.",
    "a killer.",
    "an addict.",
    "a turd.",
    "gay."
  ];
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!wUser) return message.channel.send(`${message.author}, you haven't selected anyone.`);
  if(message.author.id == "207438736575692800") return message.channel.send("Vida is the most awesome person in the world.");
  if(message.author.id == "239035110987399178") return message.channel.send("Silent is the true goddess of Universe 2!");
  if(message.author.id == "174558357363884041") return message.channel.send("Fearless is obviously gay, just look at him.");
  message.channel.send(`${wUser}  is ` + fortunejar[Math.floor(Math.random() * fortunejar.length)]);

}
module.exports.help = {
  name: ">whos"
}
