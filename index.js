require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once("clientReady", () => {
    console.log("Bot is ready!");
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Gets triggered whenever someone sends a message
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const raw = message.content;
    const content = raw.toLowerCase();
    const gioUserId = 264111776583516160;

    // ===== PHRASE DETECTION EXAMPLES =====
    const hasExactPhrase = /^kotone .+ if (you\s*are|ur|u\s*r) r\s*$/i.test(raw); //regex to detect if someone says kotone [anything] if you are r

    const lucileTriggerWords = ['lucile', 'lucille', 'elisha'];
    const hasLucileTriggerWord = lucileTriggerWords.some(name =>
        content.includes(name)
    );

    // ===== RESPONSE EXAMPLES =====
    if (hasExactPhrase) {
        return message.reply(`Go ask <@${gioUserId}>`);
    }

    if (hasLucileTriggerWord) {
        return message.reply(`Leave Lucile alone 😠`);
    }
});

client.login(process.env.TOKEN);