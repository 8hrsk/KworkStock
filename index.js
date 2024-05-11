const links = require('./links.json'); // kwork links
const Bot = require('./bot/Bot'); // telegram Bot
const Interface = require('./Interface'); // kwork telegram channel interface
const UserInterface = require('./UserInterface');

const KworkManager = require('./Database/KworkManager'); // kwork manager Db
const UserManager = require('./Database/UserManager'); // user manager Db

require('dotenv').config();

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
const userInterface = new UserInterface();

const ChannelInterval = setInterval(() => {
    interface.start((messages) => {
        messages.forEach((message) => {
            bot.send(message.message);
        })
    });
}, 180000);

const UserInterval = setInterval(() => {

}, 60000)