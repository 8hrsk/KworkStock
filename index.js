const links = require('./links.json'); // kwork links
const RNW = require('./RNW/RNW');
const Bot = require('./bot/Bot');
const Interface = require('./Interface');
const KworkManager = require('./Database/KworkManager');
const UserManager = require('./Database/UserManager');
require('dotenv').config();

// const rnw = new RNW(process.env.STOCK_STORAGE);

const DatabaseConnectionData = {
    user: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
}

const kworkManager = new KworkManager(DatabaseConnectionData)
const userManager = new UserManager(DatabaseConnectionData)

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_NAME);

const interface = new Interface(links);

const Interval = setInterval(() => {
    interface.start((messages) => {
        messages.forEach((message) => {
            bot.send(message.message);
        })
    });
}, 180000);