class Commands {

    constructor(bot, MessageContext) {
        this.bot = bot
        this.MessageContext = MessageContext
    }

    start() {} // Выслать информацию о боте и прайс-лист

    help() {} // Информация о боте, коммандах, прайс-листе, условиях пользования и тд.

    subscribe() {} // Оформить подписку на рассылку

    unsubscribe() {} // Отказаться от рассылки

    getByCategory() {} // Возвращает последний созданный кворк ииз категори

    setUltraByTelegramID() {} // Установить статус ультра пользователю. Доступно только администратору

    setAdminByTelegramID() {} // Установить статус администратора. Доступно только администратору

    timeBeforeSubEnd() {} // Возвращает время до окончания подписки
}

module.exports = Commands