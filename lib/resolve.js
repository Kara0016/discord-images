const fetch = require('node-fetch');

module.exports = {

    get: async function (params) {
        if(params == 'baka') {
            return fetch(`https://nekos.life/api/v2/img/baka`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'blush') {
            return fetch(`https://waifu.pics/api/sfw/blush`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'dance') {
            return fetch(`https://waifu.pics/api/sfw/dance`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'cuddle') {
            return fetch(`https://nekos.life/api/v2/img/cuddle`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bite') {
            return fetch(`https://waifu.pics/api/sfw/bite`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'slap') {
            return fetch(`https://nekos.life/api/v2/img/slap`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'wink') {
            return fetch(`https://waifu.pics/api/sfw/wink`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bonk') {
            return fetch(`https://waifu.pics/api/sfw/bonk`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bully') {
            return fetch(`https://nekos.life/api/v2/img/bully`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'hug') {
            return fetch(`https://waifu.pics/api/sfw/hug`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kiss') {
            return fetch(`https://waifu.pics/api/sfw/kiss`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'pat') {
            return fetch(`https://waifu.pics/api/sfw/pat`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'happy') {
            return fetch(`https://waifu.pics/api/sfw/happy`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kill') {
            return fetch(`https://waifu.pics/api/sfw/kill`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'highfive') {
            return fetch(`https://waifu.pics/api/sfw/highfive`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'wave') {
            return fetch(`https://waifu.pics/api/sfw/wave`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'cry') {
            return fetch(`https://waifu.pics/api/sfw/cry`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'smile') {
            return fetch(`https://waifu.pics/api/sfw/smile`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'punch') {
            return fetch(`https://neko-love.xyz/api/v1/punch`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'kick') {
            return fetch(`https://waifu.pics/api/sfw/kick`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'poke') {
            return fetch(`https://nekos.life/api/v2/img/poke`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'goodnight') {
            return fetch(`https://api.deltaa.me/goodnight`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'zerotwo') {
            return fetch(`https://api.deltaa.me/zerotwo`)
            .then(res => res.json())
            .then(json => { return json.url })
        }
        if(params == 'confused') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=confused`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'sad') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=sad`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'thinking') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=thinking`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'yeah') {
            return fetch(`https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes`)
            .then(res => res.json())
            .then(json => { return json.reaction })
        }
        if(params == 'yeet') {
            return fetch(`https://waifu.pics/api/sfw/yeet`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'stare') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/action/stare`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'bored') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/bored`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'scream') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/scream`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'nervous') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/nervous`)
            .then(res => res.json())
            .then(json => { return json.url });
        }
        if(params == 'angry') {
            return fetch(`https://nekoapi.vanillank2006.repl.co/api/reaction/angry`)
            .then(res => res.json())
            .then(json => { return json.url});
        }
        if(params == 'cringe') {
            return fetch(`https://waifu.pics/api/sfw/cringe`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'glomp') {
            return fetch('https://waifu.pics/api/sfw/glomp')
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'pgif') {
            return fetch(`https://nekobot.xyz/api/image?type=pgif`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'anal') {
            return fetch(`https://nekobot.xyz/api/image?type=anal`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == "fourk") {
            return fetch(`https://nekobot.xyz/api/image?type=4k`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'ass') {
            return fetch(`https://nekobot.xyz/api/image?type=ass`)
            .then(res => res.json())
            .then(res => { return json.message})
        }
        if(params == 'gonewild') {
            return fetch(`https://nekobot.xyz/api/image?type=gonewild`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'pussy') {
            return fetch(`https://nekobot.xyz/api/image?type=pussy`)
            .then(res => res.json())
            .then(json => {return json.message})
        }
        if(params == 'tigh') {
            return fetch(`https://nekobot.xyz/api/image?type=thigh`)
            .then(res => res.json())
            .then(json => {return json.message})
        }
        if(params == 'hentaiass') {
            return fetch(`https://nekobot.xyz/api/image?type=hass`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'hentai') {
            return fetch(`https://nekobot.xyz/api/image?type=hentai`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'hmidriff') {
            return fetch(`https://nekobot.xyz/api/image?type=hmidriff`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'hentaitigh') {
            return fetch(`https://nekobot.xyz/api/image?type=hthigh`)
            .then(res => res.json())
            .then(json => { return json.message})
        }
        if(params == 'erokemo') {
            return fetch(`https://nekos.life/api/v2/img/erokemo`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'kitsune') {
            return fetch(`https://nekos.life/api/v2/img/fox_girl`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'lewd') {
            return fetch(`https://nekos.life/api/v2/img/lewd`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'nekofeet') {
            return fetch(`https://nekos.life/api/v2/img/feet`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'nekopussy') {
            return fetch(`https://nekos.life/api/v2/img/pussy_jpg`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'nekotits') {
            return fetch(`https://nekos.life/api/v2/img/tits`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'solo') {
            return fetch(`https://nekos.life/api/v2/img/solo`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'wallpaper') {
            return fetch(`https://nekos.life/api/v2/img/wallpaper`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'randomHentaiGif') {
            return fetch(`https://nekos.life/api/v2/img/randomHentaiGif`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'nekoGif') {
            return fetch(`https://nekos.life/api/v2/img/nsfw_neko_gif`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'lesbian') {
            return fetch(`https://nekos.life/api/v2/img/les`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'cumsluts') {
            return fetch(`https://nekos.life/api/v2/img/cum`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'classic') {
            return fetch(`https://nekos.life/api/v2/img/classic`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'boobs') {
            return fetch(`https://nekos.life/api/v2/img/boobs`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'bj') {
            return fetch(`https://nekos.life/api/v2/img/bj`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'tickle') {
            return fetch(`https://nekos.life/api/v2/img/tickle`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'neko') {
            return fetch(`https://nekos.life/api/v2/img/neko`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'meow') {
            return fetch(`https://nekos.life/api/v2/img/meow`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'lizard') {
            return fetch(`https://nekos.life/api/v2/img/lizard`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'feed') {
            return fetch(`https://nekos.life/api/v2/img/feed`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'why') {
            return fetch(`https://nekos.life/api/v2/img/why`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'fact') {
            return fetch(`https://nekos.life/api/v2/img/fact`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'woof') {
            return fetch(`https://nekos.life/api/v2/img/woof`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'goose') {
            return fetch(`https://nekos.life/api/v2/img/goose`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'avatar') {
            return fetch(`https://nekos.life/api/v2/img/avatar`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'waifu') {
            return fetch(`https://nekos.life/api/v2/img/waifu`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'gecg') {
            return fetch(`https://nekos.life/api/v2/img/gecg`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'holo') {
            return fetch(`https://nekos.life/api/v2/img/holo`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'spoiler') {
            return fetch(`https://nekos.life/api/v2/img/spoiler`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'kemonomimi') {
            return fetch(`https://nekos.life/api/v2/img/kemonomimi`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
        if(params == 'catboy') {
            return fetch(`https://api.catboys.com/img`)
            .then(res => res.json())
            .then(json => { return json.url})
        }
          
    }
}
