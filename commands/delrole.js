const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticX")
let vemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticV")
  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(xemoji + " You don't have the correct permission.")

const k = new Discord.RichEmbed()
.setAuthor("Command: ch!delrole", client.user.avatarURL)
.setDescription("**Description:** Delete a role\n**Usage:** ch!delrole [name]\n**Example:** ch!delrole Chromatic")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

  if(!args.slice(0).join(' ')) return message.channel.send(k);

  let role = args.slice(0).join(' ')
  
  message.guild.roles.find('name', role).delete()
  
  message.channel.send(vemoji + " Deleted role " + role)
  
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'delrole',
  description: 'COX.',
  usage: 'search <words>'
};
