const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.reply("you don't have enough permissions.");
    if(!mUser) return message.reply("Couldn't find user.");
    if(mUser.hasPermission("MANAGE_ROLES")) return message.reply("Can't mute that user!");
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("You need to specify a time ammount for the mute.");

    await(mUser.addRole(muterole.id));
    message.reply(`<@${mUser.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function(){
      mUser.removeRole(muterole.id);
      message.author.delete;
    }, ms(mutetime));
}
module.exports.help = {
  name: ">mute"
}
