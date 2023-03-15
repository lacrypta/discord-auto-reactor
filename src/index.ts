import { Client, Events, GatewayIntentBits, Message } from 'discord.js'

import getReactionMap from './config/reaction-map'
import { ReactionEntry } from './model/ReactionEntry'

require('dotenv').config()

let reactionMap: ReactionEntry[]

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ]
})

client.on(Events.MessageCreate, async (message: Message) => {
    if (message.guildId == process.env.DISCORD_GUILD_ID) {
        const channelId: string = (await message.channel.fetch()).id
        reactionMap.forEach(async (entry: ReactionEntry) => {
            if (entry.channelId == channelId) {
                entry.reactions.map(async (emoji: string) => {
                    await message.react(emoji)
                })
            }
        })
    }
})

client.once(Events.ClientReady, async () => {
    reactionMap = await getReactionMap()
    console.log('Discord bot ready')
})

client.login(process.env.DISCORD_BOT_TOKEN)
