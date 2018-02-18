const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "207438736575692800") return message.channel.send(`${message.author}, you must have bot owner stats.`);
  await message.delete();
  message.channel.send(args.join(" "));
}
module.exports.help = {
  name: ">quote"
}
