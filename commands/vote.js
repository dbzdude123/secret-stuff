const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find("name", "staff")) return message.reply("you can't use vote command.");
  let vote =  message.channel.send(args.join(" "));
  vote.react("☑");
  vote.react("❌");

}
module.exports.help = {
  name: ">vote"
}
