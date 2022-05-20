## Installation
```
npm i discord-images
```
A package for multiple anime actions for discord.

## ACTIONS

| Actions | Description |
| -------- | ----------- |
| `baka` | Gets a URL of a baka image |
| `blush` | Gets a URL of a blush image |
| `cuddle` | Gets a URL of a cuddle image |
| `bite` | Gets a URL of a bite image |
| `dance` | Gets a URL of a dance image |
| `slap`  | Get a URL of a slap image |
| `bonk` | Get a URL of a bonk image |
| `kick` | Get a URL of a kick image |
| `bully` | Get a URL of a bully gif |
| `hug` | Get a URL of a hug image |
| `confused` | Get a URL of a confused image |
| `kiss` | Get a URL of a kiss image |
| `pat` | Get a URL of a pat image |
| `happy`  | Get a URL of a happy image |
| `yes` | Get a URL of a yes image |
| `poke` | Get a URL of a poke image |
| `highfive` | Get a URL of a highfive image |
| `wink` | Get a URL of a wink image |
| `wave` | Get a URL of a wave image |
| `goodnight` | Get a URL of a goodnight image |
| `thinking` | Get a URL of a thinking image |
| `sad` | Get a URL of a sad image |
| `cry` | Get a URL of a cry image |
| `stare` | Get a URL of a stare image |
| `bored` | Get a URL of a cry image |
| `scream` | Get a URL of a cry image |
| `nervous` | Get a URL of a cry image |
| `smile` | Get a URL of a smile image |
| `punch` | Get a URL of a punch image |
| `kill` | Get a URL of a kill image |
| `yeet` | Get a URL of a yeet image |
| `wallpaper` | Get a URL of a wallpaper |
| `zerotwo` | Get a URL of a zerotwo image |
| `confused` | Get a URL of a confused image |
| `sad` | Get a URL of a sad image |
| `thinking` | Get a URL of a thinking image |
| `yes` | Get a URL of a yes image |
| `yeet` | Get a URL of a yeet image |

### And More !

| Category | Number |
| -------- | ----------- |
| `SFW` | 50 |
| `NSFW` | 26 |



## Examples

Discord.js v13 Example
```js
const { Client } = require('discord.js');
const anime = require('discord-images');
const client = new Client({ 
  intents: 32767
});

client.once('ready', () => {
	console.log('Ready to hug');
});
client.on('messageCreate', async(message) => {
    if(message.content === 'hug') {
        message.channel.send(await anime.hug())
    }
})
client.login('your-token');
```

With my [template](https://github.com/Kara0016/Discord-Template)
```js
const { MessageEmbed } = require('discord.js')
const anime = require('discord-images')

module.exports = {
    name: "hug",
    description: "Sends an action image",
    run: async (client, message, args) => {
        message.delete()
        const image = await anime.hug()
        let mentionedUser = message.mentions.members.first()
        embed = new MessageEmbed()
            .setDescription(`Hug Image`)
            .setImage(image)
            .setTimestamp()
        message.channel.send({
            embeds: [embed]
        })

    }
}
```

## Support Server

<a href="https://discord.gg/6qzkefEvRB">Clic here</a>

### Support-Gustave


### Gustave Bot
---

A multipurpose bot to help you with your server tasks.

[Discord](https://discord.gg/6qzkefEvRB) |
[Invite](https://discord.com/api/oauth2/authorize?client_id=876210410104172606&permissions=8&scope=bot%20applications.commands)

### Ping-It
---

Ping-It: The perfect mini-game and entertainment bot for your discord server! Lots of modules like Levelling, Games, Utility, Etc!

[Invite](https://discord.com/oauth2/authorize?client_id=955086662969458769&scope=bot) |
[Top.gg](https://top.gg/bot/955086662969458769)
