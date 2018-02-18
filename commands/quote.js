const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "207438736575692800") return message.reply("you must have bot owner status to use this command.");
  message.channel.send(args.join(" "));
  message.delete();
}
module.exports.help = {
  name: ">quote"
}
