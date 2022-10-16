var Discord = require("discord.js");
var client = new Discord.Client(); 
var config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  var comando = args.shift().toLowerCase();
  if(comando === "ping") {
    var m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.\n A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
});

client.login(config.token);