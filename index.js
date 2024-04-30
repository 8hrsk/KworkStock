const links = require('./links.json'); // kwork links
const selectors = require('./selectors.json'); // kwork stock selectors
require('dotenv').config();

const Bot = require('./bot/Bot');
const Parser = require('./parser/Parser');

const parser = new Parser(links, selectors);
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_NAME);

setInterval(() => {
    
}, 180000);