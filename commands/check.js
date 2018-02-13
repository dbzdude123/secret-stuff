const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
  message.delete().catch(O_o=>{});
}
module.exports.help = {
  name: ">check"
}
