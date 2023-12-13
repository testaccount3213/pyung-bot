// import { Client } from 'discord.js';
const {Client,GatewayIntentBits} = require('discord.js')
require('dotenv').config();

const schedule = require("node-schedule");

const cronTimes = ['55 21 * * *','6 0 * * *', '26 0 * * *', '6 10 * * *', '26 10 * * *', '26 1 * * *', '6 1 * * *', '6 12 * * *', '26 12 * * *', '6 13 * * *', '26 13 * * *', '06 22 * * *', '26 22 * * *'];

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

const startBot = async () => {
    await client.login(BOT_TOKEN);
    console.info("info: login success!");
};

startBot().then(() => {
    console.log("hi");
}).catch(err => {
    console.error(err);
});



client.on('ready', () => {
    const channel = client.channels.cache.get('1027480316622934057');
    const ch2 = client.channels.cache.get('1132536943792627722');

    cronTimes.forEach((cronTime) => {
        schedule.scheduleJob(cronTime, () => {
            console.log('퓽');
            channel.send('퓽');
            ch2.send('퓽');
        });
    });
});