const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const music = require('discord.js-music-v11');
const fs = require("fs");
const mysql = require("mysql");
const bot = new Discord.Client();
bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);

  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("DBSuper | >>help", {type: "WATCHING"});
});

music(bot, {
	prefix: '>>',
	global: false,
	maxQueueSize: 20,
	clearInvoker: true,
    channel: 'Music'
});

bot.on("message", async message =>{
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;
 let prefix = botconfig.prefix;
 let token = botconfig.token;
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);
 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 if(commandfile) commandfile.run(bot,message,args);

});

bot.on('guildMemberAdd', member => {
  const generalchannel = member.guild.channels.find(`name`, "general");
  const robloxnames = member.guild.channels.find(`name`, "roblox-names");
  generalchannel.send(`<@${member.user.id}> Welcome to the universe of love! Check <#${robloxnames.id}>.`);
});

bot.login(bot.login(process.env.B0T_T0KEN);
