const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.send("i am up and running.");
  message.delete().catch(O_o=>{});
}
module.exports.help = {
  name: ">check"
}
