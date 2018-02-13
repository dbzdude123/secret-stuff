const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let blUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!blUser) return message.channel.send("Can't find user!");
  message.channel.sendMessage({
         "embed": {
                 title: 'Here is your blunt sir/miss.',
                 "image": {
                 "url": "http://moziru.com/images/marijuana-clipart-mlg-14.png",
                 }
             }
         });
}
module.exports.help = {
  name: ">giveblunt"
}
