const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setTitle("الاوامر العامة")

      .setDescription("اوامر بوت القيفاوي")

      .addField("🎁 Giveaway 🎁",`**start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]**`)

      .addField("Examples", `${prefix}start #giveaway 5m 1 Testing\n${prefix}end Testing\n${prefix}reroll Testing`)

      .addField("Utility", "ping, invite", true)

      .addField("ℹ Information ℹ", "stats", true)

      .addField("Check out", "[This Channel](https://discord.gg/hqFdYPJQ5F) to make your own giveaway bot")

      .setTimestamp()

      .setFooter(`Requested By ${message.author.tag}`, client.user.displayAvatarURL());

      message.channel.send("**Sent the commands in Direct Messages! 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
