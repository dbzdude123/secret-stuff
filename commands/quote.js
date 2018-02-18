const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(msg.author.id !== "207438736575692800") return;
  message.channel.send(args.join(" "));
  message.delete();
}
module.exports.help = {
  name: ">quote"
}
