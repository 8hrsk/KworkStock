const Commands = require('./Commands');

class MessageHandler {
    constructor(Bot) {
        this.bot = Bot
    }

    async handle(messageContext) {
        
    }

    async send(telegramChatID, message) {
        this.bot.sendToChat(telegramChatID, message)
    }
}

module.exports = MessageHandler