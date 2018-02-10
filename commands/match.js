const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var matchvalue = [
    "1",
    "3",
    "4",
    "6",
    "7",
    "9",
    "13",
    "24",
    "17.",
    "28",
    "32",
    "36",
    "34.",
    "37",
    "31",
    "41",
    "42",
    "44",
    "45",
    "46",
    "49",
    "51",
    "53",
    "58",
    "63",
    "67",
    "69",
    "70",
    "72",
    "73",
    "77"
  ];
  let maUser1 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let maUser2 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!maUser) return message.channel.send(`${message.author}, you need to specify two users.`);
  if(!maUser2) return message.channel.send(`${message.author}, you need to specify two users.`);
  message.channel.send(`${maUser1} and ${maUser2}  are a match of ` + fortunejar[Math.floor(Math.random() * matchvalue.length)] + `%`);

}
module.exports.help = {
  name: ">match"
}
