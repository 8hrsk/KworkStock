const Database = require('./Database');

class UserManager extends Database {
    getUserByTelegramID(telegramID, callback) {}

    getUserByID(id, callback) {}

    getSubs(callback) {}

    getUsersByCategory(category, callback) {}

    subscribe(telegramID, categories) {}

    unsubscribe(telegramID) {}

    getUltra(callback) {}

    setUltra(telegramID) {}

    timeBeforeSubEnd(telegramID, callback) {}
}

module.exports = UserManager