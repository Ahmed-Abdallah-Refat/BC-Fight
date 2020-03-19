const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ff.glitch.me/`);
}, 280000);

//======================================[Const]======================================
const Discord = require('discord.js');
const conv = require('number-to-words');
const moment = require('moment');
const dateformat = require('dateformat');
const ms = require('parse-ms')

const ids = ["286088294234718209","","",""] || ["286088294234718209"]
const privatee = "286088294234718209";
const regDate = "19";
const sub =  "30";
const client = new Discord.Client({ disableEveryone: true});
const bot = new Discord.Client();
const fs = require('fs');
const request = require('request');
const r1 = require('snekfetch');
const Canvas = require("canvas");
const jimp = require('jimp')
const weather = require('weather-js');
const pretty = require("pretty-ms");
client.on('warn', console.warn);
client.on('error', console.error);
const prefix = "*";

// =================================[ SettingsVIP ]===================================

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

let cmds = {
  play: { cmd: 'play', a: ['p'] },
  skip: { cmd: 'skip', a: ['s'] },
  stop: { cmd: 'stop' },
  pause: { cmd: 'pause' },
  resume: { cmd: 'resume', a: ['r'] },
  volume: { cmd: 'volume', a: ['vol'] },
  queue: { cmd: 'queue', a: ['q'] },
  repeat: { cmd: 'repeat', a: ['re'] },
  forceskip: { cmd: 'forceskip', a: ['fs', 'fskip'] },
  skipto: { cmd: 'skipto', a: ['st'] },
  nowplaying: { cmd: 'nowplaying', a: ['np'] },
  mysub: { cmd: 'mysub', a: ['subscription', 'sub'] }
};

Object.keys(cmds).forEach(key => {
var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if(value.a) {
    value.a.forEach(alias => {
    client.aliases.set(alias, command)
  })
  }
})

const ytdl = require('ytdl-core');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

let active = new Map();

client.on('warn', console.warn);
client.on('error', console.error);

client.on('ready', () => {
    console.log(`Created By: MohmaedAlhassny`);
    console.log(`Developed By: ! Abdulrhman with ♥`);
    console.log(`Customer Number 1`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
    client.user.setActivity(`Type ${prefix}help`,{type: 'Playing'});
});

client.on('message', async msg => {
    if(msg.author.bot) return undefined;


    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (msg.content.match(prefixMention)) {
    return msg.reply(`My prefix is \`${prefix}\``);
  }

  if(!msg.content.startsWith(prefix)) return undefined;


  if(ids.length > 0 && config.privatee){

    let usersArray = Array();

    ids.forEach(id => {
    let user = client.users.get(id)
    if(user) usersArray.push(user)
})
    return msg.reply(`Only bot owner(s) can use this bot [${usersArray.map(user => user.tag).join(', ')}]`)

  }


const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    let s;

    let Ms = sub.split(' ')[1] == 'month' ? sub.split(' ')[0] * 30 : 1;

    if(sub.split(' ')[1] == 'month') s = 1000 * 60 * 60 * 24 * Ms;

    if(s - (Date.now() - regDate) <= 0 && cmd != undefined) return msg.reply('Bot Subscription is end, you can\'t use bot.')

    if(cmd == 'mysub') {

      moment.locale('en-US')

      let subb = sub.split(' ');

      let count = parseInt(subb.slice(0));
      let dur = subb.slice(1);

      let mss;

      let moMs = dur == 'month' ? count * 30 : 1;

      if(dur == 'month') mss = 1000 * 60 * 60 * 24 * moMs;


      let expDate = moment(regDate).add(count, dur);
      expDate = dateformat(expDate.toDate(), 'yyyy/mm/dd"-"hh:MM')
      let time = ms(mss - (Date.now() - regDate));

      let usersArray = Array();

      config.ids.forEach(id => {
      let user = client.users.get(id)
      if(user) usersArray.push(user)
  })

      msg.channel.send(`**Subscription Expiry Date : ${expDate}\nYour Subscription will end after : ${time.months ? time.months : '0'} Months, ${time.days} Days, ${time.hours} Hours and ${time.minutes} Minutes\nRegistered For : ${usersArray.map(user => user.tag).join(', ')}**`)

}

    }

);

//======================================[Client]======================================


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("Oxygen Roleplay✨",{type: 'WATCHING'})
});

    client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``` New Dm Mesage ```')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`From : (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("690156654158807080").send({ embed: iiMo });
    }
});
    
//======================================[Owners]======================================


const developers = ["286088294234718209","516364281990611006","329640165406670848"]
const admin = "#";

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(admin + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  }  else  
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Kah");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(admin + 'setname')) {
      client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});  


//======================================[ Log ]======================================

  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`✏ **Message Editing
Sent By : <@${message.author.id}>                                                                                                                         Edit In :** <#${message.channel.id}>\n\nOld :\n \`${message.cleanContent}\`\n\nNew :\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **Deleted Message**
**Sent By : <@${message.author.id}>                                                                                                                        Deleted in :** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 
});

     
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#fd0101')            
            .setTitle('❌ RoleDeleted')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("Ban Added")
	    .setColor("BLACK")
        .setThumbnail(myUser.avatarURL)
        .addField('# Banned User:',`**${myUser.username}**`,true)
        .addField('# Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("Ban revoked !")
		.setColor("BLACK")
		 .setThumbnail(myUser.avatarURL)
        .addField('# Banned User',`**${myUser.username}**`,true)
        .addField('# Revoked By',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});


//======================================[ WelCome ]======================================



  
//======================================[Commands]======================================
  
  
  client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("Error : `` Type a Value To Delete ``").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.reply("** Cleared : ``" + textxt + "`` **").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
    if (message.content.startsWith( prefix + "avatar")) {
        if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      
        const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setImage(`${x5bzm.avatarURL}`)
        .addField('Requested By:', message.author.tag)
      message.channel.sendEmbed(embed);
      }
    }
});
client.on('message', message => {
    if (message.content.startsWith( prefix + "avatar")) {
        if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();

 if (mentionned) return;
          var x5bzm = message.author;
      
        const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content === prefix + 'guild'){
            const millis = new Date().getTime() - message.member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild;

        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('GuidlOwner',message.guild.owner,true)
        .addField('Guild ID', message.guild.id,true)
        .addField('Guild MemberCount', `${message.guild.memberCount}`+` [Online : ${message.guild.members.filter(m=>m.presence.status == 'online').size}]`)
        .addField('Guild Channels',`\`🔊\` ${message.guild.channels.filter(m => m.type === 'text').size} | `+`\`#\`${message.guild.channels.filter(m => m.type === 'voice').size} `)
        .addField('Guild RolesCount',` ${message.guild.roles.size} `,true)
        .addField('Created',`\`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField('Guild Region',message.guild.region,true)
        
        
        message.channel.send(embed)
    }
})

client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('BLACK')
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true)
            .addField('Prefix' , `[ ${prefix} ]` , true)
            
    })
}
});
      
const arraySort = require('array-sort'),
table = require('table');
client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "invites")) {
                 if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');

  var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
            
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
       
      if (i.uses === 50) {
          message.member.addRole(message.member.guild.roles.find("name","Golden Member"));
      }
     
    })
    
    const embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});

client.on('message', message => {
         if(message.content === prefix + "قفل") {
                             if(!message.channel.guild) return 
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **على كيف امك هي ؟**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("> ** تم قفل الشات :lock: **")
                });
                  }
      if(message.content === prefix + "فتح") {
                          if(!message.channel.guild) return 
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**على كيف امك هي ؟**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("> ** تم فتح الشات :unlock:  **")
                });
      }
         
});

const top = JSON.parse(fs.readFileSync("top.json", "UTF8"));
 
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n **✨ | For More: ${prefix}top text**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.voice}**`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n **:sparkles: More?** ${prefix}top voice`, true)
 
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.voice} **`
                }
            }).join("\n")}`;
            const more1 = "**:sparkles: More? `"+prefix+"top text`**";
            const more2 = "**:sparkles: More? `"+prefix+"top voice`**";
            var embed = new Discord.RichEmbed()  
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}    \n\n ${more1}`, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr}   \n\n ${more2}`, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
           
 
            });
        }
  }
  }
});

let newsjson = JSON.parse(fs.readFileSync("./news.json", "utf8"))
client.on('message', message => {
    let news = message.content.split(" ").slice(1).join(" ")
    if(message.content.startsWith(prefix + 'setnews')) {
          if(!news) return message.channel.send(`❌ | Please Write The News For Example: ${prefix}setnews fix bugs`)
           newsjson[client.user.id] = {
            new: news,
           }
           message.channel.send(`✅ | Done The Bot News Has Been Updated !`)
        }
    if(message.content.startsWith( prefix + 'news')) {
        if(!newsjson[client.user.id]) newsjson[client.user.id] = {
            new: 'nothing'
        }
        let embed = new Discord.RichEmbed()
        .setTitle(`📰 | ${message.guild.name} Latest News :`)
        .setDescription(`${newsjson[client.user.id].new}`)
        .setTimestamp()
        .setFooter(`Requested By ${message.author.username}`)
           message.channel.sendEmbed(embed)
        }
        fs.writeFile("./news.json", JSON.stringify(newsjson), (err) => {
        })
})


var guilds = {};
client.on('message',async message => {
    
        if (message.content.toLowerCase() === prefix + "تحديث جديد 2") {
if(!message.channel.guild) return message.reply(' ');


  let submite = message.guild.channels.find(`name`, "updates");

  if(!submite) return message.channel.send(`** لا يوجد روم ب اسم \`\`updates\`\` **`);

    let filter = m => m.author.id === message.author.id;

    let titleup;

    let thisFalse;
        let emHYPE = "<a:hype:690126331337375769>";
        let Hitler = "<:hitler:689598286998536281>";
        let emULR = "<a:5843_URL:689595617185497091>"; 
        let emLoad = "<a:loading:689595742662557732>";
        let emDONE = "<a:success:689595588177821707>";

    message.channel.send(`${emHYPE} ** قم بوضع عنوان التحديث **`).then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      titleup = collected.first().content;

      let dec;

      msg.edit(`${Hitler} ** قم بوضع وصف التحديث **`).then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            dec = collected.first().content;

            let img;

            msg.edit(`${emULR} ** قم بوضع صورة للتحديث **`).then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

               img = collected.first().content;

      msg.edit(`${emLoad} ** في حال كنت موافق لارسال التحديث اكتب \`\`موافق\`\` , اذاا كنت تريد ايقاف الاجراء اكتب \`\`توقف\`\` **`);

 message.channel.awaitMessages(response => response.content === 'موافق' || 'توقف' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'توقف') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'موافق') {

          if(thisFalse === false) return;

          msg.edit(`${emDONE} ** تم وضع التحديث في غرفة المخصصة **`);

          collected.first().delete();

          submite.send(`**> ${titleup}
 ${dec}**`);
submite.sendFile(img)

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});
  
  
  
    client.on('message',async message => {

        if (message.content.toLowerCase() === prefix + "تحديث جديد") {
    
    if(!message.channel.guild) return message.reply(' ');
    
    
      let submite = message.guild.channels.find(`name`, "updates");
    
      if(!submite) return message.channel.send(`** لا يوجد روم ب اسم \`\`updates\`\` **`);
    
        let filter = m => m.author.id === message.author.id;
    
        let titleup;
    
        let thisFalse;
            let emHYPE = "<a:hype:690126331337375769>";
            let Hitler = "<:hitler:689598286998536281>";
            let emULR = "<a:5843_URL:689595617185497091>"; 
            let emLoad = "<a:loading:689595742662557732>";
            let emDONE = "<a:success:689595588177821707>";
    
        message.channel.send(`${emHYPE} ** قم بوضع عنوان التحديث **`).then(msg => {
    
    
    
        message.channel.awaitMessages(filter, {
    
          max: 1,
    
          time: 90000,
    
          errors: ['time']
    
        })
    
        .then(collected => {
    
          collected.first().delete();
    
          titleup = collected.first().content;
    
          let dec;
    
          msg.edit(`${Hitler} ** قم بوضع وصف التحديث **`).then(msg => {
    
    
    
              message.channel.awaitMessages(filter, {
    
                max: 1,
    
                time: 90000,
    
                errors: ['time']
    
              })
    
              .then(collected => {
    
                collected.first().delete();
    
                dec = collected.first().content;
    
                let img;
    
                msg.edit(`${emULR} ** قم بوضع صورة للتحديث **`).then(msg => {
    
    
    
                  message.channel.awaitMessages(filter, {
    
                    max: 1,
    
                    time: 90000,
    
                    errors: ['time']
    
                  })
    
                  .then(collected => {
    
                    collected.first().delete();
    
                   img = collected.first().content;

         const embed = new Discord.RichEmbed()
         .setColor('Gold')
         .setImage(img)
         .setThumbnail("https://media.discordapp.net/attachments/689539467228479560/690146105379389642/Oxygen.png")
         .setDescription(`**
>   ${titleup}
         
 ${dec} **`)
          msg.edit(`${emLoad} ** في حال كنت موافق لارسال التحديث اكتب \`\`موافق\`\` , اذاا كنت تريد ايقاف الاجراء اكتب \`\`توقف\`\` **`);
    
     message.channel.awaitMessages(response => response.content === 'موافق' || 'توقف' && filter,{
    
            max: 1,
    
            time: 90000,
    
            errors: ['time']
    
          })
    
          .then(collected => {
    
            if(collected.first().content === 'توقف') {
    
              msg.delete();
    
              message.delete();
    
              thisFalse = false;
    
            }
    
            if(collected.first().content === 'موافق') {
    
              if(thisFalse === false) return;
    
              msg.edit(`${emDONE} ** تم وضع التحديث في غرفة المخصصة **`);
    
              collected.first().delete();
    


              submite.send(embed);
    
            }
    
          }
    
      );
    
    });
    
        });
    
      }
    
        );
    
      });
    
    }
    
    );
    
        })}});
      
    
    



client.login(process.env.BOT_TOKEN);
