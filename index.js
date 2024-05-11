const links = require('./links.json'); // kwork links
const RNW = require('./RNW/RNW');
const Bot = require('./bot/Bot');
const Interface = require('./Interface');
require('dotenv').config();


const ParserV4 = require('./parser/ParserV4');
// const rnw = new RNW(process.env.STOCK_STORAGE);

// const parserv4 = new ParserV4(links.it, (data) => {
//     console.log(data);
// });

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_NAME);

const interface = new Interface(links);



const Interval = setInterval(() => {
    interface.start((messages) => {
        messages.forEach((message) => {
            bot.send(message.message);
        })
    });
}, 180000);