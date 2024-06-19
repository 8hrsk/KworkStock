class UserManager {
    constructor(DatabaseConnection) {
        this.db = DatabaseConnection
    }

    getUserByTelegramID(telegramID, callback) {}

    getUserByID(id, callback) {}

    getSubs(callback) {
        this.db
    }

    getUsersByCategory(category, callback) {}

    subscribe(telegramID, categories) {}

    unsubscribe(telegramID) {}

    getUltra(callback) {}

    setUltra(telegramID) {}

    timeBeforeSubEnd(telegramID, callback) {}
}

module.exports = UserManager