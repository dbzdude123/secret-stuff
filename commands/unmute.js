const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.reply("You don't have enough permissions.");
  if(mUser.hasPermission("MANAGE_ROLES")) return message.reply("you can't unmute that user.");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(mUser.roles.find("name", "Muted")){
    mUser.removeRole(muterole.id);
    message.channel.send(`<@${mUser.id}> has been unmuted!`);
  };
}
module.exports.help = {
  name: ">unmute"
}
