const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let blUseru = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!blUseru) return message.channel.send("Can't find user!");
  message.channel.sendMessage({
         "embed": {
                 title: 'Here is your blunt sir/miss.',
                 "image": {
                 "url": "http://clipart.info/images/minicovers/1513719129smoke-blunt-transparent-weed-joint-png.png",
                 }
             }
         });
}
module.exports.help = {
  name: ">giveblunt"
}
