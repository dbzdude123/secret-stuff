const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.send(client.ping + " ms");
  message.delete().catch(O_o=>{});
}
module.exports.help = {
  name: ">ping"
}
