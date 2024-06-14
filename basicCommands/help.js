const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1251168084018855979/1251188847832989788/9147-dark-n-purple-sky-banner-pfpsgg.gif?ex=666dabeb&is=666c5a6b&hm=45cbb2fab8c95ecffcdfb6bea471b4e24a19536e13c047ac3a2577ffdfcebb07&', 
        url: 'https://discord.com/invite/Szh2cEw5Yx'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Cgaming49]**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1251168084018855979/1251188847832989788/9147-dark-n-purple-sky-banner-pfpsgg.gif?ex=666dabeb&is=666c5a6b&hm=45cbb2fab8c95ecffcdfb6bea471b4e24a19536e13c047ac3a2577ffdfcebb07&`);

    const button1 = new ButtonBuilder()
      .setLabel('No Need')
      .setURL('https://www.youtube.com/')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.com/invite/Szh2cEw5Yx')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Enjoy')
      .setURL('https://youtube.com')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
