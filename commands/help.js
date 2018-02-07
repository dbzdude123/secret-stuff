const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let helpEmbed = new Discord.RichEmbed()
  .setDescription("**Command guide for Universe 2 Bot**")
  .setColor("#15f153")
  .addField(">ban @user", "Bans the mentioned user from the current server.")
  .addField(">kick @user", "Kicks the mentioned user from the current server.")
  .addField(">mute @user time", "Mutes the mentioned user for a period of time (For example: 10s)")
  .addField(">report @user reason", "Reports the mentioned user to the staff of the current server.")
  .addField(">purge X", "Deletes the number of messages X in the current channel.");
  message.author.sendMessage(helpEmbed);
  message.reply("Commands have been sent to your DMs.")

}
module.exports.help = {
  name: "help"
}