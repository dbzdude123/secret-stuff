const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find("name", "staff")) return message.reply("you can't use vote command.");
  let vote = await  message.channel.send(args.join(" "));
  await vote.react("☑");
  await vote.react("❌");

}
module.exports.help = {
  name: ">vote"
}
