const links = require('./links.json'); // kwork links
const selectors = require('./selectors.json'); // kwork stock selectors
const RNW = require('./RNW/RNW');
require('dotenv').config();

const Bot = require('./bot/Bot');
const Parser = require('./parser/Parser');
const rnw = new RNW(process.env.STOCK_STORAGE);

const parser = new Parser(links, selectors);
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_NAME);

const Interval = setInterval(() => {
    
}, 180000);