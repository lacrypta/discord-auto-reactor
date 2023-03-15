import { GatewayIntentBits, Message, Partials } from 'discord.js'
import { Client } from 'discord.js'

require('dotenv').config()

const client = new Client({
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ],
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.Guilds,
    ]
})

client.on('ready', () => {
    console.log('Discord bot ready')
})

client.login(process.env.DISCORD_BOT_TOKEN)
