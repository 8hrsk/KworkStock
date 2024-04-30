const links = require('./links.json'); // kwork links
require('dotenv').config();

const Bot = require('./bot/Bot');
const Parser = require('./parser/Parser');

const parser = new Parser(links);
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_NAME);