const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "/";
Client.on("ready",() => {
    console.log("bot on");
});

Client.on("guildMemberAdd", member => {
    console.log("texte intro");
    member.guild.channel.cache.find(channel => channel.id === "559129097532342283").send(member.displayName + " texte intro \nOn est **" + member.guild.memberCount + "** ici");
    //member.roles.add("identifiant du role").then(mbr => {console.log("role atttribué pour "+ member.diplayName)}).catch(()=> {console.log("role non attribué")});
});

Client.on("guildeMemberRemove", member => {
    console.log("rip nigga");
    member.guild.channel.cache.find(channel => channel.id === "559129097532342283").send(member.displayName + " boujou bien");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;


    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }

    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " id = : " + message.author.id + " a poster un msg");
    }
});


Client.login(process.env.TOKKEN);
